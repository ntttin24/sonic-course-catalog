"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, BookOpen, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Trigger animation when component mounts
		const timer = setTimeout(() => setIsVisible(true), 300);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		// Generate floating particles
		function createParticles() {
			const container = document.querySelector('.bg-particles');
			if (!container) return;
			
			const particleCount = 25;

			for (let i = 0; i < particleCount; i++) {
				const particle = document.createElement('div');
				particle.className = 'particle';
				particle.style.left = Math.random() * 100 + '%';
				particle.style.top = Math.random() * 100 + '%';
				particle.style.animationDelay = Math.random() * 6 + 's';
				particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
				
				// Randomize particle size
				const size = Math.random() * 2 + 1; // 1-3px
				particle.style.width = size + 'px';
				particle.style.height = size + 'px';
				
				container.appendChild(particle);
			}
		}

		// Initialize particles
		createParticles();

		// Cleanup function
		return () => {
			const container = document.querySelector('.bg-particles');
			if (container) {
				container.innerHTML = '';
			}
		};
	}, []);

	return (
		<section className="relative py-8 sm:py-12 md:py-16 px-4 text-center">
			{/* Background Effects - Particles */}
			<div className="dot-grid" />
			<div className="bg-particles"></div>
			
			<div className="relative z-10 mx-auto max-w-4xl">
				{/* Main Title */}
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                Sonic Courses
				</h1>
				
				{/* Subtitle */}
				<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2">
					Discover the potential of decentralized finance with high-quality courses.
					<br className="hidden sm:block" />
					Learn from leading experts in blockchain and DeFi.
				</p>
				
				{/* Stats */}
				<div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
					<div className="text-center">
						<div className={`text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-1 sm:mb-2 number-animate ${isVisible ? 'bounce-in' : ''}`}>
							<AnimatedNumber value={6} suffix="+" duration={1500} />
						</div>
						<div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Courses</div>
					</div>
					<div className="text-center">
						<div className={`text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-1 sm:mb-2 number-animate ${isVisible ? 'bounce-in' : ''}`}>
							<AnimatedNumber value={10} suffix="k+" duration={2000} />
						</div>
						<div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Students</div>
					</div>
					<div className="text-center">
						<div className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 flex items-center justify-center gap-0 number-animate ${isVisible ? 'bounce-in' : ''}`}>
							<AnimatedNumber value={4.9} duration={1800} decimals={1} />
							<Star className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 fill-white text-white" />
						</div>
						<div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">Rating</div>
					</div>
				</div>

				{/* CTAs */}
				<div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
					<div className="relative p-[1px] bg-gradient-to-r from-blue-400 via-cyan-400 via-orange-500 to-blue-600 to-blue-500 rounded-full animate-border transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/20 w-full sm:w-auto">
						<Button asChild className="bg-black text-white rounded-full px-6 sm:px-8 py-3 h-auto hover:bg-gray-900 text-sm sm:text-base font-semibold hover:!text-white transition-all duration-300 ripple-effect btn-enhanced w-full sm:w-auto">
							<Link href="#courses" className="flex items-center justify-center gap-2 sm:gap-3">
								<BookOpen className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110" />
								<span>Start Learning Now</span>
							</Link>
						</Button>
					</div>
					<div className="relative p-[1px] bg-gradient-to-r from-blue-400 via-cyan-400 via-orange-500 to-blue-600 to-blue-500 rounded-full animate-border transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 w-full sm:w-auto">
						<Button asChild className="bg-black text-white rounded-full px-4 sm:px-6 py-3 h-auto hover:bg-gray-900 text-sm sm:text-base font-semibold hover:!text-white transition-all duration-300 ripple-effect btn-enhanced w-full sm:w-auto">
							<Link href="#roadmap" className="flex items-center justify-center gap-2 sm:gap-3">
								<Rocket className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110" />
								<span>Suggested Path</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}