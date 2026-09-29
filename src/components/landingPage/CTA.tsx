import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaShape {
  id: string;
  src: string;
  /** Intrinsic size of the exported asset (used for aspect ratio) */
  width: number;
  height: number;
  /** Position + responsive size classes */
  className: string;
}

interface CtaSectionProps {
  title?: React.ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const shapes: CtaShape[] = [
  {
    id: "green-squiggle",
    src: "/shapes/greenSpring.png",
    width: 240,
    height: 260,
    className:
      "-left-6 -top-6 w-24 sm:w-32 lg:-left-[2%] lg:-top-[3%] lg:w-[14%]",
  },
  {
    id: "white-squiggle",
    src: "/shapes/whiteSpring.png",
    width: 160,
    height: 170,
    className: "hidden lg:block lg:left-[14.5%] lg:top-[7%] lg:w-[8%]",
  },
  {
    id: "green-pyramid",
    src: "/shapes/greenTriAngle.png",
    width: 180,
    height: 200,
    className:
      "-right-2 top-4 w-16 sm:right-4 sm:w-20 lg:right-[14.5%] lg:top-[4%] lg:w-[8.7%]",
  },
  {
    id: "white-cylinder",
    src: "/shapes/whiteRoundBox.png",
    width: 240,
    height: 340,
    className: "hidden lg:block lg:-right-[2%] lg:top-[8%] lg:w-[14%]",
  },
  {
    id: "white-cone",
    src: "/shapes/triAngle.png",
    width: 150,
    height: 190,
    className: "hidden lg:block lg:-left-[0.5%] lg:top-[49%] lg:w-[8%]",
  },
  {
    id: "green-torus",
    src: "/shapes/greenRing.png",
    width: 320,
    height: 320,
    className:
      "-bottom-8 -left-4 w-28 sm:-bottom-10 sm:left-2 sm:w-40 lg:-bottom-[12%] lg:left-[4.9%] lg:w-[16.4%]",
  },
  {
    id: "green-spring",
    src: "/shapes/greenSpring.png",
    width: 260,
    height: 320,
    className:
      "-bottom-6 -right-2 w-20 sm:right-4 sm:w-28 lg:-bottom-[4%] lg:right-[4.9%] lg:w-[13.2%]",
  },
];

export function CtaSection({
  title = (
    <>
      Unlock Your Potential as a
      <br className="hidden sm:block" /> Creator with ByteSpace
    </>
  ),
  description = "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  ctaLabel = "Join as Creator",
  ctaHref = "/become-creator",
  className,
}: CtaSectionProps) {
  return (
    <section
      className={cn(
        "relative isolate flex w-full items-center justify-center overflow-hidden bg-[#0037E0] px-6 py-24 sm:py-28 lg:min-h-[488px] lg:py-20",
        className,
      )}
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:64px_64px] sm:bg-[size:96px_96px] lg:bg-[size:120px_120px]"
      />

      {/* Decorative shapes */}
      {shapes.map((shape) => (
        <Image
          key={shape.id}
          src={shape.src}
          alt=""
          aria-hidden
          width={shape.width}
          height={shape.height}
          sizes="(min-width: 1024px) 16vw, 128px"
          className={cn(
            "pointer-events-none absolute -z-10 h-auto select-none animate-up-down",
            shape.className,
          )}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-[44px]">
          {title}
        </h2>

        <p className="mt-6 max-w-[820px] text-sm leading-relaxed text-white/90 sm:text-base lg:mt-8">
          {description}
        </p>

        <Button
          className="mt-8 h-auto rounded-full bg-[#DEFF1F] px-6 py-3 text-base font-normal text-gray-900 shadow-none hover:bg-[#cfef10] lg:mt-10"
        >
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}