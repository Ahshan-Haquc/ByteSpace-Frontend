import Image from "next/image";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface CreateManageSectionProps {
  title?: React.ReactNode;
  brandName?: string;
  description?: string;
  features?: string[];
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const defaultFeatures = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function CreateManageSection({
  title = (
    <>
      Create &amp; Manage
      <br className="hidden sm:block" /> Courses Easily.
    </>
  ),
  brandName = "ByteSpace",
  description = "supports individuals or entities in the creation, publication, and administration of educational courses.",
  features = defaultFeatures,
  imageSrc = "/images/create-manage.png",
  imageAlt = "Course creator with revenue stats and happy students overview",
  className,
}: CreateManageSectionProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 md:py-20",
        className,
      )}
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: image (below text on mobile) */}
        <div className="relative order-2 mx-auto w-full max-w-[560px] lg:order-1 lg:max-w-none">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={900}
            height={900}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Right: content */}
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
            <span className="font-semibold text-gray-900">{brandName}</span>{" "}
            {description}
          </p>

          <ul className="mx-auto mt-8 inline-flex flex-col gap-4 text-left sm:gap-5 lg:mx-0 lg:flex">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-lg text-gray-900 sm:text-xl"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0038FF]">
                  <Check className="size-4 text-white" strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}