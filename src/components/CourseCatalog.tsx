"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { Course, CourseDifficulty } from "@/types";
import { CourseCard } from "@/components/CourseCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface CourseCatalogProps {
	courses: Course[];
}

export function CourseCatalog({ courses }: CourseCatalogProps) {
	const [query, setQuery] = useState("");
	const [debouncedQuery, setDebouncedQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState<CourseDifficulty | "All">("All");
	const [isLoading, setIsLoading] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

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
				showMobileMenu={showMobileMenu}
				setShowMobileMenu={setShowMobileMenu}
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

			{/* Full-Screen Mobile Menu Overlay */}
			{showMobileMenu && (
				<div 
					className="fixed inset-0 z-50 sm:hidden bg-black"
					onClick={() => setShowMobileMenu(false)}
				>
					{/* Menu Content */}
					<div 
						className="h-full flex flex-col"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header with Close Button */}
						<div className="flex items-center justify-between p-6 border-b border-white/10">
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md">
									<span className="text-black font-bold text-lg">S</span>
								</div>
								<span className="text-white font-bold text-lg">Menu</span>
							</div>
							<Button
								variant="ghost"
								size="sm"
								className="text-white/70 hover:text-white"
								onClick={() => setShowMobileMenu(false)}
							>
								<X className="h-6 w-6" />
							</Button>
						</div>
						
						{/* Menu Items */}
						<div className="flex-1 p-6">
							<div className="space-y-0">
								{/* My Course */}
								<div className="group">
									<Button 
										variant="ghost"
										className="w-full justify-start text-left p-4 h-auto bg-transparent hover:bg-white/10 transition-all duration-300"
										onClick={() => setShowMobileMenu(false)}
									>
										<div className="text-left">
											<div className="text-white font-semibold text-lg">My Course</div>
											<div className="text-white/60 text-sm">Xem các khóa học của bạn</div>
										</div>
									</Button>
								</div>
								
								{/* Divider */}
								<div className="mx-4 my-2">
									<div className="h-px bg-white/10"></div>
								</div>
								
								{/* Sign Up */}
								<div className="group">
									<Button 
										variant="ghost"
										className="w-full justify-start text-left p-4 h-auto bg-transparent hover:bg-white/10 transition-all duration-300"
										onClick={() => setShowMobileMenu(false)}
									>
										<div className="text-left">
											<div className="text-white font-semibold text-lg">Sign Up</div>
											<div className="text-white/60 text-sm">Đăng ký tài khoản mới</div>
										</div>
									</Button>
								</div>
							</div>
						</div>
						
						{/* Footer */}
						<div className="p-6 border-t border-white/10">
							<div className="text-center text-white/50 text-sm">
								Sonic University
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
