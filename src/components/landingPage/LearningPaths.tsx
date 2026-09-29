import React from "react";
import Link from "next/link";
import { learningPaths } from "@/data/learningPathData";



export function LearningPaths() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-500 sm:text-base md:text-lg">
            At Bytespace, we believe in empowering individuals through knowledge. Our
            diverse range of courses spans various fields, ensuring there&apos;s something
            for everyone. Unleash your potential and explore our carefully curated
            categories.
          </p>
        </div>

        {/* CATEGORY CARDS GRID */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3 sm:gap-6 2xl:grid-cols-6 lg:gap-6">
          {learningPaths.map((path) => {
            const Icon = path.icon;
            return (
              <Link
                key={path.title}
                href={path.href}
                className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg sm:p-8"
              >
                {/* Lime Icon Container */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4FB20] shadow-[0_0_15px_rgba(163,230,53,0.3)] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 text-black sm:h-7 sm:w-7" />
                </div>

                {/* Category Title */}
                <span className="mt-5 text-base font-semibold text-zinc-800 transition-colors group-hover:text-black sm:text-lg">
                  {path.title}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}