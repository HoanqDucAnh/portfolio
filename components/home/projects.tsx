// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { MENULINKS, PROJECTS, ProjectTypes } from "../../constants";
import ProjectTile from "../common/project-tile";
import { IDesktop } from "pages";
import Select, { components, DropdownIndicatorProps } from "react-select";
import Control from "react-select/dist/declarations/src/components/Control";
import { FaChevronDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { DropdownIndicator } from "react-select/dist/declarations/src/components/indicators";
import GitHubStats from "./github-stats";
import WakatimeStats from "./wakatime-stats";

const PROJECT_STYLES = {
	SECTION:
		"w-full relative select-none section-container flex-col flex py-4 justify-center",
	PROJECTS_WRAPPER: "tall:mt-8 mt- md:gap-10 gap-6 seq snap-x snap-mandatory",
};

const ProjectsSection = ({ isDesktop }: IDesktop) => {
	const targetSectionRef: MutableRefObject<HTMLDivElement> = useRef(null);
	const projectWrapperRef = useRef(null);
	const sectionTitleElementRef: MutableRefObject<HTMLDivElement> = useRef(null);

	const [projectCategory, setprojectCategory] = useState("All");
	let renderedPrjectsNumber = PROJECTS.length;
	const [willChange, setwillChange] = useState(false);
	const [horizontalAnimationEnabled, sethorizontalAnimationEnabled] =
		useState(false);
	const options = [
		{ value: "All", label: "All" },
		{ value: ProjectTypes.STATISTICSML, label: "Statistics - ML&AI" },
		{ value: ProjectTypes.BIDASHBOARDVIZ, label: "Interactive BI Dashboard" },
		{ value: ProjectTypes.ENDTOEND, label: "End-to-End Analytics" },
	];

	const scrollLeft = () => {
		const projectWrapper = projectWrapperRef.current;
		const projectWidth = projectWrapper.children[0].offsetWidth;
		projectWrapper.scrollBy({ left: -projectWidth, behavior: "smooth" });
	};

	const scrollRight = () => {
		const projectWrapper = projectWrapperRef.current;
		const projectWidth = projectWrapper.children[0].offsetWidth;
		projectWrapper.scrollBy({ left: projectWidth, behavior: "smooth" });
	};

	const customComponents = {
		DropdownIndicator: (): JSX.Element | null => null,
		// Option: (props: any) => {
		// 	return (
		// 		<components.Option {...props}>
		// 			<div style={{ display: "flex", alignItems: "center" }}>
		// 				{props.children} <FaChevronDown style={{ marginLeft: "8px" }} />
		// 			</div>
		// 		</components.Option>
		// 	);
		// },
	};

	const renderSectionTitle = (): React.ReactNode => (
		<div
			className={`flex flex-col inner-container  ${willChange ? "will-change-transform" : ""
				}`}
			ref={sectionTitleElementRef}
		>
			<h1 className="section-heading seq">My Works</h1>
			<h2 className="text-2xl md:max-w-3xl w-full seq mt-2">
				My Friday nights? Debugging ETL pipelines at 2 AM and arguing with SQL queries.
				Some call it sad, I call it living the dream
			</h2>

			<div className="w-full my-8 seq">

				{/* GitHub Stats, Wakatime Stats, and Contribution Chart - Stacked Layout */}
				<div className="flex flex-col gap-6">
					{/* GitHub Stats Component */}
					<GitHubStats />

					{/* Wakatime Stats Component */}
					<WakatimeStats />

					{/* Contribution Chart */}
					<a
						href="https://github.com/MarkPhamm"
						target="_blank"
						rel="noopener noreferrer"
						className="block w-full bg-gray-950 rounded-lg p-6 overflow-hidden cursor-pointer hover:bg-gray-900/50 transition-colors duration-200"
					>
						<h4 className="text-xl font-semibold text-gray-300 mb-4">Contribution Activity</h4>
						<img
							src="https://ghchart.rshah.org/39d353/MarkPhamm"
							alt="GitHub Contribution Calendar"
							className="w-full h-auto"
							style={{ filter: 'invert(1)', mixBlendMode: 'screen' }}
						/>
					</a>
				</div>
			</div>

			<Select
				options={options}
				unstyled={true}
				components={customComponents}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						opacity: 1,
						borderRadius: "0.5rem",
						textAlign: "left",
						width: "auto",
						minWidth: "200px",
						maxWidth: "100%",
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						backgroundColor: state.isFocused ? "#e5e7eb" : "#111827",
						color: state.isFocused ? "#111827" : "#d1d5db",
						// padding: "0.5rem",
					}),
					dropdownIndicator: (baseStyles, state) => ({
						...baseStyles,
						padding: "0",
						marginLeft: "auto",
					}),
				}}
				className="w-1/2 mt-4 article-title-sm bg-gray-900 text-gray-200"
				onChange={(option) => setprojectCategory(option.value)}
				placeholder={
					<div style={{ display: "flex", alignItems: "center" }}>
						Check out my projects' categories{" "}
						<FaChevronDown style={{ marginLeft: "8px" }} />
					</div>
				}
			/>
		</div>
	);

	const renderProjectTiles = (): React.ReactNode => {
		let projectLength = PROJECTS.filter(
			(project) => project.category === projectCategory
		).length;
		renderedPrjectsNumber = projectLength;
		return (
			<div
				ref={projectWrapperRef}
				className={`${PROJECT_STYLES.PROJECTS_WRAPPER} flex overflow-x-auto ${renderedPrjectsNumber === 1 && "w-fit"
					}`}
			>
				{PROJECTS.map((project) => {
					if (projectCategory !== "All" && project.category !== projectCategory)
						return;
					return (
						<ProjectTile
							project={project}
							key={project.name}
							animationEnabled={horizontalAnimationEnabled}
						></ProjectTile>
					);
				})}
			</div>
		);
	};
	const { ref: projectsSectionRef } = MENULINKS[1];

	return (
		<section
			ref={targetSectionRef}
			className={`${isDesktop && "min-h-screen"} ${PROJECT_STYLES.SECTION}`}
			id={projectsSectionRef}
		>
			{renderSectionTitle()}

			<div className="relative">
				<button
					onClick={scrollLeft}
					className="hover:text-gray-200 hover:bg-gray-900 absolute text-lg font-bold text-gray-900 mx-2 left-0 top-1/2 transform -translate-y-1/2 bg-secondary-color p-4 rounded-full z-10"
				>
					<FaArrowLeft />
				</button>
				{renderProjectTiles()}
				<button
					onClick={scrollRight}
					className="hover:text-gray-200 hover:bg-gray-900 absolute text-lg font-bold text-gray-900 mx-2 right-0 top-1/2 transform -translate-y-1/2 bg-secondary-color p-4 rounded-full z-10"
				>
					<FaArrowRight />
				</button>
			</div>
			{/* <div className={PROJECT_STYLES.PROJECTS_WRAPPER}> */}
			{/* <div className={`tall:mt-12 mt-6 md:gap-10 gap-6 w-full flex overflow-x-auto space-x-4`}>
				{renderProjectTiles()}
			</div> */}
			{/* <Carousel
				containerClass={`tall:mt-12 mt-6 md:gap-10 gap-6 flex overflow-x-auto space-x-4`}
				autoPlay={true}
				swipeable={false}
				draggable={false}
				showDots={false}
				infinite={true}
				partialVisible={false}
				itemClass="pr-5 rounded-sm"
			>
				{renderProjectTiles()}
			</Carousel> */}
		</section>
	);
};

export default ProjectsSection;
