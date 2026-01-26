import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { MENULINKS, PROJECTS, ProjectTypes } from "../../constants";
import ProjectTile from "../common/project-tile";
import { IDesktop } from "pages";
import GitHubStats from "./github-stats";
import WakatimeStats from "./wakatime-stats";

const CATEGORIES = [
	{ value: "All", label: "All" },
	{ value: ProjectTypes.ENDTOEND, label: "Data Pipeline" },
	{ value: ProjectTypes.BIDASHBOARDVIZ, label: "BI & Dashboards" },
	{ value: ProjectTypes.STATISTICSML, label: "ML & Statistics" },
];

const ProjectsSection = ({ isDesktop }: IDesktop) => {
	const targetSectionRef: MutableRefObject<HTMLDivElement> = useRef(null);
	const [activeCategory, setActiveCategory] = useState("All");
	const [isAnimating, setIsAnimating] = useState(false);

	const handleCategoryChange = (category: string) => {
		if (category === activeCategory) return;
		setIsAnimating(true);
		setTimeout(() => {
			setActiveCategory(category);
			setIsAnimating(false);
		}, 150);
	};

	const filteredProjects = PROJECTS.filter(
		(project) =>
			activeCategory === "All" || project.category === activeCategory
	);

	const renderSectionTitle = (): React.ReactNode => (
		<div className="flex flex-col inner-container">
			<h1 className="section-heading seq">My Works</h1>
			<h2 className="text-xl md:text-2xl md:max-w-3xl w-full seq mt-2 text-gray-300">
				My Friday nights? Debugging ETL pipelines at 2 AM and arguing with SQL
				queries. Some call it sad, I call it living the dream
			</h2>
		</div>
	);

	const renderStats = (): React.ReactNode => (
		<div className="w-full my-8 seq relative z-10">
			<div className="flex flex-col gap-6">
				<GitHubStats />
				<WakatimeStats />
			</div>
		</div>
	);

	const renderCategoryFilters = (): React.ReactNode => (
		<div className="flex flex-wrap gap-3 mt-8 mb-10">
			{CATEGORIES.map((category) => {
				const count = category.value === "All"
					? PROJECTS.length
					: PROJECTS.filter((p) => p.category === category.value).length;
				return (
					<button
						key={category.value}
						onClick={() => handleCategoryChange(category.value)}
						className={`
							px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
							${
								activeCategory === category.value
									? "bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/20"
									: "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50"
							}
						`}
					>
						{category.label}
						<span className={`ml-2 text-xs ${activeCategory === category.value ? "opacity-80" : "opacity-60"}`}>
							({count})
						</span>
					</button>
				);
			})}
		</div>
	);

	const renderProjectGrid = (): React.ReactNode => (
		<div
			className={`
				grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8
				transition-opacity duration-150
				${isAnimating ? "opacity-0" : "opacity-100"}
			`}
		>
			{filteredProjects.map((project, index) => (
				<ProjectTile
					project={project}
					key={`${project.name}-${activeCategory}`}
					index={index}
				/>
			))}
		</div>
	);

	const { ref: projectsSectionRef } = MENULINKS[1];

	return (
		<section
			ref={targetSectionRef}
			className={`${isDesktop && "min-h-screen"} w-full relative select-none section-container flex-col flex py-8 justify-center`}
			id={projectsSectionRef}
			style={{
				zIndex: 10,
				isolation: "isolate",
			}}
		>
			{renderSectionTitle()}
			{renderCategoryFilters()}
			{renderProjectGrid()}
			{renderStats()}
		</section>
	);
};

export default ProjectsSection;
