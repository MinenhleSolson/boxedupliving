"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const mainProject = {
  image: "/images/housepic1.png",
  title: "Modern Living Spaces",
  description: "A stunning residential container home that showcases sustainable living without compromising on luxury. This project demonstrates our commitment to transforming used shipping containers into beautiful, functional living spaces that exceed expectations.",
};

const sideProjects = [
  {
    image: "/images/housepic2.png",
    title: "EcoWorks Office",
    description: "Commercial Container Office",
  },
  {
    image: "/images/housepic3.png",
    title: "Urban Retreat",
    description: "Entertainment Container Space",
  },
];

export default function PastWorkGallery() {
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
          Our <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">Past Work</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Large Image on Left */}
          <div
            className="group relative overflow-hidden rounded-2xl bg-gray-100"
            style={{
              animation: isVisible
                ? `fadeInUp 0.8s ease-out 0s both`
                : "none",
            }}
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
              <Image
                src={mainProject.image}
                alt={mainProject.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:p-8 bg-white">
              <h3 className="text-2xl md:text-3xl font-black mb-3">
                <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
                  {mainProject.title}
                </span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {mainProject.description}
              </p>
            </div>
          </div>

          {/* Two Smaller Images on Right */}
          <div className="flex flex-col gap-6 md:gap-8">
            {sideProjects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl bg-gray-100"
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.8s ease-out ${(index + 1) * 0.2}s both`
                    : "none",
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

