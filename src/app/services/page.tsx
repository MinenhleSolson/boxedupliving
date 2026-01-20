"use client";

import { motion } from "framer-motion";
import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";

export default function ServicesPage() {
    const services = [
        {
            title: "Luxury Container Apartments",
            subtitle: "Residential Living",
            description: "Experience the future of urban living with our modular container apartments. Designed for efficiency without compromising on style, these multi-unit developments offer modern amenities, superior insulation, and architectural flair that stands out in any cityscape.",
            imageSrc: "/images/apartments.png",
            isImageRight: false,
        },
        {
            title: "Dream Family Home",
            subtitle: "Custom Residential",
            description: "Build your dream home faster and more sustainably. Our custom container homes are tailored to your lifestyle, featuring open-plan layouts, floor-to-ceiling windows, and eco-friendly finishes. From cozy starter homes to sprawling family estates, we bring your vision to life.",
            imageSrc: "/images/home.png",
            isImageRight: true,
        },
        {
            title: "Modern Fitness Studios",
            subtitle: "Commercial & Recreation",
            description: "Create an inspiring workout space with our container gym solutions. Perfect for personal trainers, boutique fitness studios, or home gyms. These durable units feature reinforced floors, climate control, and industrial aesthetics that energize every workout session.",
            imageSrc: "/images/gym.png",
            isImageRight: false,
        },
        {
            title: "Executive Garden Office",
            subtitle: "Work From Home",
            description: "Upgrade your work-from-home setup with a dedicated garden office. Separate your work life from your home life in a professional, sound-insulated space right in your backyard. Fully wired for connectivity and designed for productivity.",
            imageSrc: "/images/office.png",
            isImageRight: true,
        },
        {
            title: "Secure Storage Solutions",
            subtitle: "Industrial & Personal",
            description: "Safe, secure, and weatherproof. Our storage solutions go beyond the basic metal box. Equipped with smart security systems, climate control options, and custom shelving, they are perfect for business inventory or protecting your personal valuables.",
            imageSrc: "/images/storage.png",
            isImageRight: false,
        },
    ];

    return (
        <main className="w-full bg-white min-h-screen">

            {/* Hero Section */}
            <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10" />

                {/* Background Overlay with Green Tint */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black z-0" />

                {/* Animated Background Shapes */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl"
                    />
                </div>

                <div className="relative z-20 text-center max-w-5xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-green-400 font-bold tracking-widest uppercase text-sm md:text-base mb-4 block">
                            Our Expertise
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                            Innovative <br />
                            <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
                                Spaces
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                            From residential havens to commercial hubs, we transform shipping containers into functional works of art.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-lg rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
                        >
                            Get a Quote
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section className="bg-white">
                {services.map((service, index) => (
                    <ServiceSection
                        key={index}
                        index={index}
                        title={service.title}
                        subtitle={service.subtitle}
                        description={service.description}
                        imageSrc={service.imageSrc}
                        isImageRight={service.isImageRight}
                    />
                ))}
            </section>

            {/* Call to Action Banner */}
            <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
                <div className="absolute inset-0 bg-green-600/5 pattern-grid-lg" />
                <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Ready to build your <span className="text-green-500">Vision?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Let&apos;s collaborate to create a space that perfectly fits your needs and style.
                    </p>
                    <button className="px-10 py-4 bg-white text-black font-bold text-xl rounded-xl hover:bg-gray-100 transition-colors">
                        Start Your Project
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
