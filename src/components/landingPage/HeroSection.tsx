import React from "react";
import { Search, Star } from "lucide-react";

export function HeroSection() {
    return (
        <section
            className="relative flex h-[100vh] w-full flex-col items-center overflow-hidden bg-[#0042ec] pt-24 text-white md:pt-32"
            style={{
                backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
                backgroundSize: "60px 60px",
            }}
        >
            {/* --- BACKGROUND SHAPES (ABSOLUTE POSITIONING) --- */}

            {/* Left Side Shapes */}
            <img
                src="/shapes/greenSpring.png" // Replace with actual path
                alt="Green Spring"
                className="absolute -left-10 top-[10%] z-10 w-[20vw] min-w-[120px] max-w-[250px] object-contain transition-transform duration-700 hover:scale-105"
            />
            <img
                src="/shapes/whiteSpring.png" // Replace with actual path
                alt="White Spring"
                className="absolute left-[8%] top-[40%] z-10 w-[8vw] min-w-[60px] max-w-[120px] object-contain transition-transform duration-700 hover:-rotate-12"
            />
            <img
                src="/shapes/ring.png" // Replace with actual path
                alt="White Torus"
                className="absolute left-[5%] bottom-[5%] z-10 w-[18vw] min-w-[150px] max-w-[280px] object-contain transition-transform duration-700 hover:rotate-12"
            />

            {/* Right Side Shapes */}
            <img
                src="/shapes/roundBox.png" // Replace with actual path
                alt="Green Cylinder"
                className="absolute right-8 top-[10%] z-10 w-[22vw] min-w-[160px] max-w-[300px] object-contain transition-transform duration-700 hover:scale-105"
            />
            <img
                src="/shapes/triAngle.png" // Replace with actual path
                alt="White Cone"
                className="absolute right-[15%] top-[45%] z-10 w-[7vw] min-w-[50px] max-w-40 object-contain transition-transform duration-700 hover:-translate-y-2"
            />
            <img
                src="/shapes/whiteSpring.png" // Replace with actual path
                alt="White Spring"
                className="absolute right-[2%] bottom-[5%] z-10 w-[15vw] min-w-[120px] max-w-[200px] object-contain transition-transform duration-700 hover:rotate-6"
            />

            {/* --- TEXT CONTENT & SEARCH BAR --- */}
            <div className="relative z-20 flex w-full max-w-5xl flex-col items-center px-4 text-center">
                <h1 className="text-2xl md:text-4xl xl:text-6xl 2xl:text-7xl font-medium leading-tight tracking-tight">
                    Get Access to Hundreds <br /> Courses Available
                </h1>

                <p className="mt-4  text-sm font-normal text-white/90 md:text-base 2xl:text-lg">
                    Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                </p>

                {/* Search Bar */}
                <div className="mt-8 flex w-full max-w-xl items-center justify-center gap-3">
                    <div className="flex items-center h-10 w-full rounded-full bg-white p-6 shadow-xl">
                        <Search className="h-5 w-5 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Course, topic, creator"
                            className="ml-3 w-full bg-transparent text-sm text-black outline-none placeholder:text-zinc-400 sm:text-base"
                        />
                    </div>
                    <button className="h-10 min-w-[100px] rounded-full bg-[#ccff00] px-6 text-sm font-semibold text-black transition-colors hover:bg-[#b3e600] sm:h-12 sm:text-base">
                        Search
                    </button>
                </div>
            </div>

            {/* --- CENTER STAGE: CIRCLES, BOY, & FLOATING CARDS --- */}
            <div className="absolute bottom-0 flex h-[55%] w-full justify-center md:h-1/2">

                {/* Big Green Outer Circle */}
                <div className="absolute top-0 z-0 aspect-square w-[80vw] md:w-[80vw] rounded-full bg-[#ccff00]" />

                {/* Big Blue Inner Circle */}
                <div className="absolute top-1/2  z-[1] aspect-square w-[70vw] md:w-[30vw] rounded-full bg-[#0a279c]" />

                {/* Central Human Image */}
                <div className="relative h-full">
                    <div className="absolute left-[-5%] top-[15%] z-30 hidden flex-col rounded-2xl bg-white px-5 py-4 shadow-2xl lg:flex">
                        <h3 className="text-sm font-bold text-black">UI/UX Design</h3>
                        <p className="mt-1 text-xs font-medium text-zinc-500">
                            200 Courses &bull; 1000+ Students
                        </p>
                    </div>

                    <div className="absolute right-[0%] top-[20%] z-30 hidden flex-col rounded-2xl bg-white p-5 shadow-2xl lg:flex">
                        <h3 className="text-xs font-bold text-black">Learning Progress</h3>
                        <p className="mt-1 text-3xl font-black text-black">55%</p>
                        <div className="mt-3 h-2 w-32 rounded-full bg-zinc-100">
                            <div className="h-full w-[55%] rounded-full bg-[#ccff00]"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-[10%] left-[-18%] z-30 hidden flex-col rounded-2xl bg-white p-4 shadow-2xl lg:flex">
                        <h3 className="text-xs font-bold text-black">Happy Students</h3>
                        <div className="mt-1 flex items-center gap-1 text-sm font-black text-black">
                            4.5 <span className="text-xs font-medium text-zinc-500">(240)</span>
                            {/* <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> */}
                        </div>
                        <div className="mt-3 flex -space-x-3 overflow-hidden">
                            {/* Replace these generic divs with actual avatar img tags */}
                            {[...Array(7)].map((_, i) => (
                                <div key={i} className="inline-block h-8 w-8 xl:h-10 xl:w-10 rounded-full border-2 border-white bg-zinc-300" />
                            ))}
                            <div className="flex h-8 w-8 xl:h-10 xl:w-10 items-center justify-center rounded-full border-2 border-white bg-[#ccff00] text-[10px] font-bold text-black">
                                2K+
                            </div>
                        </div>
                    </div>

                    <img
                        src="/landingPage/boyImg.png" // Replace with your human image path
                        alt="Student with laptop"
                        className="relative z-20 scale-120 h-full w-auto object-contain object-bottom"
                    />
                </div>
            </div>
        </section>
    );
}