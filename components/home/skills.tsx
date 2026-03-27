import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop } from "pages";
import {
	TbChartBar,
	TbDatabase,
	TbCpu,
	TbGitBranch,
	TbActivity,
	TbCloud,
	TbPlug,
	TbSettings,
} from "react-icons/tb";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
	"Business Intelligence": TbChartBar,
	"Warehouse and Lakehouse": TbDatabase,
	"Data Processing": TbCpu,
	"Orchestration": TbGitBranch,
	"Streaming": TbActivity,
	"Cloud (AWS)": TbCloud,
	"Data Integration": TbPlug,
	"DevOps": TbSettings,
};

const Tooltip = memo(({ text, children }: { text: string; children: React.ReactNode }) => {
	return (
		<div className="group/tip relative inline-block">
			{children}
			<div className="absolute invisible group-hover/tip:visible opacity-0 group-hover/tip:opacity-100 transition-opacity duration-[10ms] bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm bg-white text-gray-800 rounded-lg shadow-lg whitespace-nowrap z-10">
				{text}
				<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
			</div>
		</div>
	);
});

Tooltip.displayName = "Tooltip";

const SKILL_STYLES = {
	SECTION:
		"w-full relative select-none mb-6 section-container py-12 flex flex-col justify-center",
	SKILL_TITLE: "section-title-sm seq",
};

const PNG_SKILLS = [
	"Apache Iceberg", "Delta Lake", "Trino", "Flink", "S3", "EC2", "Lambda",
	"MWAA", "VPC", "Spark Streaming", "Kinesis Firehose", "PubSub", "Looker",
	"Hadoop", "Hive",
];

const SkillsSection = ({ isDesktop }: IDesktop) => {
	const targetSection = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!cardsRef.current) return;

		const cards = cardsRef.current.querySelectorAll(".skill-card");

		cards.forEach((card, i) => {
			gsap.fromTo(
				card,
				{ opacity: 0, y: 40 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					delay: i * 0.1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: card,
						start: "top 85%",
						toggleActions: "play none none none",
					},
				}
			);
		});

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	}, []);

	const renderSectionTitle = useCallback(
		(): React.ReactNode => (
			<div className="flex flex-col">
				<h1 className="section-heading">My Skills</h1>
				<h2 className="text-2xl md:max-w-2xl w-full mt-2">
					Technical skills & tools I use to deliver data-driven solutions
				</h2>
			</div>
		),
		[]
	);

	const renderBackgroundPattern = useCallback(
		(): React.ReactNode => (
			<>
				<div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
					<Image
						src="/pattern-r.svg"
						height={700}
						width={320}
						alt="pattern"
						loading="lazy"
					/>
				</div>
				<div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
					<Image
						src="/pattern-l.svg"
						height={335}
						width={140}
						alt="pattern"
						loading="lazy"
					/>
				</div>
			</>
		),
		[]
	);

	const getSkillImagePath = useCallback((skill: string): string => {
		return `/skills/1st/${skill}.${PNG_SKILLS.includes(skill) ? "png" : "svg"}`;
	}, []);

	const renderSkillColumn = useCallback(
		(title: string, skills: string[]): React.ReactNode => {
			const Icon = CATEGORY_ICONS[title];
			return (
				<div
					key={title}
					className="skill-card p-6 rounded-2xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm hover:border-[#9146FF]/30 transition-all duration-[10ms] relative overflow-hidden"
				>
					{/* Gradient accent line at top */}
					<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9146FF] via-[#BF94FF] to-[#9146FF] opacity-40" />

					{/* Category header with icon */}
					<div className="flex items-center gap-2 mb-4">
						{Icon && (
							<div className="w-5 h-5 rounded bg-[#9146FF]/10 flex items-center justify-center flex-shrink-0">
								<Icon className="w-3 h-3 text-[#BF94FF]" />
							</div>
						)}
						<h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
					</div>

					<div className="grid grid-cols-5 gap-2 sm:gap-3 lg:gap-3 xl:gap-4 2xl:gap-5">
						{skills.map((skill) => (
							<div key={skill}>
								<Tooltip text={skill}>
									<div className="flex flex-col items-center rounded-xl p-2 hover:bg-[#9146FF]/5 transition-all duration-[10ms] hover:shadow-lg hover:shadow-[#9146FF]/5 group/skill">
										<Image
											src={getSkillImagePath(skill)}
											alt={skill}
											width={76}
											height={76}
											className="skill hover:scale-[1.15] transition-transform duration-[10ms] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32"
											loading="lazy"
										/>
										<span className="text-xs text-gray-400 mt-1 text-center truncate max-w-[7rem] group-hover/skill:text-[#BF94FF] transition-colors duration-[10ms]">
											{skill}
										</span>
										{/* Purple underline on hover */}
										<div className="w-0 group-hover/skill:w-full h-[2px] bg-[#9146FF]/40 rounded-full transition-all duration-[10ms] mt-0.5" />
									</div>
								</Tooltip>
							</div>
						))}
					</div>
				</div>
			);
		},
		[getSkillImagePath]
	);

	const SKILL_GROUPS = [
		["Business Intelligence", "Warehouse and Lakehouse"],
		["Data Processing", "Orchestration"],
		["Streaming", "Cloud (AWS)"],
		["Data Integration", "DevOps"],
	];

	return (
		<section className="relative">
			{renderBackgroundPattern()}
			<div
				className={SKILL_STYLES.SECTION}
				id={MENULINKS[1].ref}
				ref={targetSection}
			>
				<div className="flex flex-col" ref={cardsRef}>
					{renderSectionTitle()}

					{SKILL_GROUPS.map((group, i) => (
						<div
							key={i}
							className="grid lg:grid-cols-2 md:grid-cols-1 mt-10 gap-8 xl:gap-12 2xl:gap-16"
						>
							{group.map((title) => renderSkillColumn(title, (SKILLS as any)[title]))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
