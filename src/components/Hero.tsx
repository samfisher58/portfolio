'use client';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
	return (
		<main className="relative z-10 max-w-7xl mx-auto px-6 pt-8 md:pt-16 pb-32 min-h-[90vh] flex flex-col justify-center">
			<div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
				<div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
					<h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-4 dark:text-white text-slate-900 leading-[1.1]">
						Hi, I'm Saymon
					</h1>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
						MERN stack developer
					</h2>
					<p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed mx-auto md:mx-0">
						Crafting modern, responsive, and user-friendly websites with passion
						and precision. Transforming ideas into digital reality.
					</p>

					<div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
						<a href="/Resume - MD-Saymon.pdf" download>
							<Button
								variant="glow"
								size="glow"
								className="group flex items-center space-x-2"
							>
								<span>Download Resume</span>
								<Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
							</Button>
						</a>

						<div className="flex items-center space-x-4">
							<a href="https://github.com/samfisher58">
								<Button
									variant="ghost"
									size="icon"
									className="w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:text-primary transition-all duration-300"
								>
									<Github className="w-5 h-5" />
								</Button>
							</a>
							<a href="https://www.linkedin.com/in/saymonislam58">
								<Button
									variant="ghost"
									size="icon"
									className="w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:text-primary transition-all duration-300"
								>
									<Linkedin className="w-5 h-5" />
								</Button>
							</a>
							<Button
								asChild
								variant="ghost"
								size="icon"
								className="w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:text-primary transition-all duration-300"
							>
								<a
									href="mailto:islamsaymon18@gmail.com"
									aria-label="Send email"
								>
									<Mail className="w-5 h-5" />
								</a>
							</Button>
						</div>
					</div>
				</div>

				<div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center">
					<div className="relative">
						<div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full floating"></div>
						<div className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-primary/40 p-2 glow-effect">
							<div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
								<Image
									src="/dp.jpeg"
									alt="Meriem Profile"
									width={384}
									height={384}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						{/* Floating tech icons */}
						<div
							className="absolute -top-4 -left-4 z-20 w-16 h-16 rounded-full bg-slate-900/90 flex items-center justify-center p-3 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)] floating"
							style={{ animationDelay: '0.2s' }}
						>
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
								alt="Node.js"
								width={40}
								height={40}
							/>
						</div>
						<div
							className="absolute top-1/4 -right-8 z-20 w-14 h-14 rounded-full bg-slate-900/90 flex items-center justify-center p-3 border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.3)] floating"
							style={{ animationDelay: '0.5s' }}
						>
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
								alt="HTML5"
								width={36}
								height={36}
							/>
						</div>
						<div
							className="absolute bottom-4 right-8 z-20 w-16 h-16 rounded-full bg-slate-900/90 flex items-center justify-center p-3 border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.3)] floating"
							style={{ animationDelay: '0.8s' }}
						>
							<Image
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
								alt="React"
								width={40}
								height={40}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-20 flex flex-col items-center opacity-50">
				<span className="text-xs font-medium uppercase tracking-widest mb-2">
					Scroll
				</span>
				<div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
			</div>
		</main>
	);
}
