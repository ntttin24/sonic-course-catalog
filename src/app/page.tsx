import courses from "@/data/courses.json";
import { CourseCatalog } from "@/components/CourseCatalog";
import type { Course } from "@/types";

export default function Home() {
  return <CourseCatalog courses={courses as Course[]} />;
}
