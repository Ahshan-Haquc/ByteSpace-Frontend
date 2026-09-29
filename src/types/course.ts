export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface CourseAuthor {
  name: string;
  href?: string;
}

export interface CourseStudent {
  name: string;
  avatar: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  category: string;
  featured?: boolean;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: CourseLevel;
  author: CourseAuthor;
  students: CourseStudent[];
  totalStudents: number;
  price: number;
  priceUnit?: string;
}