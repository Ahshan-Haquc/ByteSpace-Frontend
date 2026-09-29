import type { Course, CourseStudent } from "@/types/course";

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  // shown after clicking "+ More"
  "Business",
  "Writing",
  "Fitness",
  "Languages",
];

/** How many category pills are visible before clicking "+ More" */
export const INITIAL_VISIBLE_CATEGORIES = 18;

const students: CourseStudent[] = [
  { name: "Marcus Hill", avatar: "https://i.pravatar.cc/80?img=12" },
  { name: "Tanya Brooks", avatar: "https://i.pravatar.cc/80?img=45" },
  { name: "Amara Osei", avatar: "https://i.pravatar.cc/80?img=32" },
  { name: "Daniel Cruz", avatar: "https://i.pravatar.cc/80?img=15" },
];

const author = { name: "purepearl studio", href: "#" };

const base = {
  featured: true,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner" as const,
  author,
  students,
  totalStudents: 30,
  price: 25,
  priceUnit: "lifetime",
};

export const courses: Course[] = [
  {
    ...base,
    id: "1",
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    thumbnail: "https://picsum.photos/seed/figma-course/680/390",
  },
  {
    ...base,
    id: "2",
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    category: "Digital Illustration",
    thumbnail: "https://picsum.photos/seed/digital-asset/680/390",
  },
  {
    ...base,
    id: "3",
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    category: "Data Science",
    thumbnail: "https://picsum.photos/seed/big-data/680/390",
  },
  {
    ...base,
    id: "4",
    slug: "balancing-productivity-and-life",
    title: "Balancing Productivity and Life",
    category: "Productivity",
    thumbnail: "https://picsum.photos/seed/productivity/680/390",
  },
  {
    ...base,
    id: "5",
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    category: "Freelance & Entrepreneurship",
    thumbnail: "https://picsum.photos/seed/money-management/680/390",
  },
  {
    ...base,
    id: "6",
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    category: "Freelance & Entrepreneurship",
    thumbnail: "https://picsum.photos/seed/startup-success/680/390",
  },
];