import React from "react";
import Image from "next/image";

interface TeamMemberProps {
	name: string;
	university: string;
	sat: string;
}

const TeamMemberCard = ({ name, university, sat }: TeamMemberProps) => (
	<div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700/50 hover:border-[#f27d0d]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#f27d0d]/10">
		<div className="flex items-center gap-4">
			<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f27d0d] to-[#ff9a3c] flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
				{name.charAt(0)}
			</div>
			<div>
				<h4 className="text-white font-semibold">{name}</h4>
				<p className="text-gray-400 text-sm">{university}</p>
			</div>
		</div>
		<div className="mt-3 pt-3 border-t border-gray-700/50">
			<span className="text-[#f27d0d] text-sm font-semibold">SAT: {sat}</span>
		</div>
	</div>
);

const StatCard = ({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) => (
	<div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 hover:border-[#f27d0d]/30 transition-all duration-300">
		<div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#f27d0d]/10 flex items-center justify-center text-[#f27d0d]">
			{icon}
		</div>
		<p className="text-3xl md:text-4xl font-bold text-white">{value}</p>
		<p className="text-gray-400 text-sm mt-1">{label}</p>
	</div>
);

export default function StartupComponent() {
	const teamMembers: TeamMemberProps[] = [
		{ name: "Linh Nguyen", university: "Washington and Lee University", sat: "1550" },
		{ name: "Tran Nguyen", university: "Columbia University", sat: "1530" },
		{ name: "Lan Nguyen", university: "University of Pennsylvania", sat: "1540" },
		{ name: "Tran Ha My", university: "Vassar College", sat: "1530" },
		{ name: "Hoai Anh Le", university: "Bennington College", sat: "1530" },
		{ name: "Lam Dinh", university: "Villanova University", sat: "1500" },
	];

	return (
		<div className="min-h-screen pt-24 relative">
			{/* Background decorations */}
			<div className="absolute top-40 left-0 w-96 h-96 bg-[#f27d0d]/5 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute top-[60rem] right-0 w-96 h-96 bg-[#f27d0d]/5 rounded-full blur-3xl pointer-events-none" />

			{/* Header */}
			<div className="text-center mb-16 px-4 relative z-10">
				<span className="inline-block px-4 py-2 bg-[#f27d0d]/10 border border-[#f27d0d]/20 text-[#f27d0d] text-sm font-medium rounded-full mb-6">
					Founder & CEO
				</span>
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
					The Coconut <span className="text-[#f27d0d]">Academy</span>
				</h1>
				<p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
					Empowering global students to achieve their American university dreams
				</p>
			</div>

			{/* Stats */}
			<div className="max-w-5xl mx-auto px-4 mb-20 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<StatCard
						value="$10K+"
						label="Revenue Generated"
						icon={
							<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						}
					/>
					<StatCard
						value="1000+"
						label="Students Reached"
						icon={
							<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						}
					/>
					<StatCard
						value="6+"
						label="Expert Consultants"
						icon={
							<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
							</svg>
						}
					/>
				</div>
			</div>

			{/* Full-width Banner */}
			<div className="w-full mb-20 relative z-10">
				<Image
					src="/about/startup/1.png"
					width={1920}
					height={600}
					loading="lazy"
					alt="The Coconut Academy Banner"
					layout="responsive"
				/>
			</div>

			{/* Quote */}
			<div className="max-w-4xl mx-auto px-4 mb-24 relative z-10">
				<div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-10 md:p-14 border border-gray-700/50">
					<div className="absolute -top-6 left-10 text-[#f27d0d] text-8xl font-serif opacity-50">"</div>
					<blockquote className="text-center relative z-10">
						<p className="text-xl md:text-2xl lg:text-3xl text-gray-200 italic leading-relaxed">
							There is no more noble occupation in the world than to assist another
							human being - to help someone succeed.
						</p>
						<div className="mt-6 flex items-center justify-center gap-3">
							<div className="w-12 h-px bg-[#f27d0d]"></div>
							<p className="text-[#f27d0d] font-medium">Alan Loy McGinnis</p>
							<div className="w-12 h-px bg-[#f27d0d]"></div>
						</div>
					</blockquote>
				</div>
			</div>

			{/* Founder Section */}
			<div className="max-w-7xl mx-auto px-4 mb-24 relative z-10">
				<div className="text-center mb-12">
					<span className="text-[#f27d0d] text-sm font-medium tracking-wider uppercase">About Me</span>
					<h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
						From the Founder
					</h2>
				</div>
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div className="relative">
						<div className="absolute -inset-4 bg-gradient-to-br from-[#f27d0d]/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
						<Image
							src="/about/startup/2.png"
							width={800}
							height={800}
							loading="lazy"
							alt="Founder"
							className="relative w-full h-auto rounded-2xl shadow-2xl"
						/>
					</div>
					<div className="space-y-6">
						<p className="text-gray-300 leading-relaxed text-lg">
							I am an eloquent individual driven by innovative ideas, passionately
							embodying the philosophy of <span className="text-[#f27d0d] font-semibold">'Do what you love, and love what you do.'</span>
						</p>
						<p className="text-gray-300 leading-relaxed text-lg">
							Committed to giving 100%, I prioritize and dedicate myself to my
							pursuits, demonstrating resilience and a commitment to empowering and
							inspiring others.
						</p>
						<p className="text-gray-300 leading-relaxed text-lg">
							Launched in <span className="text-white font-semibold">May 2021</span>, Coconut Consulting Academy (TCCA) is my
							inaugural startup dedicated to assisting global students in applying
							to American universities. With a simple and effective model, we've
							continually evolved to meet the needs of high school
							students pursuing education in the United States.
						</p>
					</div>
				</div>
			</div>

			{/* Team Section */}
			<div className="bg-gradient-to-b from-transparent via-gray-800/30 to-transparent py-24 relative z-10">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-12">
						<span className="text-[#f27d0d] text-sm font-medium tracking-wider uppercase">The People</span>
						<h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
							Our Expert Team
						</h2>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						<div className="order-2 lg:order-1">
							<p className="text-gray-300 leading-relaxed text-lg mb-8">
								For us, a team of high-quality essay writers is indispensable as
								essays constitute the <span className="text-[#f27d0d] font-semibold">'heart and soul'</span> of every university
								application. The success of our students' application journeys is
								attributed to the guidance, advice, and thoughtful feedback provided
								by our dedicated team members.
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{teamMembers.map((member, index) => (
									<TeamMemberCard key={index} {...member} />
								))}
							</div>
						</div>
						<div className="order-1 lg:order-2 relative">
							<div className="absolute -inset-4 bg-gradient-to-bl from-[#f27d0d]/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
							<Image
								src="/about/startup/4.png"
								width={800}
								height={800}
								loading="lazy"
								alt="Coconut Academy Team"
								className="relative w-full h-auto rounded-2xl shadow-2xl"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Success Story */}
			<div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
				<div className="text-center mb-12">
					<span className="text-[#f27d0d] text-sm font-medium tracking-wider uppercase">Case Study</span>
					<h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
						Success Story
					</h2>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div className="relative">
						<div className="absolute -inset-4 bg-gradient-to-br from-[#f27d0d]/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
						<Image
							src="/about/startup/5.png"
							width={800}
							height={800}
							loading="lazy"
							alt="Success Story - Vu Bao Tin"
							className="relative w-full h-auto rounded-2xl shadow-2xl"
						/>
					</div>
					<div>
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
							<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
							<span className="text-green-400 text-sm font-medium">Featured Success</span>
						</div>

						<h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Mr. Vu Bao Tin</h3>

						<p className="text-gray-300 leading-relaxed text-lg mb-8">
							Approaching TCCA in July with a determination to pursue
							higher education in the United States, Tin has secured acceptance letters
							and substantial scholarships from <span className="text-[#f27d0d] font-semibold">four prestigious American universities</span>.
						</p>

						<div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-700/50 mb-8">
							<p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">Annual Scholarship Range</p>
							<div className="flex items-center gap-6">
								<div>
									<p className="text-4xl font-bold text-[#f27d0d]">$37.5K</p>
									<p className="text-sm text-gray-500">Minimum</p>
								</div>
								<div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
									<div className="h-full w-full bg-gradient-to-r from-[#f27d0d] to-[#ff9a3c] rounded-full"></div>
								</div>
								<div className="text-right">
									<p className="text-4xl font-bold text-[#f27d0d]">$45.5K</p>
									<p className="text-sm text-gray-500">Maximum</p>
								</div>
							</div>
						</div>

						<p className="text-gray-400">
							We extend our warmest congratulations to Tin and are proud to have played
							a role in his educational journey.
						</p>
					</div>
				</div>
			</div>

			{/* CTA */}
			<div className="relative z-10 py-24">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 border border-gray-700/50 relative overflow-hidden">
						<div className="absolute top-0 right-0 w-64 h-64 bg-[#f27d0d]/10 rounded-full blur-3xl"></div>
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f27d0d]/5 rounded-full blur-3xl"></div>

						<div className="relative z-10">
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
								Ready to Start Your Journey?
							</h2>
							<p className="text-gray-400 mb-8 max-w-lg mx-auto">
								Join hundreds of students who have achieved their dreams of studying at top American universities with our guidance.
							</p>
							<a
								href="https://www.facebook.com/thecoconut.vn/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#f27d0d] to-[#ff9a3c] hover:from-[#e06d00] hover:to-[#f27d0d] text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#f27d0d]/25 hover:shadow-[#f27d0d]/40 hover:-translate-y-0.5"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
								Connect With Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
