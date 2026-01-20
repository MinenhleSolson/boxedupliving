"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    title: "What We Do",
    description: "We design and build custom container-based spaces from concept to completion, transforming used shipping containers into functional, sustainable environments.",
  },
  {
    title: "How We Do It",
    description: "Through collaborative design and turnkey solutions, we handle everything from site assessment to final installation for a seamless experience.",
  },
  {
    title: "Our Process",
    description: "From consultation through design, approval, construction, and delivery—each stage is carefully managed to deliver premium quality spaces.",
  },
];

export default function ProcessCards() {
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
        threshold: 0.2,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black text-center mb-12 md:mb-16">
          How We <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">Work</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl bg-white p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{
                animation: isVisible
                  ? `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                  : "none",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
                  {step.title}
                </span>
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

