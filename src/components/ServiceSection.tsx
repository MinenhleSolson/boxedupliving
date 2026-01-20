"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceSectionProps {
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    isImageRight?: boolean;
    index: number;
}

export default function ServiceSection({
    title,
    subtitle,
    description,
    imageSrc,
    isImageRight = false,
    index,
}: ServiceSectionProps) {
    return (
        <div className="relative py-16 md:py-24 overflow-hidden">
            {/* Background Gradient for odd sections to add depth */}
            {index % 2 !== 0 && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50 -z-10" />
            )}

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 space-y-6"
                    >
                        <div className="inline-block">
                            <span className="text-sm font-bold uppercase tracking-widest text-green-600 mb-2 block">
                                {subtitle}
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                {title.split(" ").map((word, i) => (
                                    <span key={i} className={i === title.split(" ").length - 1 ? "bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent" : "text-gray-900"}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            {description}
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl mt-4"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: isImageRight ? 50 : -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative group perspective-1000">
                            <div className="absolute inset-0 bg-green-500 rounded-[2rem] transform rotate-3 scale-[0.98] opacity-20 group-hover:rotate-6 transition-transform duration-500" />
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white transform transition-transform duration-500 group-hover:-translate-y-2">
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />

                                {/* Floating Badge */}
                                <div className={`absolute ${isImageRight ? "bottom-6 left-6" : "bottom-6 right-6"} glass-panel px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg`}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Boxed Up Quality</p>
                                            <p className="text-white/80 text-xs">Premium Standard</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
