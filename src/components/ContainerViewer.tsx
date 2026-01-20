"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

interface HotspotData {
    position: [number, number, number];
    label: string;
    description: string;
}

const hotspots: HotspotData[] = [
    {
        position: [2.5, 1, 0],
        label: "Insulated Walls",
        description: "Premium thermal insulation for year-round comfort and energy efficiency."
    },
    {
        position: [-2.5, 0.5, 1],
        label: "Smart Windows",
        description: "Double-glazed windows with UV protection and optional smart tinting."
    },
    {
        position: [0, -0.5, 2.5],
        label: "Premium Flooring",
        description: "Durable, waterproof flooring options from bamboo to polished concrete."
    },
    {
        position: [0, 2, 0],
        label: "Reinforced Roof",
        description: "Weather-resistant roofing with optional solar panel integration."
    },
];

function Hotspot({ position, label, description, isActive, onClick }: {
    position: [number, number, number];
    label: string;
    description: string;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <Html position={position} center>
            <div className="relative">
                <button
                    onClick={onClick}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                        ? "bg-green-500 scale-125 shadow-lg shadow-green-500/50"
                        : "bg-white/20 backdrop-blur-sm border-2 border-white/50 hover:bg-green-500 hover:border-green-500"
                        }`}
                >
                    <span className="text-white font-bold text-sm">+</span>
                </button>
                {isActive && (
                    <div className="absolute left-10 top-1/2 -translate-y-1/2 w-64 bg-black/90 backdrop-blur-md rounded-xl p-4 border border-green-500/30 shadow-xl z-50">
                        <h4 className="text-green-400 font-bold text-sm mb-2">{label}</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">{description}</p>
                    </div>
                )}
            </div>
        </Html>
    );
}

function Model({ modelPath, hotspots, activeHotspot, setActiveHotspot }: {
    modelPath: string;
    hotspots: HotspotData[];
    activeHotspot: number | null;
    setActiveHotspot: (index: number | null) => void;
}) {
    const { scene } = useGLTF(modelPath);
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
        }
    });

    return (
        <group>
            <primitive
                ref={meshRef}
                object={scene}
                scale={1}
                position={[0, 0, 0]}
            />
            {hotspots.map((hotspot, index) => (
                <Hotspot
                    key={index}
                    position={hotspot.position}
                    label={hotspot.label}
                    description={hotspot.description}
                    isActive={activeHotspot === index}
                    onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
                />
            ))}
        </group>
    );
}

function LoadingSpinner() {
    return (
        <Html center>
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin" />
                <p className="text-white text-sm">Loading 3D Model...</p>
            </div>
        </Html>
    );
}

interface ContainerViewerProps {
    modelPath?: string;
    showHotspots?: boolean;
    className?: string;
}

export default function ContainerViewer({
    modelPath = "/models/heroModel.glb",
    showHotspots = true,
    className = ""
}: ContainerViewerProps) {
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleFullscreen = () => {
        if (!containerRef.current) return;

        if (!isFullscreen) {
            containerRef.current.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
        setIsFullscreen(!isFullscreen);
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-[#0d0d0d] to-gray-900 border border-gray-700/50 shadow-2xl ${className}`}
        >
            {/* Controls Overlay */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button
                    onClick={toggleFullscreen}
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300"
                    title="Toggle Fullscreen"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                </button>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-4 z-20">
                <div className="flex items-center gap-3 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                    <span className="text-gray-400 text-xs">Drag to rotate</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                    <span className="text-gray-400 text-xs">Scroll to zoom</span>
                    {showHotspots && (
                        <>
                            <span className="w-1 h-1 bg-gray-600 rounded-full" />
                            <span className="text-gray-400 text-xs">Click hotspots to explore</span>
                        </>
                    )}
                </div>
            </div>

            {/* 3D Canvas */}
            <Canvas
                camera={{ position: [0, 2, 12], fov: 40 }}
                gl={{ antialias: true, alpha: true }}
                className="bg-transparent"
                style={{ height: "100%", minHeight: "500px" }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                <directionalLight position={[-10, -5, -5]} intensity={0.5} />
                <pointLight position={[0, 10, 0]} intensity={0.5} color="#22c55e" />
                <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={0.5} />

                <Suspense fallback={<LoadingSpinner />}>
                    <Model
                        modelPath={modelPath}
                        hotspots={showHotspots ? hotspots : []}
                        activeHotspot={activeHotspot}
                        setActiveHotspot={setActiveHotspot}
                    />
                </Suspense>

                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    enableRotate={true}
                    minDistance={6}
                    maxDistance={25}
                    autoRotate={false}
                    target={[0, 0, 0]}
                    makeDefault
                />
                <Environment preset="night" />
            </Canvas>
        </motion.div>
    );
}

// Preload models
useGLTF.preload("/models/heroModel.glb");
useGLTF.preload("/models/contactModel.glb");
