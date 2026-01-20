"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";

const inputStyles = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all shadow-sm focus:shadow-green-500/20";
const labelStyles = "block text-sm font-medium text-gray-600 mb-2";

const containerSizes = [
    { value: "20ft", label: "20ft Standard (6m × 2.4m)" },
    { value: "40ft", label: "40ft Standard (12m × 2.4m)" },
    { value: "40ft-hc", label: "40ft High Cube (12m × 2.9m)" },
    { value: "multiple", label: "Multiple Containers" },
    { value: "custom", label: "Custom Size" },
];

const projectTypes = [
    { value: "residential", label: "Residential Home" },
    { value: "granny-flat", label: "Granny Flat / ADU" },
    { value: "office", label: "Garden Office" },
    { value: "studio", label: "Studio / Gym" },
    { value: "retail", label: "Retail / Pop-up Shop" },
    { value: "airbnb", label: "Airbnb / Guest House" },
    { value: "storage", label: "Secure Storage" },
    { value: "other", label: "Other" },
];

const budgetRanges = [
    { value: "under-200k", label: "Under R200,000" },
    { value: "200k-400k", label: "R200,000 - R400,000" },
    { value: "400k-600k", label: "R400,000 - R600,000" },
    { value: "600k-800k", label: "R600,000 - R800,000" },
    { value: "800k-1m", label: "R800,000 - R1,000,000" },
    { value: "over-1m", label: "Over R1,000,000" },
    { value: "not-sure", label: "Not Sure Yet" },
];

const timelines = [
    { value: "asap", label: "As Soon As Possible" },
    { value: "1-3months", label: "1-3 Months" },
    { value: "3-6months", label: "3-6 Months" },
    { value: "6-12months", label: "6-12 Months" },
    { value: "planning", label: "Just Planning / Researching" },
];

const features = [
    { id: "kitchen", label: "Full Kitchen" },
    { id: "bathroom", label: "Bathroom / Ensuite" },
    { id: "bedroom", label: "Bedroom(s)" },
    { id: "living", label: "Open Plan Living" },
    { id: "deck", label: "Outdoor Deck / Patio" },
    { id: "solar", label: "Solar Panels" },
    { id: "offgrid", label: "Off-Grid Capabilities" },
    { id: "smart-home", label: "Smart Home Integration" },
    { id: "climate", label: "Climate Control (HVAC)" },
    { id: "security", label: "Security System" },
    { id: "insulation", label: "Premium Insulation" },
    { id: "wheelchair", label: "Wheelchair Accessible" },
];

export default function ContactPage() {
    const [activeTab, setActiveTab] = useState<"message" | "quote">("message");
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    const toggleFeature = (featureId: string) => {
        setSelectedFeatures(prev =>
            prev.includes(featureId)
                ? prev.filter(id => id !== featureId)
                : [...prev, featureId]
        );
    };

    return (
        <main className="w-full bg-white min-h-screen">

            {/* Hero Header */}
            <section className="relative pt-32 pb-12 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-green-50 blur-[120px] rounded-full pointer-events-none" />

                <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
                    >
                        Get in <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        We&apos;re here to help you turn your container dreams into reality. Reach out to us for quotes, questions, or just to say hello.
                    </motion.p>
                </div>
            </section>

            {/* Split Content Section */}
            <section className="py-12 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Left Column: Forms with Tabs */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(22,163,74,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(22,163,74,0.25)] transition-shadow duration-500"
                        >
                            {/* Tab Switcher */}
                            <div className="flex gap-2 mb-8 p-1 bg-gray-100 rounded-xl">
                                <button
                                    onClick={() => setActiveTab("message")}
                                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${activeTab === "message"
                                        ? "bg-white text-gray-900 shadow-md"
                                        : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    💬 Quick Message
                                </button>
                                <button
                                    onClick={() => setActiveTab("quote")}
                                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${activeTab === "quote"
                                        ? "bg-white text-gray-900 shadow-md"
                                        : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    📋 Request Quote
                                </button>
                            </div>

                            {/* Quick Message Form */}
                            {activeTab === "message" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className={labelStyles}>First Name</label>
                                                <input type="text" className={inputStyles} placeholder="John" />
                                            </div>
                                            <div>
                                                <label className={labelStyles}>Last Name</label>
                                                <input type="text" className={inputStyles} placeholder="Doe" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className={labelStyles}>Email Address</label>
                                            <input type="email" className={inputStyles} placeholder="john@example.com" />
                                        </div>

                                        <div>
                                            <label className={labelStyles}>Subject</label>
                                            <select className={inputStyles}>
                                                <option>General Inquiry</option>
                                                <option>New Project Quote</option>
                                                <option>Support</option>
                                                <option>Partnership</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className={labelStyles}>Message</label>
                                            <textarea rows={4} className={`${inputStyles} resize-none`} placeholder="Tell us about your project..." />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-full py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-xl shadow-[0_10px_20px_-5px_rgba(22,163,74,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(22,163,74,0.6)] transition-all"
                                        >
                                            Send Message
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}

                            {/* Project Quote Form */}
                            {activeTab === "quote" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Project Quote</h2>
                                    <p className="text-gray-500 text-sm mb-6">Tell us about your dream container space and we&apos;ll prepare a customized quote.</p>

                                    <form className="space-y-6">
                                        {/* Contact Info */}
                                        <div className="p-4 bg-green-50/50 rounded-xl border border-green-100">
                                            <h3 className="text-sm font-bold text-green-700 mb-4 uppercase tracking-wide">Your Details</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className={labelStyles}>Full Name *</label>
                                                    <input type="text" className={inputStyles} placeholder="John Doe" required />
                                                </div>
                                                <div>
                                                    <label className={labelStyles}>Phone Number *</label>
                                                    <input type="tel" className={inputStyles} placeholder="+27 123 456 7890" required />
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <label className={labelStyles}>Email Address *</label>
                                                <input type="email" className={inputStyles} placeholder="john@example.com" required />
                                            </div>
                                        </div>

                                        {/* Project Type */}
                                        <div>
                                            <label className={labelStyles}>Project Type *</label>
                                            <select className={inputStyles} required>
                                                <option value="">Select project type...</option>
                                                {projectTypes.map(type => (
                                                    <option key={type.value} value={type.value}>{type.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Container Size */}
                                        <div>
                                            <label className={labelStyles}>Preferred Container Size *</label>
                                            <select className={inputStyles} required>
                                                <option value="">Select container size...</option>
                                                {containerSizes.map(size => (
                                                    <option key={size.value} value={size.value}>{size.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Budget Range */}
                                        <div>
                                            <label className={labelStyles}>Budget Range *</label>
                                            <select className={inputStyles} required>
                                                <option value="">Select your budget range...</option>
                                                {budgetRanges.map(range => (
                                                    <option key={range.value} value={range.value}>{range.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Timeline */}
                                        <div>
                                            <label className={labelStyles}>Project Timeline</label>
                                            <select className={inputStyles}>
                                                <option value="">When do you need this completed?</option>
                                                {timelines.map(timeline => (
                                                    <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Site Location */}
                                        <div>
                                            <label className={labelStyles}>Site Location / City *</label>
                                            <input type="text" className={inputStyles} placeholder="e.g., Cape Town, Johannesburg, Durban..." required />
                                        </div>

                                        {/* Do you have land? */}
                                        <div>
                                            <label className={labelStyles}>Do you have a site/land for the container?</label>
                                            <select className={inputStyles}>
                                                <option value="">Select...</option>
                                                <option value="yes-owned">Yes, I own the land</option>
                                                <option value="yes-rented">Yes, I rent the land</option>
                                                <option value="searching">Currently searching for land</option>
                                                <option value="no">No, I need assistance finding land</option>
                                            </select>
                                        </div>

                                        {/* Features Section */}
                                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">Required Features</h3>
                                            <p className="text-xs text-gray-500 mb-4">Select all features you&apos;d like included in your container space:</p>
                                            <div className="grid grid-cols-2 gap-3">
                                                {features.map(feature => (
                                                    <label
                                                        key={feature.id}
                                                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${selectedFeatures.includes(feature.id)
                                                            ? "bg-green-50 border-green-300 text-green-700"
                                                            : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                                                            }`}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedFeatures.includes(feature.id)}
                                                            onChange={() => toggleFeature(feature.id)}
                                                            className="sr-only"
                                                        />
                                                        <span className={`w-5 h-5 rounded flex items-center justify-center text-xs transition-all ${selectedFeatures.includes(feature.id)
                                                            ? "bg-green-500 text-white"
                                                            : "bg-gray-200 text-transparent"
                                                            }`}>
                                                            ✓
                                                        </span>
                                                        <span className="text-sm font-medium">{feature.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Number of Rooms */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className={labelStyles}>Number of Bedrooms</label>
                                                <select className={inputStyles}>
                                                    <option value="0">N/A (Studio/Open)</option>
                                                    <option value="1">1 Bedroom</option>
                                                    <option value="2">2 Bedrooms</option>
                                                    <option value="3">3+ Bedrooms</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className={labelStyles}>Number of Bathrooms</label>
                                                <select className={inputStyles}>
                                                    <option value="0">None</option>
                                                    <option value="1">1 Bathroom</option>
                                                    <option value="2">2 Bathrooms</option>
                                                    <option value="3">3+ Bathrooms</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Additional Requirements */}
                                        <div>
                                            <label className={labelStyles}>Additional Requirements or Notes</label>
                                            <textarea
                                                rows={4}
                                                className={`${inputStyles} resize-none`}
                                                placeholder="Tell us anything else about your project... special design preferences, accessibility needs, specific materials, inspiration images, etc."
                                            />
                                        </div>

                                        {/* How did you hear about us */}
                                        <div>
                                            <label className={labelStyles}>How did you hear about us?</label>
                                            <select className={inputStyles}>
                                                <option value="">Select...</option>
                                                <option value="google">Google Search</option>
                                                <option value="social">Social Media</option>
                                                <option value="referral">Friend/Family Referral</option>
                                                <option value="event">Event or Exhibition</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-full py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-xl shadow-[0_10px_20px_-5px_rgba(22,163,74,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(22,163,74,0.6)] transition-all"
                                        >
                                            Submit Quote Request
                                        </motion.button>

                                        <p className="text-xs text-gray-500 text-center">
                                            We&apos;ll review your requirements and get back to you within 48 hours with a detailed quote.
                                        </p>
                                    </form>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Right Column: Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            {/* Info Cards */}
                            <div className="grid gap-6">
                                {/* Address */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_10px_30px_-10px_rgba(22,163,74,0.1)] hover:shadow-[0_15px_30px_-5px_rgba(22,163,74,0.2)] hover:border-green-100 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            123 Container Way, <br />
                                            Creative District, Cape Town, <br />
                                            South Africa, 8001
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_10px_30px_-10px_rgba(22,163,74,0.1)] hover:shadow-[0_15px_30px_-5px_rgba(22,163,74,0.2)] hover:border-green-100 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                                        <p className="text-gray-600 mb-2">hello@boxedupliving.co.za</p>
                                        <p className="text-gray-500 text-sm">We reply within 24 hours.</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_10px_30px_-10px_rgba(22,163,74,0.1)] hover:shadow-[0_15px_30px_-5px_rgba(22,163,74,0.2)] hover:border-green-100 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                                        <p className="text-gray-600 mb-2">+27 123 456 7890</p>
                                        <p className="text-gray-500 text-sm">Mon - Fri, 8am - 5pm</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quote Benefits Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-green-600 to-green-500 text-white"
                            >
                                <h3 className="text-lg font-bold mb-4">Why Request a Quote?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                        <span className="text-sm">Free, no-obligation consultation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                        <span className="text-sm">Detailed cost breakdown within 48 hours</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                        <span className="text-sm">3D design preview included</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                        <span className="text-sm">Flexible payment plans available</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-4xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Everything you need to know about our process and services.</p>
                    </motion.div>

                    <FAQAccordion />

                </div>
            </section>

            <Footer />
        </main>
    );
}
