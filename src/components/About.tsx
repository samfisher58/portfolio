import { Card } from '@/components/ui/card'
import { Cog, TestTube, BookOpen } from 'lucide-react';
import Image from 'next/image'

export default function About() {
  return (
		<section
			className="relative z-10 py-24 bg-slate-950/40 border-y border-white/5 overflow-hidden"
			id="about"
		>
			<div className="absolute inset-0 grid-pattern opacity-40"></div>
			<div className="max-w-7xl mx-auto px-6 relative z-20">
				<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
					<div className="w-full lg:w-5/12">
						<div className="relative group">
							<div className="absolute -inset-4 bg-gradient-to-r from-primary to-orange-400 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
							<div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 glow-effect">
								<Image
									src="/dp.jpeg"
									alt="Meriem Illustration"
									width={400}
									height={500}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
							</div>
							<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
						</div>
					</div>

					<div className="w-full lg:w-7/12">
						<div className="mb-8">
							<h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">
								Discovery
							</h2>
							<h3 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent inline-block">
								About Me
							</h3>
						</div>

						<div className="space-y-6 text-lg text-slate-400 leading-relaxed">
							<p>
								I am a MERN Stack Web Developer with hands-on experience
								building scalable, user-focused web applications using React,
								Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, and
								HTML5, with a strong passion for clean, maintainable code and
								continuous learning.
							</p>
							<p>
								I am currently working as a Quality Assurance professional in
								the BPO/IT-enabled services (ITES) industry, with over 3 years
								of experience in content moderation, customer service, auditing,
								and process improvement, along with team management and training
								responsibilities.
							</p>
							<p>
								My QA background shapes a quality-first approach to development,
								ensuring reliability, attention to detail, and performance
								optimization. I actively develop hands-on projects, which are
								showcased on my GitHub repositories.
							</p>
						</div>

						<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
							<Card className="p-4 bg-red-500/50 border-red-500/50 flex flex-col items-center sm:items-start text-center sm:text-left hover:bg-red-500/70 transition-colors">
								<Cog className="text-white text-4xl mb-3" />
								<h4 className="text-white font-bold mb-1 text-xl">
									🔧 ENGINEERING MINDSET
								</h4>
								<p className="text-white font-medium">
									Systematic problem-solving with scalable solutions.
								</p>
							</Card>

							<Card className="p-4 bg-green-500/50 border-green-500/50 flex flex-col items-center sm:items-start text-center sm:text-left hover:bg-green-500/70 transition-colors">
								<TestTube className="text-white text-4xl mb-3" />
								<h4 className="text-white font-bold mb-1 text-xl">
									🧪 QA-DRIVEN DEVELOPMENT
								</h4>
								<p className="text-white font-medium">
									Quality assurance at every stage of development.
								</p>
							</Card>

							<Card className="p-4 bg-blue-500/50 border-blue-500/50 flex flex-col items-center sm:items-start text-center sm:text-left hover:bg-blue-500/70 transition-colors">
								<BookOpen className="text-white text-4xl mb-3" />
								<h4 className="text-white font-bold mb-1 text-xl">
									📚 CONTINUOUS LEARNING
								</h4>
								<p className="text-white font-medium">
									Real projects driving constant skill improvement.
								</p>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}