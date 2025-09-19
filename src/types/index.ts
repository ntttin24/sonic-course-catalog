export type CourseDifficulty = "Beginner" | "Intermediate" | "Advanced";
export type CourseCategory = "SMART CONTRACTS" | "DEFI" | "TOOLS & INFRASTRUCTURE" | "SECURITY" | "ADVANCED TOPICS";


export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: CourseDifficulty;
  category: CourseCategory;
  duration: string;
  modules: number;
  rating: number;
  students: number;
  isFeatured: boolean;
  tags: string[];
  href: string;
}




