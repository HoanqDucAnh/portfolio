import Image from "next/image";
import React, { useState } from "react";
import { IProject, ProjectTypes } from "../../constants";
import ProjectModal from "./project-modal";

const getCategoryLabel = (category: string): string => {
	switch (category) {
		case ProjectTypes.ENDTOEND:
			return "Data Pipeline";
		case ProjectTypes.BIDASHBOARDVIZ:
			return "BI & Dashboard";
		case ProjectTypes.STATISTICSML:
			return "ML & Statistics";
		case ProjectTypes.CLOUDINFRA:
			return "Cloud & Infra";
		case ProjectTypes.LEARNING:
			return "Learning";
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
		case ProjectTypes.CLOUDINFRA:
			return "bg-orange-600 text-white";
		case ProjectTypes.LEARNING:
			return "bg-green-600 text-white";
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
	const [showModal, setShowModal] = useState(false);

	const {
		name,
		tech,
		image,
		category,
		url,
		gradient: [stop1, stop2],
	} = project;

	return (
		<>
			<div
				className="group block cursor-pointer"
				style={{
					animationDelay: `${index * 50}ms`,
				}}
				onClick={() => setShowModal(true)}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setShowModal(true);
					}
				}}
			>
				<div className="relative h-full rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-[#9146FF]/40 hover:shadow-[0_20px_40px_-12px_rgba(145,70,255,0.15)] hover:-translate-y-2">
					{/* Image Container */}
					<div className="relative aspect-[16/10] overflow-hidden">
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
							loading="eager"
						/>
						{/* Category Badge */}
						<div className="absolute top-4 left-4 z-20">
							<span
								className={`px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg ${getCategoryColor(category)}`}
							>
								{getCategoryLabel(category)}
							</span>
						</div>
						{/* Expand Icon */}
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
										d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7"
									/>
								</svg>
							</div>
						</div>
					</div>

					{/* Content */}
					<div className="p-5">
						{/* Project Name */}
						<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#BF94FF] transition-colors duration-300 line-clamp-2">
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
									className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-800/80 border border-gray-700/50 transition-colors duration-200 hover:border-[#9146FF]/30 hover:bg-gray-700/80"
								>
									<Image
										src={`/projects/tech/${techItem}.${["S3", "EC2", "Lambda", "MWAA", "Terraform", "Dagster", "Flink", "Apache Iceberg", "MinIO", "Spark", "Trino", "ClickHouse", "FastAPI"].includes(techItem) ? "png" : "svg"}`}
										alt={techItem}
										height={18}
										width={18}
										className="opacity-80"
									/>
									<span className="text-xs text-gray-300">
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
			</div>

			{showModal && (
				<ProjectModal
					project={project}
					onClose={() => setShowModal(false)}
				/>
			)}
		</>
	);
};

export default ProjectTile;
