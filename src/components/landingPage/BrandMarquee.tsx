"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Brand items array matching the logos & text style
const brands = [
  {
    id: 1,
    logo: "/landingPage/logoIpSum1.png",
  },
  {
    id: 2,
    logo: "/landingPage/logoIpSum2.png",
  },
  {
    id: 3,
    logo: "/landingPage/logoIpSum3.png",
  },
  {
    id: 4,
    logo: "/landingPage/logoIpSum4.png",
  },
  {
    id: 5,
    logo: "/landingPage/logoIpSum5.png",
  },
];

export function BrandMarquee() {
  return (
    <section className="w-full bg-[#f8f9fa] py-4 md:py-16">
      <div className="container mx-auto ">
        <Marquee
          autoFill={true}
          speed={100}
          pauseOnHover={true}
          className="flex items-center overflow-hidden py-4"
        >
          {brands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex items-center gap-3 "
            >
              {/* Brand Logo Icon */}
              <div className="relative h-9 w-20 md:h-15 md:w-100 mx-3 lg:mx-1">
                <Image
                  src={brand.logo}
                  alt="Brand Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}