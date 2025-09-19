import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Course } from "@/types";
import { Clock, Users, BookOpen, Star, Crown } from "lucide-react";
import { formatNumber } from "@/lib/utils";

interface CourseCardProps {
	course: Course;
}

const getDifficultyGradient = (difficulty: string) => {
	switch (difficulty) {
		case "Beginner":
			return "bg-gradient-to-r from-emerald-500 to-teal-500";
		case "Intermediate":
			return "bg-gradient-to-r from-orange-500 to-amber-500";
		case "Advanced":
			return "bg-gradient-to-r from-red-500 to-pink-500";
		default:
			return "bg-gradient-to-r from-gray-500 to-gray-600";
	}
};

export function CourseCard({ course }: CourseCardProps) {
	return (
		<Card className="group relative h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] border-white/10 bg-gradient-to-br from-white/8 via-cyan-500/5 to-blue-500/8 backdrop-blur-sm transition-all duration-200 ease-out hover:border-cyan-400/30 hover:bg-gradient-to-br hover:from-white/12 hover:via-cyan-500/10 hover:to-blue-500/12 cursor-pointer hover:shadow-xl hover:shadow-cyan-500/15 hover:-translate-y-1 hover:scale-[1.01] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-transparent before:via-cyan-500/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200 before:ease-out">
			{/* Featured Badge */}
			{course.isFeatured && (
				<div className="absolute -top-1 sm:-top-2 -right-2 sm:-right-3 z-10 flex items-center gap-1 rounded-full bg-red-900 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold text-white shadow-lg border border-red-800">
					<Crown className="h-3 w-3 text-red-300" />
					<span className="hidden sm:inline">Featured</span>
				</div>
			)}

			<div className="flex h-full flex-col">
				<CardHeader className="space-y-2 sm:space-y-3 p-3 sm:p-4 md:p-6 flex-shrink-0">
					{/* Category & Rating */}
					<div className="flex items-center justify-between">
						<div className="text-xs font-semibold tracking-widest text-orange-400 uppercase">
							{course.category}
						</div>
						<div className="flex items-center gap-1">
							<Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
							<span className="text-xs text-white/80">{course.rating}</span>
						</div>
					</div>
					
					{/* Title */}
					<h3 className="text-sm sm:text-lg md:text-xl font-bold text-white leading-tight group-hover:text-orange-100 transition-colors duration-200 ease-out line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]">
						{course.title}
					</h3>
					
				</CardHeader>

				<CardContent className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 p-3 sm:p-4 md:p-6 pt-2 sm:pt-3 md:pt-4 flex flex-col">
					{/* Description */}
					<p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-2 sm:line-clamp-3 min-h-[2.5rem] sm:min-h-[3rem]">
						{course.description}
					</p>

					{/* Difficulty Badge */}
					<div className="flex justify-start flex-shrink-0">
						<Badge className={`${getDifficultyGradient(course.difficulty)} text-white border-0 font-semibold px-2 py-1 text-xs`}>
							{course.difficulty}
						</Badge>
					</div>

				{/* Metadata */}
				<div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 pt-1 sm:pt-2 flex-shrink-0">
					<div className="flex flex-col items-center text-center group/meta">
						<Clock className="h-3 w-3 text-cyan-400 mb-1 group-hover/meta:text-cyan-300 transition-colors duration-150 ease-out" />
						<span className="text-xs text-white/60">{course.duration}</span>
					</div>
					<div className="flex flex-col items-center text-center group/meta">
						<BookOpen className="h-3 w-3 text-cyan-400 mb-1 group-hover/meta:text-cyan-300 transition-colors duration-150 ease-out" />
						<span className="text-xs text-white/60">{course.modules} modules</span>
					</div>
					<div className="flex flex-col items-center text-center group/meta">
						<Users className="h-3 w-3 text-cyan-400 mb-1 group-hover/meta:text-cyan-300 transition-colors duration-150 ease-out" />
						<span className="text-xs text-white/60">{formatNumber(course.students)}</span>
					</div>
				</div>

					{/* Tags */}
					<div className="flex flex-wrap gap-1 flex-shrink-0">
						{course.tags.slice(0, 2).map((tag) => (
							<Badge key={tag} variant="outline" className="text-xs border-cyan-500/30 text-cyan-200/80 hover:border-cyan-400/60 hover:text-cyan-100 hover:bg-cyan-500/10 transition-all duration-150 ease-out">
								{tag}
							</Badge>
						))}
					</div>
				</CardContent>

				<CardFooter className="pt-3 sm:pt-4 md:pt-6 p-3 sm:p-4 md:p-6 flex-shrink-0 mt-auto">
					<Button 
						asChild 
						className="w-full bg-[#00ffff] text-black font-semibold hover:bg-[#00e6e6] transition-all duration-200 ease-out shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 ripple-effect btn-enhanced text-xs sm:text-sm md:text-base"
					>
						<Link href={course.href}>
							Start Learning
						</Link>
					</Button>
				</CardFooter>
			</div>
		</Card>
	);
}
