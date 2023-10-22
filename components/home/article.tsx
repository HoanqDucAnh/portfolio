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

const ArticleSection = () => {
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
			<p className="section-title-sm seq">Articles</p>
			<h1 className="section-heading seq mt-2">My articles</h1>
			<h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
				bla bla bla bla bla bla bla{" "}
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
			{/* {renderBackgroundPattern()} */}
			<div
				className={SKILL_STYLES.SECTION}
				id={MENULINKS[3].ref}
				ref={targetSection}
			>
				<div className="flex flex-col skills-wrapper">
					{renderSectionTitle()}
					<div className="grid grid-cols-1 pt-10 gap-4">
						<div className="col-span-1">
							<div className="grid grid-cols-7">
								<div className="col-span-3 seq">
									<div>
										<h3 className="article-title-sm mb-4 seq">
											User Streaks (Classis Gaps and Islands)
										</h3>
										<p className="article-text-sm seq">
											Find the top 3 users with the longest continuous streak of
											visiting the platform as of August 10, 2022, using gap and
											island analysis, CASE WHEN statements, ROW_NUMBER(),
											RANK(), and CTEs.
										</p>
										<p className="article-min-read seq text-right">
											12 mins read
										</p>
									</div>
								</div>
								<div className="col-start-4 col-span-2 hidden lg:grid m-auto seq">
									<Image
										src="/article/streak.jpg"
										alt="React"
										width={300}
										height={170}
										className="img-cus"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 pt-10 gap-4 mt-5">
						<div className="col-span-1">
							<div className="grid grid-cols-7">
								<div className="col-start-2 col-span-3 seq">
									<div>
										<h3 className="article-title-sm mb-4 seq">
											User Streaks (Classis Gaps and Islands)
										</h3>
										<p className="article-text-sm seq">
											Find the top 3 users with the longest continuous streak of
											visiting the platform as of August 10, 2022, using gap and
											island analysis, CASE WHEN statements, ROW_NUMBER(),
											RANK(), and CTEs.
										</p>
										<p className="article-min-read seq text-right">
											12 mins read
										</p>
									</div>
								</div>
								<div className="col-start-5 col-span-2 hidden lg:grid m-auto seq">
									<Image
										src="/article/streak.jpg"
										alt="React"
										width={300}
										height={170}
										className="img-cus"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 pt-10 gap-4 mt-5">
						<div className="col-span-1">
							<div className="grid grid-cols-7">
								<div className="col-span-3 seq">
									<div>
										<h3 className="article-title-sm mb-4 seq">
											User Streaks (Classis Gaps and Islands)
										</h3>
										<p className="article-text-sm seq">
											Find the top 3 users with the longest continuous streak of
											visiting the platform as of August 10, 2022, using gap and
											island analysis, CASE WHEN statements, ROW_NUMBER(),
											RANK(), and CTEs.
										</p>
										<p className="article-min-read seq text-right">
											12 mins read
										</p>
									</div>
								</div>
								<div className="col-start-4 col-span-2 hidden lg:grid m-auto seq">
									<Image
										src="/article/streak.jpg"
										alt="React"
										width={300}
										height={170}
										className="img-cus"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 pt-10 gap-4 mt-5">
						<div className="col-span-1">
							<div className="grid grid-cols-7">
								<div className="col-start-2 col-span-3 seq">
									<div>
										<h3 className="article-title-sm mb-4 seq">
											User Streaks (Classis Gaps and Islands)
										</h3>
										<p className="article-text-sm seq">
											Find the top 3 users with the longest continuous streak of
											visiting the platform as of August 10, 2022, using gap and
											island analysis, CASE WHEN statements, ROW_NUMBER(),
											RANK(), and CTEs.
										</p>
										<p className="article-min-read seq text-right">
											12 mins read
										</p>
									</div>
								</div>
								<div className="col-start-5 col-span-2 hidden lg:grid m-auto seq">
									<Image
										src="/article/streak.jpg"
										alt="React"
										width={300}
										height={170}
										className="img-cus"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ArticleSection;
