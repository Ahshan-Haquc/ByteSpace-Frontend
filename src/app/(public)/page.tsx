import { CourseSection } from "@/components/course/CourseSection";
import { BrandMarquee } from "@/components/landingPage/BrandMarquee";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { LearningPaths } from "@/components/landingPage/LearningPaths";
import {
  courseCategories,
  courses,
  INITIAL_VISIBLE_CATEGORIES,
} from "@/data/courses";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      <HeroSection />
      <BrandMarquee/>
      <CourseSection
        categories={courseCategories}
        courses={courses}
        initialVisibleCategories={INITIAL_VISIBLE_CATEGORIES}
      />
      <LearningPaths />
    </div>
  );
}
