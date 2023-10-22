// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { MENULINKS, SKILLS, COURSES } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CountUp from "react-countup";
import { IDesktop } from "pages";
import { stat } from "fs";
import styled from "styled-components";

const TooltipContainer = styled.div`
	position: relative;
	display: inline-block;
`;

const TooltipText = styled.span`
	visibility: hidden;
	width: 150px;
	background-color: #fff;
	color: #101827;
	text-align: center;
	border-radius: 6px;
	padding: 5px;
	position: absolute;
	z-index: 1;
	bottom: 125%;
	left: 50%;
	margin-left: -60px;
	opacity: 0;
	transition: opacity 0.3s;

	${TooltipContainer}:hover & {
		visibility: visible;
		opacity: 1;
	}
`;

interface TooltipProps {
	text: string;
	children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
	return (
		<TooltipContainer>
			{children}
			<TooltipText>{text}</TooltipText>
		</TooltipContainer>
	);
};

const SKILL_STYLES = {
	SECTION:
		"w-full relative select-none mb-12 section-container py-12 flex flex-col justify-center",
	SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SkillsSection = ({ isDesktop }: IDesktop) => {
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

	const render2ndSectionTitle = (title: string): React.ReactNode => (
		<div className="flex flex-col">
			<h2 className="text-2xl md:max-w-2xl w-full seq mt-2">{title}</h2>
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
					<Tooltip text={skill} key={skill}>
						<Image
							key={skill}
							src={`/skills/1st/${skill}.svg`}
							alt={skill}
							width={76}
							height={76}
							className="skill"
						/>
					</Tooltip>
				))}
			</div>
		</>
	);

	const renderSQLStats = (title: string, skill: string[]): React.ReactNode => (
		<>
			<h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
			<div
				className={`flex flex-col seq ${
					willChange ? "will-change-opacity" : ""
				}`}
			>
				{skill.map((skill) => (
					<h1 className="stats-number" key={skill}>
						{skill}
					</h1>
				))}
			</div>
		</>
	);

	const renderCourse = (title: string, skills: string[]): React.ReactNode => (
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
					{render2ndSectionTitle("uhmmm")}
					<div className="grid lg:grid-cols-2 md:grid-cols-1 mt-10 gap-2">
						<div className="col-span-1">
							<Image
								key="stat"
								src={`/skills/2nd/stats.png`}
								alt="stat"
								width={700}
								height={350}
								className="skill"
							/>
							{/* </div> */}
						</div>
						<div className="col-span-1">
							{renderSQLStats(
								"Stratascratch & Hackerrank & Leetcode Stats (SQL) ",
								SKILLS.sqlprob
							)}
						</div>
					</div>
					{render2ndSectionTitle("Certifications")}
					{/* <SkillTimeLine isDesktop={isDesktop} /> */}
					{render2ndSectionTitle("Relevant courseworks")}
					<div className="flex flex-wrap mt-10">
						<div className="mr-6 mb-6">
							{renderSkillColumn("Business Intelligence", COURSES.bi)}
						</div>
						<div>
							{renderSkillColumn("Database Management System", COURSES.dbms)}
						</div>
					</div>
					<div className="flex flex-wrap mt-10">
						<div className="mr-6 mb-6">
							{renderSkillColumn("Statistical Modelling", COURSES.stats)}
						</div>
						<div>{renderSkillColumn("System planning", COURSES.sysplan)}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
