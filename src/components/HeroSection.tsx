"use client";

import HeroModel from "./HeroModel";
import AnimatedText from "./AnimatedText";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-white pt-24 md:pt-28">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - 3D Model */}
          <div className="w-full h-full order-2 lg:order-1">
            <HeroModel />
          </div>

          {/* Right Side - Animated Marketing Text */}
          <div className="w-full flex items-center justify-center lg:justify-start order-1 lg:order-2">
            <AnimatedText />
          </div>
        </div>
      </div>
    </section>
  );
}

