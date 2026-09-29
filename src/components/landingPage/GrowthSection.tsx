"use client";

import Image from "next/image";
import CountUp from "react-countup";

import { cn } from "@/lib/utils";

export interface GrowthStat {
  value: number;
  suffix?: string;
  label: string;
}

interface GrowthSectionProps {
  title?: React.ReactNode;
  description?: string;
  stats?: GrowthStat[];
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const defaultStats: GrowthStat[] = [
  { value: 12, suffix: "K", label: "Students" },
  { value: 70, suffix: "+", label: "Courses" },
  { value: 16, label: "Creators" },
];

export function GrowthSection({
  title = (
    <>
      Your Path to Professional
      <br className="hidden sm:block" /> Growth Starts Here!
    </>
  ),
  description = "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  stats = defaultStats,
  imageSrc = "/landingPage/growth.png",
  imageAlt = "Student learning online with a laptop and course progress cards",
  className,
}: GrowthSectionProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 md:py-20 overflow-hidden",
        className,
      )}
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: content */}
        <div className="text-center lg:text-left" data-aos="fade-right">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
            {description}
          </p>

          <dl className="mt-10 flex flex-wrap items-start justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:justify-start">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span
                    aria-hidden
                    className="block text-4xl font-normal text-[#0038FF] sm:text-5xl"
                  >
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </span>
                  <span className="mt-1 block text-base text-gray-600 sm:text-lg">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: image */}
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none" data-aos="fade-left">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={900}
            height={900}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full object-contain object-bottom pt-25 scale-105"
          />
        </div>
      </div>
    </section>
  );
}