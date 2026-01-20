"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [feedback, setFeedback] = useState<"like" | "dislike" | null>(null);

    return (
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-[0_5px_15px_-5px_rgba(22,163,74,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(22,163,74,0.15)] transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
            >
                <span className="text-lg font-medium text-gray-900">{question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-green-600"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 leading-relaxed mb-4">{answer}</p>

                            {/* Feedback Section */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                <span className="text-sm text-gray-500">Was this helpful?</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setFeedback(feedback === "like" ? null : "like")}
                                        className={`p-2 rounded-full transition-all duration-300 ${feedback === "like"
                                                ? "bg-green-500 text-white shadow-lg shadow-green-500/30 ring-2 ring-green-400"
                                                : "bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                                            }`}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setFeedback(feedback === "dislike" ? null : "dislike")}
                                        className={`p-2 rounded-full transition-all duration-300 ${feedback === "dislike"
                                                ? "bg-red-500 text-white shadow-lg shadow-red-500/30 ring-2 ring-red-400"
                                                : "bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                                            }`}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                        </svg>
                                    </button>
                                </div>
                                {feedback && (
                                    <motion.span
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-xs text-green-600"
                                    >
                                        Thanks for your feedback!
                                    </motion.span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQAccordion() {
    const faqs = [
        {
            question: "How long does a typical container home build take?",
            answer: "Our standard build timelines range from 8-12 weeks for single units, and 12-16 weeks for multi-container homes. This is significantly faster than traditional construction, which can take 6-12 months.",
        },
        {
            question: "Do I need planning permission?",
            answer: "In most cases, yes. Container homes are considered permanent structures. However, for smaller garden studios (under 30sqm), they often fall under Permitted Development rights. We provide full assistance with the planning application process.",
        },
        {
            question: "Are container homes energy efficient?",
            answer: "Absolutely. We use high-performance spray foam insulation and double-glazed windows to ensure excellent thermal efficiency. Our homes often exceed standard building regulation requirements for energy performance.",
        },
        {
            question: "Can you customize the interior design?",
            answer: "Yes! We offer a fully bespoke service. From kitchen layouts to flooring choices and smart home integration, every aspect of the interior can be tailored to your specific taste and needs.",
        },
        {
            question: "What is the warranty period?",
            answer: "We offer a comprehensive 10-year structural warranty on all our builds, along with a 2-year warranty on fixtures and fittings. We stand by the quality of our craftsmanship.",
        },
    ];

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} index={index} />
            ))}
        </div>
    );
}
