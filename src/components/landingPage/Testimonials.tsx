import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-100/40 via-white/80 to-lime-200/50 py-16 md:py-24 lg:py-28">
      {/* Subtle background glow accents */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-lime-300/30 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Left Title */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.15]">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>

          {/* Right Paragraph */}
          <div className="lg:col-span-6">
            <p className="text-sm font-normal leading-relaxed text-zinc-600 sm:text-base md:text-lg">
              At ByteSpace, our vibrant community of learners and creators is at the
              heart of what we do. Hear directly from those who have experienced the
              transformative journey of learning and creating on our platform. Explore
              testimonials that reflect the diverse perspectives of enthusiastic learners
              and accomplished creators.
            </p>
          </div>
        </div>

        {/* TESTIMONIAL CARDS GRID */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
            >
              <div>
                {/* Avatar Image */}
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-zinc-100 shadow-inner">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="mt-5">
                  <h3 className="text-lg font-bold text-black sm:text-xl">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-blue-600 sm:text-base">
                    {item.role}
                  </p>
                </div>

                {/* Quote Content */}
                <p className="mt-6 text-sm font-normal leading-relaxed text-zinc-600 sm:text-base">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}