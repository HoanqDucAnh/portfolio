// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { MENULINKS, SKILLS, COURSES } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState, useCallback, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop } from "pages";

// Optimized CSS-based tooltip component
const Tooltip = memo(({ text, children }: { text: string; children: React.ReactNode }) => {
	return (
		<div className="group relative inline-block">
			{children}
			<div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm bg-white text-gray-800 rounded-lg shadow-lg whitespace-nowrap z-10">
				{text}
				<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
			</div>
		</div>
	);
});

Tooltip.displayName = 'Tooltip';

const SKILL_STYLES = {
	SECTION:
		"w-full relative select-none mb-6 section-container py-4 flex flex-col justify-center",
	SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SkillsSection = ({ isDesktop }: IDesktop) => {
	const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	// Simplified and more performant animation
	const initRevealAnimation = useCallback(() => {
		if (!targetSection.current) return;

		return ScrollTrigger.create({
			trigger: targetSection.current,
			start: "top 80%",
			end: "bottom 20%",
			onEnter: () => setIsVisible(true),
			onLeave: () => setIsVisible(false),
			onEnterBack: () => setIsVisible(true),
			onLeaveBack: () => setIsVisible(false),
		});
	}, []);

	useEffect(() => {
		const revealAnimationRef = initRevealAnimation();
		return () => revealAnimationRef?.kill();
	}, [initRevealAnimation]);

	const renderSectionTitle = useCallback((): React.ReactNode => (
		<div className="flex flex-col">
			<p className="section-title-sm">SKILLS</p>
			<h1 className="section-heading mt-2">My Skills</h1>
			<h2 className="text-2xl md:max-w-2xl w-full mt-2">
				Technical skills and tools I use to deliver data-driven solutions
			</h2>
		</div>
	), []);



	const renderBackgroundPattern = useCallback((): React.ReactNode => (
		<>
			<div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
				<Image
					src="/pattern-r.svg"
					loading="lazy"
					height={700}
					width={320}
					alt="pattern"
					priority={false}
				/>
			</div>
			<div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
				<Image
					src="/pattern-l.svg"
					loading="lazy"
					height={335}
					width={140}
					alt="pattern"
					priority={false}
				/>
			</div>
		</>
	), []);

	// Helper function to get the correct file extension for each skill
	const getSkillImagePath = useCallback((skill: string): string => {
		// All skills now use SVG format
		return `/skills/1st/${skill}.svg`;
	}, []);

	// Memoized skill column render for better performance
	const renderSkillColumn = useCallback((
		title: string,
		skills: string[]
	): React.ReactNode => (
		<div key={title} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
			<h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
			<div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
				{skills.map((skill, index) => (
					<div
						key={skill}
						className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
						style={{ transitionDelay: `${index * 50}ms` }}
					>
						<Tooltip text={skill}>
							<Image
								src={getSkillImagePath(skill)}
								alt={skill}
								width={76}
								height={76}
								className="skill hover:scale-110 transition-transform duration-200 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32"
								loading="lazy"
								placeholder="blur"
								blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCA3NiA3NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijc2IiBoZWlnaHQ9Ijc2IiBmaWxsPSIjZjNmNGY2Ii8+Cjwvc3ZnPgo="
							/>
						</Tooltip>
					</div>
				))}
			</div>
		</div>
	), [isVisible, getSkillImagePath]);



	return (
		<section className="relative">
			{renderBackgroundPattern()}
			<div
				className={SKILL_STYLES.SECTION}
				id={MENULINKS[2].ref}
				ref={targetSection}
			>
				<div className="flex flex-col">
					<div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						{renderSectionTitle()}
					</div>

					<div className="grid lg:grid-cols-2 md:grid-cols-1 mt-10 gap-8 xl:gap-12 2xl:gap-16">
						{renderSkillColumn("Business Intelligence", SKILLS["Business Intelligence"])}
						{renderSkillColumn("Data Warehousing", SKILLS["Data Warehousing"])}
					</div>

					<div className="grid lg:grid-cols-2 md:grid-cols-1 mt-10 gap-8 xl:gap-12 2xl:gap-16">
						{renderSkillColumn("Data Processing and Transformation", SKILLS["Data Processing and Transformation"])}
						{renderSkillColumn("Orchestration", SKILLS["Orchestration"])}
					</div>
					<div className="grid lg:grid-cols-2 md:grid-cols-1 mt-10 gap-8 xl:gap-12 2xl:gap-16">
						{renderSkillColumn("Data Integration", SKILLS["Data Integration"])}
						{renderSkillColumn("DevOps", SKILLS["DevOps"])}
					</div>

					{/* <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-10 gap-8">
						{renderSkillColumn("Framework", COURSES.sysplan)}
						{renderSkillColumn("Other tools", SKILLS.other)}
					</div>
					
					<div className="mt-10">
						{renderSkillColumn("Clouds", SKILLS.clouds)}
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
