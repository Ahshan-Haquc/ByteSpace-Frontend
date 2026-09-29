import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  className?: string;
  /** Set true for above-the-fold cards to preload the image */
  priority?: boolean;
}

const MAX_VISIBLE_AVATARS = 4;

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function LevelIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className={cn("size-4", className)}
    >
      <rect x="1.5" y="9" width="3" height="5.5" rx="1" />
      <rect x="6.5" y="3.5" width="3" height="11" rx="1" />
      <rect x="11.5" y="6.5" width="3" height="8" rx="1" />
    </svg>
  );
}

function StatPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full bg-white/60 px-3 py-1 text-[11px] font-medium text-gray-700 backdrop-blur-md sm:text-xs">
      {children}
    </span>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function CourseCard({ course, className, priority }: CourseCardProps) {
  const {
    slug,
    title,
    thumbnail,
    lessons,
    duration,
    comments,
    rating,
    level,
    author,
    students,
    totalStudents,
    price,
    priceUnit = "lifetime",
  } = course;

  const visibleStudents = students.slice(0, MAX_VISIBLE_AVATARS);
  const extraStudents = Math.max(totalStudents - visibleStudents.length, 0);
  const href = `/courses/${slug}`;

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-3xl border border-gray-300 bg-white p-3 transition-shadow duration-300 hover:shadow-lg sm:p-4",
        className,
      )}
    >
      {/* Thumbnail */}
      <Link
        href={href}
        aria-label={title}
        className="relative block aspect-[341/195] w-full overflow-hidden rounded-2xl bg-gray-100"
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-center gap-2">
          <StatPill>{lessons} Lessons</StatPill>
          <StatPill>{duration}</StatPill>
          <StatPill>{comments} Comments</StatPill>
        </div>
      </Link>

      {/* Body */}
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 truncate text-lg font-semibold text-gray-950 sm:text-xl">
            <Link href={href} title={title} className="hover:underline">
              {title}
            </Link>
          </h3>

          <div className="flex shrink-0 items-center gap-1.5 text-gray-400">
            <span className="text-base sm:text-lg">{rating.toFixed(1)}</span>
            <Star className="size-5 fill-gray-300 text-gray-300" aria-hidden />
            <span className="sr-only">out of 5 stars</span>
          </div>
        </div>

        <p className="mt-1 text-xs text-gray-500">
          by{" "}
          <Link
            href={author.href ?? "#"}
            className="text-[#0038FF] hover:underline"
          >
            {author.name}
          </Link>
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3.5 py-2 text-xs font-medium text-gray-700">
            <LevelIcon className="text-gray-700" />
            {level}
          </span>

          <div
            className="flex items-center -space-x-2.5"
            aria-label={`${totalStudents} students enrolled`}
          >
            {visibleStudents.map((student) => (
              <Avatar
                key={student.name}
                className="size-9 border-2 border-white sm:size-10"
              >
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback className="text-xs">
                  {getInitials(student.name)}
                </AvatarFallback>
              </Avatar>
            ))}
            {extraStudents > 0 && (
              <span className="relative z-10 flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#DEFF1F] text-xs font-medium text-gray-900 sm:size-10">
                {extraStudents}+
              </span>
            )}
          </div>
        </div>

        <p className="mt-auto pt-5">
          <span className="text-xl font-bold text-[#0038FF] sm:text-2xl">
            {priceFormatter.format(price)}
          </span>
          <span className="text-xs text-gray-500">/{priceUnit}</span>
        </p>
      </div>
    </article>
  );
}