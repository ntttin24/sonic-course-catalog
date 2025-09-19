import Link from "next/link";
import { Github, Twitter, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-black border-t border-white/10 py-12">
			<div className="mx-auto max-w-7xl px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo & Description */}
					<div className="md:col-span-1">
						<div className="flex items-center gap-3 mb-4">
							<div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
								<span className="text-black font-bold text-xl">S</span>
							</div>
							<div>
								<div className="text-xl font-bold">
									<span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
										Sonic University
									</span>
								</div>
							</div>
						</div>
						<p className="text-white/60 text-sm leading-relaxed">
							Learn Web3 with high-quality courses from leading experts in blockchain and DeFi.
						</p>
						
						{/* Social Links */}
						<div className="flex gap-4 mt-6">
							<Link 
								href="#" 
								className="text-white/60 hover:text-orange-400 transition-colors"
								aria-label="GitHub"
							>
								<Github className="h-5 w-5" />
							</Link>
							<Link 
								href="#" 
								className="text-white/60 hover:text-orange-400 transition-colors"
								aria-label="Twitter"
							>
								<Twitter className="h-5 w-5" />
							</Link>
							<Link 
								href="#" 
								className="text-white/60 hover:text-orange-400 transition-colors"
								aria-label="Discord"
							>
								<MessageCircle className="h-5 w-5" />
							</Link>
							<Link 
								href="#" 
								className="text-white/60 hover:text-orange-400 transition-colors"
								aria-label="Email"
							>
								<Mail className="h-5 w-5" />
							</Link>
						</div>
					</div>

					{/* Courses */}
					<div>
						<h3 className="text-white font-semibold mb-4">Courses</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Blockchain Basics
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									DeFi Fundamentals
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Smart Contracts
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Web3 Development
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									NFT & Gaming
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-white font-semibold mb-4">Company</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									About Us
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Careers
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Blog
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Press
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="text-white font-semibold mb-4">Support</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Help Center
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
									Status
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<div className="text-white/60 text-sm">
						© 2025 Sonic University. All rights reserved.
					</div>
					<div className="flex gap-6 mt-4 md:mt-0 text-sm">
						<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
							Privacy
						</Link>
						<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
							Terms
						</Link>
						<Link href="#" className="text-white/60 hover:text-orange-400 transition-colors">
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
