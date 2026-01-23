import React from "react";
import Image from "next/image";

interface TeamMemberProps {
	name: string;
	university: string;
	sat: string;
}

const TeamMemberCard = ({ name, university, sat }: TeamMemberProps) => (
	<div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-[#f27d0d]/30 transition-all duration-300">
		<h4 className="text-white font-semibold">{name}</h4>
		<p className="text-gray-400 text-sm mt-1">{university}</p>
		<span className="inline-block mt-2 px-2 py-1 bg-[#f27d0d]/10 text-[#f27d0d] text-xs font-medium rounded">
			SAT: {sat}
		</span>
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
		<div className="min-h-screen pt-24">
			{/* Header */}
			<div className="text-center mb-16 px-4">
				<p className="text-[#f27d0d] text-sm font-medium tracking-wider uppercase mb-3">
					Founder & CEO
				</p>
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
					The Coconut Academy
				</h1>
				<p className="text-xl text-gray-400 max-w-2xl mx-auto">
					Empowering global students to achieve their American university dreams
				</p>
			</div>

			{/* Stats */}
			<div className="max-w-4xl mx-auto px-4 mb-16">
				<div className="grid grid-cols-3 gap-4 border-y border-gray-800 py-8">
					<div className="text-center">
						<p className="text-3xl md:text-4xl font-bold text-[#f27d0d]">$10K+</p>
						<p className="text-gray-400 text-sm mt-1">Revenue</p>
					</div>
					<div className="text-center">
						<p className="text-3xl md:text-4xl font-bold text-[#f27d0d]">1000+</p>
						<p className="text-gray-400 text-sm mt-1">Students Reached</p>
					</div>
					<div className="text-center">
						<p className="text-3xl md:text-4xl font-bold text-[#f27d0d]">6+</p>
						<p className="text-gray-400 text-sm mt-1">Consultants</p>
					</div>
				</div>
			</div>

			{/* Full-width Banner */}
			<div className="w-full mb-20">
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
			<div className="max-w-4xl mx-auto px-4 mb-20 relative z-10">
				<blockquote className="text-center bg-gray-900 py-8">
					<p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed">
						"There is no more noble occupation in the world than to assist another
						human being - to help someone succeed."
					</p>
					<p className="mt-4 text-[#f27d0d]">— Alan Loy McGinnis</p>
				</blockquote>
			</div>

			{/* Founder Section - Zigzag 1: Image Left, Text Right */}
			<div className="max-w-7xl mx-auto px-4 mb-20">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
					From the Founder
				</h2>
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<Image
							src="/about/startup/2.png"
							width={800}
							height={800}
							loading="lazy"
							alt="Founder"
							className="w-full h-auto rounded-2xl"
						/>
					</div>
					<div className="text-gray-300 leading-relaxed space-y-6 text-lg">
						<p>
							I am an eloquent individual driven by innovative ideas, passionately
							embodying the philosophy of <span className="text-[#f27d0d] font-semibold">'Do what you love, and love what you do.'</span>
						</p>
						<p>
							Committed to giving 100%, I prioritize and dedicate myself to my
							pursuits, demonstrating resilience and a commitment to empowering and
							inspiring others.
						</p>
						<p>
							Launched in May 2021, Coconut Consulting Academy (TCCA) is my
							inaugural startup dedicated to assisting global students in applying
							to American universities. With a simple and effective model, we've
							continually evolved to meet the needs of high school
							students pursuing education in the United States.
						</p>
					</div>
				</div>
			</div>

			{/* Team Section - Zigzag 2: Text Left, Image Right */}
			<div className="max-w-7xl mx-auto px-4 mb-20">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
					Our Expert Team
				</h2>
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="order-2 lg:order-1">
						<p className="text-gray-300 leading-relaxed text-lg mb-8">
							For us, a team of high-quality essay writers is indispensable as
							essays constitute the <span className="text-[#f27d0d] font-semibold">'heart and soul'</span> of every university
							application. The success of our students' application journeys is
							attributed to the guidance, advice, and thoughtful feedback provided
							by our dedicated team members.
						</p>
						<div className="grid grid-cols-2 gap-3">
							{teamMembers.map((member, index) => (
								<TeamMemberCard key={index} {...member} />
							))}
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<Image
							src="/about/startup/4.png"
							width={800}
							height={800}
							loading="lazy"
							alt="Coconut Academy Team"
							className="w-full h-auto rounded-2xl"
						/>
					</div>
				</div>
			</div>

			{/* Success Story - Zigzag 3: Image Left, Text Right */}
			<div className="max-w-7xl mx-auto px-4 mb-20">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
					Success Story
				</h2>
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<Image
							src="/about/startup/5.png"
							width={800}
							height={800}
							loading="lazy"
							alt="Success Story - Vu Bao Tin"
							className="w-full h-auto rounded-2xl"
						/>
					</div>
					<div>
						<h3 className="text-2xl font-bold text-white mb-4">Mr. Vu Bao Tin</h3>
						<p className="text-gray-300 leading-relaxed text-lg mb-6">
							Approaching TCCA in July with a determination to pursue
							higher education in the United States, Tin has secured acceptance letters
							and substantial scholarships from <span className="text-[#f27d0d] font-semibold">four prestigious American universities</span>.
						</p>

						<div className="flex gap-8 mb-6 py-4 border-y border-gray-800">
							<div>
								<p className="text-3xl font-bold text-[#f27d0d]">$37.5K</p>
								<p className="text-sm text-gray-500">Min Annual Award</p>
							</div>
							<div className="text-gray-600 self-center">to</div>
							<div>
								<p className="text-3xl font-bold text-[#f27d0d]">$45.5K</p>
								<p className="text-sm text-gray-500">Max Annual Award</p>
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
			<div className="max-w-4xl mx-auto px-4 text-center py-16 border-t border-gray-800">
				<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
					Ready to Start Your Journey?
				</h2>
				<p className="text-gray-400 mb-8">
					Join students who have achieved their dreams of studying at top American universities.
				</p>
				<a
					href="https://www.facebook.com/thecoconut.vn/"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-6 py-3 bg-[#f27d0d] hover:bg-[#e06d00] text-white font-medium rounded-full transition-colors duration-300"
				>
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
					</svg>
					Connect on Facebook
				</a>
			</div>
		</div>
	);
}
