import Image from "next/image";
import React from "react";
import { IProject, ProjectTypes } from "../../constants";

const getCategoryLabel = (category: string): string => {
	switch (category) {
		case ProjectTypes.ENDTOEND:
			return "Data Pipeline";
		case ProjectTypes.BIDASHBOARDVIZ:
			return "BI & Dashboard";
		case ProjectTypes.STATISTICSML:
			return "ML & Statistics";
		default:
			return category;
	}
};

const getCategoryColor = (category: string): string => {
	switch (category) {
		case ProjectTypes.ENDTOEND:
			return "bg-blue-600 text-white";
		case ProjectTypes.BIDASHBOARDVIZ:
			return "bg-gray-900 text-orange-400";
		case ProjectTypes.STATISTICSML:
			return "bg-purple-600 text-white";
		default:
			return "bg-gray-600 text-white";
	}
};

const ProjectTile = ({
	project,
	index = 0,
}: {
	project: IProject;
	index?: number;
}) => {
	const {
		name,
		tech,
		image,
		category,
		url,
		gradient: [stop1, stop2],
	} = project;

	return (
		<a
			href={url || "#"}
			target="_blank"
			rel="noreferrer"
			className="group block"
			style={{
				animationDelay: `${index * 50}ms`,
			}}
		>
			<div className="relative h-full rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 transition-all duration-500 hover:border-gray-600 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-2">
				{/* Image Container */}
				<div className="relative h-52 md:h-60 overflow-hidden">
					{/* Gradient Overlay */}
					<div
						className="absolute inset-0 opacity-60 z-10"
						style={{
							background: `linear-gradient(135deg, ${stop1}90 0%, ${stop2}90 100%)`,
						}}
					/>
					<Image
						src={image}
						alt={name}
						layout="fill"
						objectFit="cover"
						className="transition-transform duration-500 group-hover:scale-110"
						unoptimized
						priority
					/>
					{/* Category Badge */}
					<div className="absolute top-4 left-4 z-20">
						<span
							className={`px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg ${getCategoryColor(category)}`}
						>
							{getCategoryLabel(category)}
						</span>
					</div>
					{/* External Link Icon */}
					{url && (
						<div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
								<svg
									className="w-4 h-4 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</div>
						</div>
					)}
				</div>

				{/* Content */}
				<div className="p-5">
					{/* Project Name */}
					<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
						{name}
					</h3>

					{/* Description */}
					{project.description && (
						<p className="text-sm text-gray-400 mb-3 line-clamp-2 leading-relaxed">
							{project.description}
						</p>
					)}

					{/* Tech Stack */}
					<div className="flex flex-wrap gap-2">
						{tech.slice(0, 5).map((techItem) => (
							<div
								key={techItem}
								className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-800/80 border border-gray-700/50"
							>
								<Image
									src={`/projects/tech/${techItem}.svg`}
									alt={techItem}
									height={18}
									width={18}
									className="opacity-80"
									unoptimized
								/>
								<span className="text-xs text-gray-400">
									{techItem}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Bottom gradient line */}
				<div
					className="absolute bottom-0 left-0 right-0 h-1 opacity-30 group-hover:opacity-100 transition-opacity duration-300"
					style={{
						background: `linear-gradient(90deg, ${stop1} 0%, ${stop2} 100%)`,
					}}
				/>
			</div>
		</a>
	);
};

export default ProjectTile;
