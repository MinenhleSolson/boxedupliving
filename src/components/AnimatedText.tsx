"use client";

import { useState, useEffect } from "react";

const marketingWords = [
  "Sustainable",
  "Modern",
  "Custom",
  "Smart",
  "Modular",
  "Innovative",
  "Premium",
  "Eco-Friendly",
];

export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = marketingWords[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % marketingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-tight">
        Transforming Containers into
        <br />
        <span className="relative inline-block min-h-[1.2em]">
          <span className="inline-block">
            {displayText.split("").map((char, charIndex) => (
              <span
                key={`${currentIndex}-${charIndex}`}
                className="inline-block"
                style={{
                  background: "linear-gradient(to right, #16a34a, #4ade80, #16a34a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  opacity: 0,
                  animation: `fade-in 0.3s ease-out ${charIndex * 0.05}s forwards`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
          <span className="animate-pulse ml-1 text-green-500">|</span>
        </span>
        <br />
        Realities
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
        Hi, we're Boxed Up Living, a container architecture company based on
        sustainable innovation. We transform used shipping containers into
        custom-built, functional, and visually stunning spaces.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a
          href="/services"
          className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-md font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
        >
          Explore Our Services
        </a>
        <a
          href="/contact"
          className="px-8 py-4 border-2 border-black text-black rounded-md font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white text-center"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

