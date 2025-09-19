"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, BookOpen, Star } from "lucide-react";
import { useEffect } from "react";

export default function Hero() {
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
		<section className="relative py-16 px-4 text-center">
			{/* Background Effects - Particles */}
			<div className="dot-grid" />
			<div className="bg-particles"></div>
			
			<div className="relative z-10 mx-auto max-w-4xl">
				{/* Main Title */}
				<h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                Sonic Courses
				</h1>
				
				{/* Subtitle */}
				<p className="text-lg md:text-2xl text-white/85 mb-10 leading-relaxed">
					Discover the potential of decentralized finance with high-quality courses.
					<br className="hidden md:block" />
					Learn from leading experts in blockchain and DeFi.
				</p>
				
				{/* Stats */}
				<div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">6+</div>
						<div className="text-sm text-white/60 uppercase tracking-wider">Courses</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10k+</div>
						<div className="text-sm text-white/60 uppercase tracking-wider">Students</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-0">
							4.9
							<Star className="h-6 w-6 md:h-8 md:w-8 fill-white text-white" />
						</div>
						<div className="text-sm text-white/60 uppercase tracking-wider">Rating</div>
					</div>
				</div>

				{/* CTAs */}
				<div className="mt-12 flex items-center justify-center gap-8">
					<div className="relative p-[1px] bg-gradient-to-r from-blue-400 via-cyan-400 via-orange-500 to-blue-600 to-blue-500 rounded-full animate-border transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/20">
						<Button asChild className="bg-black text-white rounded-full px-8 py-3 h-auto hover:bg-gray-900 text-sm md:text-base font-semibold hover:!text-white transition-all duration-300">
							<Link href="#courses" className="flex items-center gap-3">
								<BookOpen className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
								<span>Start Learning Now</span>
							</Link>
						</Button>
					</div>
					<div className="relative p-[1px] bg-gradient-to-r from-blue-400 via-cyan-400 via-orange-500 to-blue-600 to-blue-500 rounded-full animate-border transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20">
						<Button asChild className="bg-black text-white rounded-full px-6 py-3 h-auto hover:bg-gray-900 text-sm md:text-base font-semibold hover:!text-white transition-all duration-300">
							<Link href="#roadmap" className="flex items-center gap-3">
								<Rocket className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
								<span>Suggested Path</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}