"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import type { CourseDifficulty } from "@/types";

interface HeaderProps {
	onSearch: (query: string) => void;
	onFilterChange: (filter: CourseDifficulty | "All") => void;
	searchQuery: string;
	activeFilter: CourseDifficulty | "All";
	showMobileMenu: boolean;
	setShowMobileMenu: (show: boolean) => void;
}

export default function Header({ onSearch, onFilterChange, searchQuery, activeFilter, showMobileMenu, setShowMobileMenu }: HeaderProps) {
	const [showMobileSearch, setShowMobileSearch] = useState(false);
	
	const filters: (CourseDifficulty | "All")[] = ["All", "Beginner", "Intermediate", "Advanced"];

	return (
		<header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
			<div className="mx-auto max-w-7xl px-4 py-3 sm:py-4">
				{/* Top Row - Logo, Search, Filter & Action Buttons */}
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center gap-2 sm:gap-3">
						<div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
							<span className="text-black font-bold text-lg sm:text-xl">S</span>
						</div>
						<div className="flex flex-col">
							<div className="text-lg sm:text-xl font-bold tracking-tight">
								<span className="text-white">
									Sonic University
								</span>
							</div>
							<div className="text-xs text-white/50 mt-1 hidden sm:block">
								Learn Web3 with Sonic
							</div>
						</div>
					</div>
					
					{/* Desktop Search & Filters - Center Left */}
					<div className="hidden lg:flex items-center gap-3 flex-1 justify-start ml-4 sm:ml-8">
						{/* Search Bar */}
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
							<Input
								placeholder="Search courses..."
								value={searchQuery}
								onChange={(e) => onSearch(e.target.value)}
								className="w-64 xl:w-72 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-orange-400/50 transition-all duration-300"
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
									className={`px-2 xl:px-3 py-1 text-xs transition-all duration-300 light-sweep ${
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
					<div className="hidden sm:flex items-center gap-2 md:gap-3">
						<div className="relative p-[1px] bg-gradient-to-r from-blue-400 via-cyan-400 via-orange-500 to-blue-600 to-blue-500 rounded-full animate-border transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
							<Button 
								size="sm"
								className="bg-black text-white font-medium hover:bg-gray-900 transition-all duration-300 rounded-full px-3 sm:px-4 md:px-5 py-2 h-auto focus-visible:outline-none focus-visible:ring-0 text-xs sm:text-sm hover:!text-white ripple-effect light-sweep"
							>
								<span className="hidden sm:inline">My Courses</span>
								<span className="sm:hidden">Courses</span>
							</Button>
						</div>
						<div className="relative p-[1px] bg-gradient-to-r from-blue-400 via-cyan-400 via-orange-500 to-blue-600 to-blue-500 rounded-full animate-border transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
							<Button 
								size="sm"
								className="bg-black text-white font-medium hover:bg-gray-900 transition-all duration-300 rounded-full px-3 sm:px-4 md:px-5 py-2 h-auto focus-visible:outline-none focus-visible:ring-0 text-xs sm:text-sm hover:!text-white ripple-effect light-sweep"
							>
								Sign Up
							</Button>
						</div>
					</div>
					
					{/* Mobile Icons - Search and Menu */}
					<div className="lg:hidden flex items-center gap-2">
						{/* Mobile Search Toggle */}
						<Button
							variant="ghost"
							size="sm"
							className="text-white/70 hover:text-white"
							onClick={() => setShowMobileSearch(!showMobileSearch)}
						>
							<Search className="h-4 w-4 sm:h-5 sm:w-5" />
						</Button>
						
						{/* Mobile Menu Toggle */}
						<Button
							variant="ghost"
							size="sm"
							className="text-white/70 hover:text-white sm:hidden"
							onClick={() => setShowMobileMenu(!showMobileMenu)}
						>
							{showMobileMenu ? (
								<X className="h-4 w-4" />
							) : (
								<Menu className="h-4 w-4" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Search & Filters */}
				<div className={`mt-3 sm:mt-4 space-y-3 sm:space-y-4 lg:hidden ${showMobileSearch ? "block" : "hidden"}`}>
					{/* Search Bar */}
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
						<Input
							placeholder="Search courses..."
							value={searchQuery}
							onChange={(e) => onSearch(e.target.value)}
							className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-orange-400/50 transition-all duration-300 text-sm"
						/>
					</div>

					{/* Filter Buttons */}
					<div className="flex flex-wrap justify-center gap-1 sm:gap-2">
						{filters.map((filter) => (
							<Button
								key={filter}
								variant={activeFilter === filter ? "default" : "ghost"}
								size="sm"
								onClick={() => onFilterChange(filter)}
								className={`px-2 sm:px-3 py-1 text-xs transition-all duration-300 light-sweep ${
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


