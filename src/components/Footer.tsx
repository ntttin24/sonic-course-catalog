import Link from "next/link";
import { Github, Twitter, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-black border-t border-white/10 py-8 sm:py-10 md:py-12">
			<div className="mx-auto max-w-7xl px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
					{/* Logo & Description */}
					<div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
						<div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
							<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
								<span className="text-black font-bold text-xl">S</span>
							</div>
							<div>
								<div className="text-lg sm:text-xl font-bold">
									<span className="text-white">
										Sonic University
									</span>
								</div>
							</div>
						</div>
						<p className="text-white/60 text-sm leading-relaxed mb-6">
							Learn Web3 with high-quality courses from leading experts in blockchain and DeFi.
						</p>
						
						{/* Social Links */}
						<div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
							<Link 
								href="#" 
								className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:scale-110 ripple-effect btn-enhanced p-2 rounded-lg hover:bg-orange-400/10"
								aria-label="GitHub"
							>
								<Github className="h-4 w-4 sm:h-5 sm:w-5" />
							</Link>
							<Link 
								href="#" 
								className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:scale-110 ripple-effect btn-enhanced p-2 rounded-lg hover:bg-orange-400/10"
								aria-label="Twitter"
							>
								<Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
							</Link>
							<Link 
								href="#" 
								className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:scale-110 ripple-effect btn-enhanced p-2 rounded-lg hover:bg-orange-400/10"
								aria-label="Discord"
							>
								<MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
							</Link>
							<Link 
								href="#" 
								className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:scale-110 ripple-effect btn-enhanced p-2 rounded-lg hover:bg-orange-400/10"
								aria-label="Email"
							>
								<Mail className="h-4 w-4 sm:h-5 sm:w-5" />
							</Link>
						</div>
					</div>

					{/* Courses */}
					<div className="text-center sm:text-left">
						<h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Courses</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Blockchain Basics
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									DeFi Fundamentals
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Smart Contracts
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Web3 Development
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									NFT & Gaming
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div className="text-center sm:text-left">
						<h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Company</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									About Us
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Careers
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Blog
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Press
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div className="text-center sm:text-left">
						<h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Support</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Help Center
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 ripple-effect btn-enhanced block py-1 px-2 rounded hover:bg-orange-400/5">
									Status
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
					<div className="text-white text-xs sm:text-sm text-center sm:text-left">
						© 2025 Sonic University. All rights reserved.
					</div>
					<div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
						<Link href="#" className="text-white hover:text-orange-400 transition-all duration-300 hover:scale-105 ripple-effect btn-enhanced px-2 py-1 rounded hover:bg-orange-400/5">
							Privacy
						</Link>
						<Link href="#" className="text-white hover:text-orange-400 transition-all duration-300 hover:scale-105 ripple-effect btn-enhanced px-2 py-1 rounded hover:bg-orange-400/5">
							Terms
						</Link>
						<Link href="#" className="text-white hover:text-orange-400 transition-all duration-300 hover:scale-105 ripple-effect btn-enhanced px-2 py-1 rounded hover:bg-orange-400/5">
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
