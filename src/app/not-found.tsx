"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      className="relative grid-background flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center text-white"
    >
      {/* Subtle background radial glow behind 404 */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4">
        {/* Giant 404 Text with Lime-to-Green Gradient */}
        <h1 className="select-none font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#d9f99d] via-[#a3e635] to-[#84cc16] text-[28vw] sm:text-[22vw] md:text-[18vw] lg:text-[16rem] xl:text-[20rem]">
          404
        </h1>

        {/* Main Error Message Heading */}
        <h2 className="-mt-6 max-w-4xl text-2xl font-bold tracking-tight text-white sm:-mt-10 sm:text-4xl md:-mt-16 md:text-5xl lg:text-6xl xl:text-7xl">
          The page you are looking <br className="hidden sm:inline" />
          for doesn’t exist
        </h2>

        {/* Subtitle / Helper Text */}
        <p className="mt-4 max-w-lg text-xs font-normal text-blue-100/80 sm:mt-6 sm:text-sm md:text-base">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Back to Home Action Button */}
        <div className="mt-8 sm:mt-10">
          <Button
            className="h-12 rounded-full bg-[#ccff00] px-8 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#b3e600] hover:shadow-[0_0_25px_rgba(204,255,0,0.5)] md:h-14 md:px-10 md:text-base"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}