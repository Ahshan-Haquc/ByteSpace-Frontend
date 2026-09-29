"use client";

import { useMemo, useState } from "react";

import { CourseCard } from "@/components/course/CourseCard";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

interface CourseSectionProps {
  title?: React.ReactNode;
  description?: string;
  categories: string[];
  courses: Course[];
  initialVisibleCategories?: number;
}

export function CourseSection({
  title = (
    <>
      Discover Your Passion,
      <br />
      Build Your Skills
    </>
  ),
  description = "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
  categories,
  courses,
  initialVisibleCategories = 15,
}: CourseSectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showAll, setShowAll] = useState(false);

  const hasMore = categories.length > initialVisibleCategories;
  const visibleCategories = showAll
    ? categories
    : categories.slice(0, initialVisibleCategories);

  const filteredCourses = useMemo(() => {
    // "Featured" (first tab) shows featured courses, others filter by category
    if (activeCategory === categories[0]) {
      return courses.filter((course) => course.featured);
    }
    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory, categories, courses]);

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 md:py-16">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
          {description}
        </p>
      </div>

      {/* Category pills */}
      <div
        role="tablist"
        aria-label="Course categories"
        className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:mt-10"
      >
        {visibleCategories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors sm:px-5 sm:py-2.5 sm:text-base",
                isActive
                  ? "bg-[#DEFF1F] font-medium text-gray-950"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200",
              )}
            >
              {category}
            </button>
          );
        })}

        {hasMore && (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="px-3 py-2 text-sm font-medium text-[#0038FF] hover:underline sm:text-base"
          >
            {showAll ? "− Less" : "+ More"}
          </button>
        )}
      </div>

      {/* Cards */}
      {filteredCourses.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} priority={index < 3} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-gray-500">
          No courses found in “{activeCategory}” yet.
        </p>
      )}
    </section>
  );
}