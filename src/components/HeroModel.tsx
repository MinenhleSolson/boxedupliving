"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/heroModel.glb");
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload("/models/heroModel.glb");

export default function HeroModel() {
  return (
    <div className="w-full h-full min-h-[500px] md:min-h-[600px] rounded-2xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        className="bg-transparent rounded-2xl"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <Model />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          minDistance={8}
          maxDistance={20}
          autoRotate={false}
          target={[0, 0, 0]}
          makeDefault
        />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

