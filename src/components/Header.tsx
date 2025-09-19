"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import type { CourseDifficulty } from "@/types";

interface HeaderProps {
	onSearch: (query: string) => void;
	onFilterChange: (filter: CourseDifficulty | "All") => void;
	searchQuery: string;
	activeFilter: CourseDifficulty | "All";
}

export default function Header({ onSearch, onFilterChange, searchQuery, activeFilter }: HeaderProps) {
	const [showMobileSearch, setShowMobileSearch] = useState(false);
	
	const filters: (CourseDifficulty | "All")[] = ["All", "Beginner", "Intermediate", "Advanced"];

	return (
		<header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
			<div className="mx-auto max-w-7xl px-4 py-4">
				{/* Top Row - Logo, Search, Filter & Action Buttons */}
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
							<span className="text-black font-bold text-xl">S</span>
						</div>
						<div className="flex flex-col">
							<div className="text-xl font-bold tracking-tight">
								<span className="text-white">
									Sonic University
								</span>
							</div>
							<div className="text-xs text-white/50 mt-1">
								Learn Web3 with Sonic
							</div>
						</div>
					</div>
					
					{/* Desktop Search & Filters - Center Left */}
					<div className="hidden lg:flex items-center gap-3 flex-1 justify-start ml-8">
						{/* Search Bar */}
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
							<Input
								placeholder="Search courses..."
								value={searchQuery}
								onChange={(e) => onSearch(e.target.value)}
								className="w-72 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-orange-400/50 transition-all duration-300"
							/>
						</div>

						{/* Filter Buttons - Compact */}
						<div className="flex gap-1">
							{filters.map((filter) => (
								<Button
									key={filter}
									variant={activeFilter === filter ? "default" : "ghost"}
									size="sm"
									onClick={() => onFilterChange(filter)}
									className={`px-3 py-1 text-xs transition-all duration-300 ${
										activeFilter === filter
											? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold hover:from-orange-400 hover:to-amber-400"
											: "text-white/70 hover:text-white hover:bg-white/10"
									}`}
								>
									{filter}
								</Button>
							))}
						</div>
					</div>

					{/* Action Buttons - Right */}
					<div className="hidden md:flex items-center gap-3">
						<div className="relative p-[1px] bg-gradient-to-r from-blue-400 via-cyan-400 via-orange-500 to-blue-600 to-blue-500 rounded-full animate-border">
							<Button 
								size="sm"
								className="bg-black text-white font-medium hover:bg-gray-900 transition-all duration-300 rounded-full px-5 py-2 h-auto focus-visible:outline-none focus-visible:ring-0"
							>
								My Courses
							</Button>
						</div>
						<div className="relative p-[1px] bg-gradient-to-r from-blue-400 via-cyan-400 via-orange-500 to-blue-600 to-blue-500 rounded-full animate-border">
							<Button 
								size="sm"
								className="bg-black text-white font-medium hover:bg-gray-900 transition-all duration-300 rounded-full px-5 py-2 h-auto focus-visible:outline-none focus-visible:ring-0"
							>
								Sign Up
							</Button>
						</div>
					</div>
					
					{/* Mobile Search Toggle */}
					<Button
						variant="ghost"
						size="sm"
						className="md:hidden text-white/70 hover:text-white"
						onClick={() => setShowMobileSearch(!showMobileSearch)}
					>
						<Search className="h-5 w-5" />
					</Button>
				</div>

				{/* Mobile Search & Filters */}
				<div className={`mt-4 space-y-4 md:hidden ${showMobileSearch ? "block" : "hidden"}`}>
					{/* Search Bar */}
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
						<Input
							placeholder="Search courses..."
							value={searchQuery}
							onChange={(e) => onSearch(e.target.value)}
							className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-orange-400/50 transition-all duration-300"
						/>
					</div>

					{/* Filter Buttons */}
					<div className="flex flex-wrap justify-center gap-2">
						{filters.map((filter) => (
							<Button
								key={filter}
								variant={activeFilter === filter ? "default" : "ghost"}
								size="sm"
								onClick={() => onFilterChange(filter)}
								className={`transition-all duration-300 ${
									activeFilter === filter
										? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-semibold hover:from-orange-400 hover:to-amber-400"
										: "text-white/70 hover:text-white hover:bg-white/10"
								}`}
							>
								{filter}
							</Button>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}


