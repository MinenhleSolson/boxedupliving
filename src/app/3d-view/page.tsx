"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

// Dynamic import to avoid SSR issues with Three.js
const ContainerViewer = dynamic(() => import("@/components/ContainerViewer"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[600px] bg-gray-900 rounded-3xl flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin" />
                <p className="text-white text-sm">Loading 3D Experience...</p>
            </div>
        </div>
    ),
});

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
};

const containerTypes = [
    {
        id: "home",
        name: "Container Home",
        description: "Modern living spaces with full amenities",
        modelPath: "/models/heroModel.glb",
        icon: "🏠",
    },
    {
        id: "office",
        name: "Garden Office",
        description: "Professional workspace in your backyard",
        modelPath: "/models/contactModel.glb",
        icon: "💼",
    },
    {
        id: "studio",
        name: "Creative Studio",
        description: "Gym, art studio, or music room",
        modelPath: "/models/heroModel.glb",
        icon: "🎨",
    },
    {
        id: "retail",
        name: "Pop-up Retail",
        description: "Eye-catching mobile retail spaces",
        modelPath: "/models/contactModel.glb",
        icon: "🛍️",
    },
];

const features = [
    {
        title: "360° Structural Integrity",
        description: "Each container is engineered to withstand extreme conditions. Our ISO-certified containers are reinforced with corrosion-resistant coatings and structural modifications that ensure decades of durability.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "Climate-Adaptive Insulation",
        description: "Advanced thermal insulation maintains comfortable temperatures year-round. Our multi-layer system includes spray foam, reflective barriers, and air gaps for optimal energy efficiency.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
    },
    {
        title: "Modular Expandability",
        description: "Start small, dream big. Our modular design allows you to connect multiple containers seamlessly. Add bedrooms, extend living spaces, or create multi-story structures as your needs evolve.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
    },
    {
        title: "Smart Home Integration",
        description: "Every container comes pre-wired for smart living. Control lighting, climate, security, and entertainment from your phone. We partner with leading smart home providers for seamless integration.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function ThreeDViewPage() {
    const [selectedType, setSelectedType] = useState(containerTypes[0]);

    return (
        <main className="w-full bg-[#0a0a0a] min-h-screen">

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-green-600/10 rounded-full blur-[150px]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], rotate: [0, -30, 0] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]"
                    />
                </div>

                <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-4 block">
                            Interactive Experience
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                            Explore in{" "}
                            <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
                                3D
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Interact with our container designs. Rotate, zoom, and discover the features that make our spaces extraordinary.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Container Type Selector */}
            <section className="py-8">
                <div className="mx-auto max-w-7xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
                    >
                        {containerTypes.map((type, index) => (
                            <motion.button
                                key={type.id}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedType(type)}
                                className={`flex-shrink-0 px-6 py-4 rounded-2xl border transition-all duration-300 text-left min-w-[200px] ${selectedType.id === type.id
                                    ? "bg-green-600/20 border-green-500 shadow-lg shadow-green-500/20"
                                    : "bg-gray-900/50 border-gray-700/50 hover:border-gray-600"
                                    }`}
                            >
                                <span className="text-3xl mb-2 block">{type.icon}</span>
                                <h3 className={`font-bold mb-1 ${selectedType.id === type.id ? "text-green-400" : "text-white"}`}>
                                    {type.name}
                                </h3>
                                <p className="text-gray-500 text-sm">{type.description}</p>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Main 3D Viewer */}
            <section className="py-8">
                <div className="mx-auto max-w-7xl px-4">
                    <ContainerViewer
                        modelPath={selectedType.modelPath}
                        showHotspots={true}
                        className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
                    />
                </div>
            </section>

            {/* Features Showcase */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                            Built to{" "}
                            <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
                                Last
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Every feature is designed with longevity, comfort, and sustainability in mind.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-[#1a1a2e] rounded-3xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-500 group hover:shadow-xl hover:shadow-green-500/5"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-green-600/10 flex items-center justify-center mb-6 text-green-400 group-hover:bg-green-600/20 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Container Specifications
                        </h2>
                        <p className="text-gray-400">Standard sizes available, custom dimensions on request</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { size: "20ft Standard", dimensions: "6m × 2.4m × 2.6m", sqm: "14.4m²", ideal: "Studio, Office, Storage" },
                            { size: "40ft Standard", dimensions: "12m × 2.4m × 2.6m", sqm: "28.8m²", ideal: "1-2 Bedroom Home" },
                            { size: "40ft High Cube", dimensions: "12m × 2.4m × 2.9m", sqm: "28.8m²", ideal: "Premium Living, Loft Design" },
                        ].map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#1a1a2e] rounded-2xl p-6 border border-gray-700/50 text-center hover:border-green-500/30 transition-all duration-300"
                            >
                                <h3 className="text-2xl font-black text-green-400 mb-2">{spec.size}</h3>
                                <p className="text-white font-mono text-sm mb-2">{spec.dimensions}</p>
                                <p className="text-gray-400 text-sm mb-4">Floor Area: {spec.sqm}</p>
                                <p className="text-gray-500 text-xs">Ideal for: {spec.ideal}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-green-600/10" />

                <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                            Ready to Build Your{" "}
                            <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
                                Vision?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Let&apos;s transform a shipping container into your dream space. Get in touch for a free consultation and 3D design preview.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
                            >
                                Start Your Project
                            </motion.a>
                            <motion.a
                                href="/services"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all"
                            >
                                View All Services
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
