"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    step: 1,
    title: "Initial Connection",
    subtitle: "Where Your Vision Begins",
    brief: "Reach out and let's start the conversation.",
    details: [
      "Contact us through our website, social media channels, or give us a call—we're here to listen.",
      "One of our dedicated team members will respond within minutes, not hours. We understand that inspiration strikes at any moment.",
      "During this initial conversation, we'll explore your vision, understand your needs, and discuss how container architecture can transform your space.",
      "No pressure, no sales pitch—just an honest conversation about bringing your ideas to life.",
    ],
  },
  {
    step: 2,
    title: "Site Assessment",
    subtitle: "Understanding Your Space",
    brief: "We come to you, bringing expertise and vision.",
    details: [
      "Our qualified team visits your location to assess the site, understand the environment, and identify opportunities.",
      "We analyze factors like terrain, accessibility, local regulations, and how your container space will integrate with existing structures.",
      "During this visit, we provide expert guidance on design possibilities, structural considerations, and sustainable solutions.",
      "This hands-on approach ensures your container space is perfectly tailored to its environment and your lifestyle.",
    ],
  },
  {
    step: 3,
    title: "Design & Build",
    subtitle: "Crafting Your Dream",
    brief: "Customization meets precision engineering.",
    details: [
      "We create detailed 3D renderings and design plans customized to your exact specifications and preferences.",
      "You'll receive a comprehensive preview of your container space before any construction begins—every detail, every finish, every feature.",
      "Once approved, our skilled craftsmen begin the transformation process, combining sustainable practices with premium materials.",
      "Throughout construction, we maintain transparent communication, keeping you updated on progress and ensuring every element meets our exacting standards.",
    ],
  },
  {
    step: 4,
    title: "Ongoing Support",
    subtitle: "Beyond Delivery",
    brief: "A partnership that continues long after installation.",
    details: [
      "We deliver a complete turnkey solution—your container space arrives fully finished, installed, and ready to use.",
      "Our commitment doesn't end at delivery. We provide comprehensive after-sales support, maintenance guidance, and ongoing consultation.",
      "Whether you need modifications, expansions, or simply have questions, our team remains accessible and responsive.",
      "Your satisfaction is our priority, and we're here to ensure your container space continues to exceed expectations for years to come.",
    ],
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Calculate scroll progress (0 to 1) based on section visibility
      let progress = 0;
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Section is in view
        const scrolled = windowHeight - sectionTop;
        // Start filling when section enters viewport, complete when section bottom passes viewport
        const maxScroll = sectionHeight + windowHeight * 0.5;
        progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
      }

      setScrollProgress(progress);

      // Determine which steps should be visible based on scroll position
      const visible: number[] = [];
      const stepHeight = sectionHeight / processSteps.length;

      processSteps.forEach((_, index) => {
        const stepTop = sectionTop + (index * stepHeight);
        const stepCenter = stepTop + stepHeight / 2;

        // Show step when its center passes 60% of viewport (slower reveal)
        if (stepCenter < windowHeight * 0.6) {
          visible.push(index);
        }
      });

      setVisibleSteps(visible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0d0d0d] py-16 md:py-20 lg:py-24 relative"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white text-center mb-16 md:mb-20">
          Our <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">Process</span>
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line Container - Left on mobile, centered on desktop */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 flex flex-col z-10">
            {/* Gray Background Line */}
            <div className="flex-1 bg-gray-700 rounded-full" />

            {/* Animated Green Gradient Line */}
            <div
              ref={lineRef}
              className="absolute top-0 left-0 right-0 rounded-full transition-all duration-300 ease-in-out"
              style={{
                height: `${scrollProgress * 100}%`,
                background: "linear-gradient(to bottom, #16a34a, #4ade80, #16a34a)",
                minHeight: "0%",
              }}
            />

            {/* Step Circles */}
            {processSteps.map((step, index) => {
              const isVisible = visibleSteps.includes(index);
              const stepPosition = (index / (processSteps.length - 1)) * 100;

              return (
                <div
                  key={step.step}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{
                    top: `${stepPosition}%`,
                  }}
                >
                  <div
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#1a1a2e] border-4 flex items-center justify-center transition-all duration-1000 ease-in-out ${isVisible
                        ? "border-green-500 scale-110 shadow-xl"
                        : "border-gray-600 scale-100"
                      }`}
                    style={{
                      boxShadow: isVisible
                        ? "0 0 0 6px rgba(34, 197, 94, 0.15), 0 4px 20px rgba(34, 197, 94, 0.4)"
                        : "none",
                    }}
                  >
                    <span
                      className={`text-base md:text-xl font-black transition-colors duration-1000 ease-in-out ${isVisible ? "text-green-400" : "text-gray-500"
                        }`}
                    >
                      {step.step}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Steps Content */}
          <div className="space-y-16 md:space-y-32">
            {processSteps.map((step, index) => {
              const isVisible = visibleSteps.includes(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className="relative"
                >
                  {/* Mobile Layout - Content always on the right of the line */}
                  <div className="md:hidden pl-16">
                    <div
                      className="opacity-0 transition-all duration-1000 ease-in-out"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0) translateY(0)"
                          : "translateX(30px) translateY(20px)",
                      }}
                    >
                      {/* Combined Card for Mobile */}
                      <div className="bg-[#1a1a2e] rounded-2xl p-5 border border-gray-700/50 shadow-xl">
                        <div className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wider">
                          Step {step.step}
                        </div>
                        <h3 className="text-xl font-black mb-2 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        <p className="text-sm text-green-300/80 font-medium mb-3">
                          {step.subtitle}
                        </p>
                        <p className="text-sm text-gray-300 leading-relaxed mb-4">
                          {step.brief}
                        </p>
                        <div className="space-y-3 pt-3 border-t border-gray-700/50">
                          {step.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className="text-sm text-gray-400 leading-relaxed"
                              style={{
                                animation: isVisible
                                  ? `fadeInUp 0.8s ease-out ${detailIndex * 0.15}s both`
                                  : "none",
                              }}
                            >
                              • {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout - Alternating with spacing from center line */}
                  <div className={`hidden md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                    {/* Left Side Content */}
                    <div
                      className={`opacity-0 transition-all duration-1500 ease-in-out ${isEven ? "pr-8 lg:pr-12" : "pr-8 lg:pr-12 order-2"
                        }`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0) translateY(0)"
                          : isEven
                            ? "translateX(-50px) translateY(20px)"
                            : "translateX(50px) translateY(20px)",
                      }}
                    >
                      {isEven ? (
                        <div className="text-right">
                          <div className="text-sm md:text-base font-semibold text-green-500 mb-2 uppercase tracking-wider">
                            Step {step.step}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-green-400 via-green-300 to-green-400 bg-clip-text text-transparent">
                            {step.title}
                          </h3>
                          <p className="text-lg md:text-xl text-green-300/80 font-medium mb-4">
                            {step.subtitle}
                          </p>
                          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            {step.brief}
                          </p>
                        </div>
                      ) : (
                        <div className="bg-[#1a1a2e] rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                          <div className="space-y-4">
                            {step.details.map((detail, detailIndex) => (
                              <p
                                key={detailIndex}
                                className="text-gray-300 leading-relaxed text-base md:text-lg"
                                style={{
                                  animation: isVisible
                                    ? `fadeInUp 0.8s ease-out ${detailIndex * 0.15}s both`
                                    : "none",
                                }}
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Side Content */}
                    <div
                      className={`opacity-0 transition-all duration-1500 ease-in-out delay-200 ${isEven ? "pl-8 lg:pl-12" : "pl-8 lg:pl-12 order-1"
                        }`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0) translateY(0)"
                          : isEven
                            ? "translateX(50px) translateY(20px)"
                            : "translateX(-50px) translateY(20px)",
                      }}
                    >
                      {isEven ? (
                        <div className="bg-[#1a1a2e] rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                          <div className="space-y-4">
                            {step.details.map((detail, detailIndex) => (
                              <p
                                key={detailIndex}
                                className="text-gray-300 leading-relaxed text-base md:text-lg"
                                style={{
                                  animation: isVisible
                                    ? `fadeInUp 0.8s ease-out ${detailIndex * 0.15}s both`
                                    : "none",
                                }}
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-left">
                          <div className="text-sm md:text-base font-semibold text-green-500 mb-2 uppercase tracking-wider">
                            Step {step.step}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-green-400 via-green-300 to-green-400 bg-clip-text text-transparent">
                            {step.title}
                          </h3>
                          <p className="text-lg md:text-xl text-green-300/80 font-medium mb-4">
                            {step.subtitle}
                          </p>
                          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            {step.brief}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

