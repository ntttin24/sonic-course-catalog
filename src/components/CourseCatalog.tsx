"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { Course, CourseDifficulty } from "@/types";
import { CourseCard } from "@/components/CourseCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

interface CourseCatalogProps {
	courses: Course[];
}

export function CourseCatalog({ courses }: CourseCatalogProps) {
	const [query, setQuery] = useState("");
	const [debouncedQuery, setDebouncedQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState<CourseDifficulty | "All">("All");
	const [isLoading, setIsLoading] = useState(false);

	// Debounce search query
	useEffect(() => {
		setIsLoading(true);
		const timer = setTimeout(() => {
			setDebouncedQuery(query);
			setIsLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [query]);

	const handleSearch = useCallback((searchQuery: string) => {
		setQuery(searchQuery);
	}, []);

	const handleFilterChange = useCallback((filter: CourseDifficulty | "All") => {
		setActiveFilter(filter);
	}, []);

	const filteredCourses = useMemo(() => {
		let filtered = courses;

		// Filter by difficulty
		if (activeFilter !== "All") {
			filtered = filtered.filter((course) => course.difficulty === activeFilter);
		}

		// Filter by search query
		if (debouncedQuery.trim()) {
			const q = debouncedQuery.trim().toLowerCase();
			filtered = filtered.filter((course) =>
				[
					course.title,
					course.description,
					course.category,
					course.difficulty,
					...course.tags,
				]
					.join(" ")
					.toLowerCase()
					.includes(q)
			);
		}

		// Sort: Featured first, then by rating, then by students
		return filtered.sort((a, b) => {
			if (a.isFeatured && !b.isFeatured) return -1;
			if (!a.isFeatured && b.isFeatured) return 1;
			if (a.rating !== b.rating) return b.rating - a.rating;
			return b.students - a.students;
		});
	}, [courses, debouncedQuery, activeFilter]);

	return (
		<div className="min-h-screen relative">
			<Header
				onSearch={handleSearch}
				onFilterChange={handleFilterChange}
				searchQuery={query}
				activeFilter={activeFilter}
			/>

			<Hero />

			<main className="mx-auto max-w-7xl px-4 py-6">
				{/* Results Summary */}
				<div className="mb-8 flex items-center justify-between">
					<div className="text-white/70">
						{isLoading ? (
							<div className="flex items-center gap-2">
								<div className="h-4 w-4 animate-spin rounded-full border-2 border-orange-500 border-t-transparent"></div>
								Searching...
							</div>
						) : (
							<span>
								Showing {filteredCourses.length} of {courses.length} courses
								{activeFilter !== "All" && (
									<span className="ml-2 text-orange-400">• {activeFilter}</span>
								)}
								{debouncedQuery && (
									<span className="ml-2 text-orange-400">• &ldquo;{debouncedQuery}&rdquo;</span>
								)}
							</span>
						)}
					</div>
				</div>

				{/* Course Grid */}
				{filteredCourses.length > 0 ? (
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-stretch">
						{filteredCourses.map((course, index) => (
							<div
								key={course.id}
								className="animate-fade-in flex"
								style={{
									animationDelay: `${index * 100}ms`,
									animationFillMode: "both",
								}}
							>
								<CourseCard course={course} />
							</div>
						))}
					</div>
				) : (
					<div className="text-center py-16">
						<div className="text-6xl mb-4">🔍</div>
						<h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
						<p className="text-white/60 max-w-md mx-auto">
							Try adjusting your search terms or filters to find what you&apos;re looking for.
						</p>
					</div>
				)}
			</main>

			<div className="mt-16">
				<Footer />
			</div>
		</div>
	);
}
