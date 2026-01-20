"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
    viewport: { once: true },
};

export default function AboutPage() {
    return (
        <main className="w-full bg-white min-h-screen">

            {/* 1. Grandiose Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-32">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-green-50 rounded-full blur-[100px] opacity-60"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], rotate: [0, -45, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-green-100 rounded-full blur-[120px] opacity-40"
                    />
                </div>

                <div className="relative z-10 text-center max-w-6xl px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="block text-green-600 font-bold tracking-[0.2em] uppercase mb-6 text-sm md:text-base">
                            Established 2024
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-tight mb-8">
                            Redefining <br />
                            <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
                                Modern Living
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We don&apos;t just build structures. We repurpose shipping containers into
                            custom-built, functional, smart, and visually modern spaces.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Core Identity & Mission */}
            <section className="py-24 bg-white relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div {...fadeIn}>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                                More Than Just <br />
                                <span className="text-green-600">A Box</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Boxed Up Living sits at the intersection of sustainable construction, modular architecture, and modern aesthetics.
                                    We are a turnkey provider, meaning we handle everything from concept to completion.
                                </p>
                                <p>
                                    Our mission is to challenge traditional views of spaces by offering innovative, sustainable alternatives
                                    without compromising on luxury or comfort.
                                </p>
                            </div>

                            <div className="mt-12 p-8 border-l-4 border-green-500 bg-green-50/50 rounded-r-2xl">
                                <p className="text-xl font-medium text-gray-800 italic">
                                    &quot;Sustainable construction and premium design are not opposites — they are complementary.&quot;
                                </p>
                            </div>
                        </motion.div>

                        {/* Visual Element - Abstract Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="space-y-4 mt-12">
                                <div className="h-64 bg-gray-100 rounded-3xl shadow-[0_20px_40px_-15px_rgba(22,163,74,0.1)] w-full"></div>
                                <div className="h-40 bg-green-100 rounded-3xl shadow-[0_20px_40px_-15px_rgba(22,163,74,0.15)] w-full"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-40 bg-green-600 rounded-3xl shadow-[0_20px_40px_-15px_rgba(22,163,74,0.3)] w-full"></div>
                                <div className="h-64 bg-gray-900 rounded-3xl shadow-xl w-full"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Differentiation (Why Us) */}
            <section className="py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">The Turnkey Difference</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            One company. One process. One vision. We are not just a supplier; we are your end-to-end partner.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            { title: "Architectural Design", desc: "Full interior and exterior planning tailored to your needs." },
                            { title: "Site Assessment", desc: "Comprehensive foundation and placement analysis." },
                            { title: "Smart Features", desc: "Electrical, plumbing, and modern smart home integration." },
                            { title: "High-End Finishes", desc: "Premium materials that redefine container aesthetics." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_10px_30px_-10px_rgba(22,163,74,0.1)] hover:shadow-[0_20px_40px_-12px_rgba(22,163,74,0.2)] transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                    <div className="w-6 h-6 rounded-full bg-green-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. Sustainability Philosophy */}
            <section className="py-24 relative overflow-hidden bg-white text-gray-900">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/50 -skew-x-12 transform origin-top-right z-0" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-8">
                                Sustainability is <br /> Foundational
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600">
                                <p>
                                    We communicate responsible innovation, not cheap alternatives. For us, sustainability isn&apos;t a marketing add-on;
                                    it&apos;s the core of everything we build.
                                </p>
                                <ul className="space-y-4 mt-8">
                                    {[
                                        "Repurposing used shipping containers",
                                        "Reducing construction waste",
                                        "Smart spatial design to maximize utility",
                                        "Long-term durability and modular expansion"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl shadow-green-900/10"
                        >
                            {/* Decorative Abstract Blocks representing 'Green' building */}
                            <div className="absolute inset-0 bg-gray-100" />
                            <div className="absolute top-10 left-10 right-10 bottom-10 bg-green-600/90 rounded-[2.5rem] flex items-center justify-center p-10 text-center">
                                <h3 className="text-4xl font-black text-white leading-tight">
                                    &quot;Building the future, one box at a time.&quot;
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. Process / Operational Flow */}
            <section className="py-24 bg-[#0d0d0d] text-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">How We Build</h2>
                        <p className="text-xl text-gray-400">From your first enquiry to the final handover.</p>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block" />

                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10"
                        >
                            {["Enquiry", "Consult", "Design", "Approval", "Build", "Handover"].map((step, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeIn}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:border-green-500 group-hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] transition-all duration-300">
                                        <span className="text-2xl font-bold text-white">{i + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-bold">{step}</h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. CEO / Founder Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="mx-auto max-w-5xl px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10 relative inline-block">
                            <div className="absolute inset-0 bg-green-500 blur-[60px] opacity-40 rounded-full" />
                            <div className="relative text-[150px] leading-none drop-shadow-2xl filter hover:scale-110 transition-transform duration-500 cursor-default">
                                👨‍💼
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">A Message from the Founder</h2>
                        <div className="max-w-3xl mx-auto space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                            <p>
                                &quot;At Boxed Up Living, we saw an opportunity to change how people think about space.
                                We didn&apos;t just want to sell containers; we wanted to create homes, offices, and studios
                                that inspire.&quot;
                            </p>
                            <p>
                                &quot;Our goal is simple: to make eco-conscious, high-quality design accessible to everyone.
                                Welcome to the future of construction.&quot;
                            </p>
                        </div>

                        <div className="mt-10">
                            <p className="text-lg font-bold text-gray-900">The CEO</p>
                            <p className="text-green-600 font-medium">Boxed Up Living</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
