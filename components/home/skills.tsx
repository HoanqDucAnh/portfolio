// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
	SECTION:
		"w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
	SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SkillsSection = () => {
	const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
	const [willChange, setwillChange] = useState(false);

	const initRevealAnimation = (
		targetSection: MutableRefObject<HTMLDivElement>
	): ScrollTrigger => {
		const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		revealTl.from(
			targetSection.current.querySelectorAll(".seq"),
			{ opacity: 0, duration: 0.5, stagger: 0.5 },
			"<"
		);

		return ScrollTrigger.create({
			trigger: targetSection.current.querySelector(".skills-wrapper"),
			start: "100px bottom",
			end: `center center`,
			animation: revealTl,
			scrub: 0,
			onToggle: (self) => setwillChange(self.isActive),
		});
	};

	useEffect(() => {
		const revealAnimationRef = initRevealAnimation(targetSection);

		return revealAnimationRef.kill;
	}, [targetSection]);

	const renderSectionTitle = (): React.ReactNode => (
		<div className="flex flex-col">
			<p className="section-title-sm seq">SKILLS</p>
			<h1 className="section-heading seq mt-2">My Skills</h1>
			<h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
				I like to take responsibility to craft aesthetic user experience using
				modern frontend architecture.{" "}
			</h2>
		</div>
	);

	const render2ndSectionTitle = (): React.ReactNode => (
		<div className="flex flex-col">
			<h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
				I like to take responsibility to craft aesthetic user experience using
				modern frontend architecture.{" "}
			</h2>
		</div>
	);

	const renderBackgroundPattern = (): React.ReactNode => (
		<>
			<div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
				<Image
					src="/pattern-r.svg"
					loading="lazy"
					height={700}
					width={320}
					alt="pattern"
				/>
			</div>
			<div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
				<Image
					src="/pattern-l.svg"
					loading="lazy"
					height={335}
					width={140}
					alt="pattern"
				/>
			</div>
		</>
	);

	const renderSkillColumn = (
		title: string,
		skills: string[]
	): React.ReactNode => (
		<>
			<h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
			<div
				className={`flex flex-wrap seq ${
					willChange ? "will-change-opacity" : ""
				}`}
			>
				{skills.map((skill) => (
					<Image
						key={skill}
						src={`/skills/1st/${skill}.svg`}
						alt={skill}
						width={76}
						height={76}
						className="skill"
					/>
				))}
			</div>
		</>
	);

	const renderSQLStats = (title: string, skills: string[]): React.ReactNode => (
		<>
			<h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
			<div
				className={`flex flex-wrap seq ${
					willChange ? "will-change-opacity" : ""
				}`}
			>
				{skills.map((skill) => (
					<Image
						key={skill}
						src={`/skills/2nd/${skill}.svg`}
						alt={skill}
						width={200}
						height={200}
						className="skill"
					/>
				))}
			</div>
		</>
	);

	const renderTextRow = (title: string, skills: string[]): React.ReactNode => (
		<>
			<h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
			<div
				className={`flex flex-col seq ${
					willChange ? "will-change-opacity" : ""
				}`}
			>
				{skills.map((skill) => (
					<p key={skill} className="skill ">
						{skill}
					</p>
				))}
			</div>
		</>
	);

	return (
		<section className="relative">
			{renderBackgroundPattern()}
			<div
				className={SKILL_STYLES.SECTION}
				id={MENULINKS[2].ref}
				ref={targetSection}
			>
				<div className="flex flex-col skills-wrapper">
					{renderSectionTitle()}
					<div className="flex flex-wrap mt-10">
						<div className="mr-6 mb-6">
							{renderSkillColumn("Technical", SKILLS.technical)}
						</div>
						<div>
							{renderSkillColumn("Visualization", SKILLS.visualization)}
						</div>
					</div>
					<div className="flex flex-wrap mt-10">
						<div className="mr-6 mb-6">
							{renderSkillColumn("Statistics & Data Science", SKILLS.statistic)}
						</div>
						<div>{renderSkillColumn("Other tools", SKILLS.other)}</div>
					</div>
					<div className="mt-10">
						{renderSkillColumn("Clouds", SKILLS.clouds)}
					</div>
					{render2ndSectionTitle()}
					<div className="mt-10">
						{renderSQLStats(
							"Stratascratch & Hackerrank & Leetcode Stats (SQL) ",
							SKILLS.sqlprob
						)}
					</div>
					<div className="mt-10">
						<h3 className={SKILL_STYLES.SKILL_TITLE}>My stats</h3>
						<div
							className={`flex flex-wrap seq ${
								willChange ? "will-change-opacity" : ""
							}`}
						>
							<Image
								key="stat"
								src={`/skills/2nd/stats.png`}
								alt="stat"
								width={800}
								height={400}
								className="skill"
							/>
						</div>
					</div>
					<div className="mt-10">
						{renderTextRow("Relevant courseworks", SKILLS.relevant)}
					</div>
					<div className="mt-10">
						{renderTextRow("Certifications", SKILLS.certified)}
					</div>
					{/* <div className="flex flex-row mt-10">
						<div className="mr-6 mb-6">
							{renderTextRow("Relevant courseworks", SKILLS.relevant)}
						</div>
						<div>{renderTextRow("Certifications", SKILLS.certified)}</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
