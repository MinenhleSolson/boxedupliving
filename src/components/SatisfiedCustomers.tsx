"use client";

import { useEffect, useRef, useState } from "react";

const customerNames = [
  "Sarah Johnson",
  "Michael Chen",
  "Emily Rodriguez",
  "David Thompson",
  "Jessica Martinez",
  "Robert Williams",
  "Amanda Davis",
  "James Wilson",
  "Lisa Anderson",
  "Christopher Brown",
  "Michelle Taylor",
  "Daniel Garcia",
];

export default function SatisfiedCustomers() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-8 md:mb-12">
          Trusted by <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">Satisfied Customers</span>
        </h2>
        <div className="relative">
          <div
            className="flex gap-8 md:gap-12"
            style={{
              animation: isVisible ? "scroll 30s linear infinite" : "none",
            }}
          >
            {/* First set */}
            {customerNames.map((name, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 text-2xl md:text-3xl font-bold whitespace-nowrap"
                style={{
                  background: "linear-gradient(to right, #16a34a, #4ade80, #16a34a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {name}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {customerNames.map((name, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 text-2xl md:text-3xl font-bold whitespace-nowrap"
                style={{
                  background: "linear-gradient(to right, #16a34a, #4ade80, #16a34a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

