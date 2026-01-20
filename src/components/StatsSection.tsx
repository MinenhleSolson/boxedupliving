"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const STATS: Stat[] = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Satisfied Clients", value: 200, suffix: "+" },
  { label: "Completed Projects", value: 108, suffix: "+" },
  { label: "Client Retention Rate", value: 90, suffix: "%" },
];

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setValue(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [target, start, duration]);

  return value;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
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
      className="w-full bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => {
            const value = useCountUp(stat.value, hasStarted);

            return (
              <div
                key={stat.label}
                className="rounded-2xl bg-black text-white px-8 py-10 flex flex-col justify-center shadow-[0_18px_45px_rgba(0,0,0,0.45)] border border-white/5"
                style={{
                  animation: hasStarted
                    ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                <div className="text-4xl md:text-5xl font-black tracking-tight mb-3">
                  <span
                    className="bg-gradient-to-r from-green-600 via-green-400 to-green-500 bg-clip-text text-transparent"
                  >
                    {value}
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-200">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


