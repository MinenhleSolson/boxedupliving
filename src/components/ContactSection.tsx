"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function Model() {
    const { scene } = useGLTF("/models/contactModel.glb");
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
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

useGLTF.preload("/models/contactModel.glb");

export default function ContactSection() {
    return (
        <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                        Get In <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to transform your space? Let&apos;s start the conversation about your dream container project.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Side - Contact Form */}
                    <div className="order-1 lg:order-1">
                        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100">
                            <form className="space-y-6">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none text-gray-900"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none text-gray-900"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none text-gray-900"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none text-gray-900"
                                        placeholder="+27 123 456 7890"
                                    />
                                </div>

                                {/* Project Type */}
                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Project Type
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none text-gray-900 bg-white"
                                    >
                                        <option value="">Select a project type</option>
                                        <option value="residential">Residential Container Home</option>
                                        <option value="office">Office Space</option>
                                        <option value="retail">Retail / Pop-up Shop</option>
                                        <option value="hospitality">Hospitality / Airbnb</option>
                                        <option value="custom">Custom Project</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Tell Us About Your Vision
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none text-gray-900 resize-none"
                                        placeholder="Describe your dream container space..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-4 px-8 bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Send Message</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>
                            </form>

                            {/* Contact Info */}
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <p className="text-sm font-semibold text-gray-900">hello@boxedupliving.co.za</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Phone</p>
                                            <p className="text-sm font-semibold text-gray-900">+27 123 456 7890</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - 3D Model */}
                    <div className="order-2 lg:order-2">
                        <div className="w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                            <Canvas
                                camera={{ position: [0, 0, 60], fov: 40 }}
                                gl={{ antialias: true, alpha: true }}
                                className="bg-transparent"
                            >
                                <ambientLight intensity={0.6} />
                                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                                <pointLight position={[-10, -10, -5]} intensity={0.5} />
                                <Model />
                                <OrbitControls
                                    enableZoom={true}
                                    enablePan={false}
                                    enableRotate={true}
                                    minDistance={15}
                                    maxDistance={50}
                                    autoRotate={false}
                                    target={[0, 0, 0]}
                                    makeDefault
                                />
                                <Environment preset="city" />
                            </Canvas>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-green-50 to-transparent opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-green-50 to-transparent opacity-50 pointer-events-none" />
        </section>
    );
}
