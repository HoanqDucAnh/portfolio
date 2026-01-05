// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { useEffect, useRef, useState } from "react";
import {
	MENULINKS,
	NodeTypes,
	TIMELINE,
	CheckpointNode,
	ItemSize,
} from "../../constants";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop } from "pages";

interface ExperienceItem {
	date: string;
	title: string;
	subtitle: string;
	image: string;
	slideImage: string;
}

// Process TIMELINE data to extract experiences with their dates
const processTimelineData = (): ExperienceItem[] => {
	const experiences: ExperienceItem[] = [];
	let currentDate = "";

	TIMELINE.forEach((item) => {
		if (item.type === NodeTypes.CHECKPOINT) {
			const checkpoint = item as CheckpointNode;
			if (checkpoint.size === ItemSize.LARGE && !checkpoint.shouldDrawLine) {
				// This is a date entry
				currentDate = checkpoint.title;
			} else if (checkpoint.shouldDrawLine && checkpoint.slideImage) {
				// This is an experience entry
				experiences.push({
					date: currentDate,
					title: checkpoint.title,
					subtitle: checkpoint.subtitle || "",
					image: checkpoint.image || "",
					slideImage: checkpoint.slideImage,
				});
			}
		}
	});

	return experiences;
};

const TimelineSection = (_props: IDesktop) => {
	const [isMounted, setIsMounted] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);
	const experiencesRef = useRef<(HTMLDivElement | null)[]>([]);

	const experiences = processTimelineData();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Animate experience cards on scroll
	useEffect(() => {
		if (!isMounted || !sectionRef.current) return;

		const triggers: ScrollTrigger[] = [];

		experiencesRef.current.forEach((el) => {
			if (!el) return;

			const trigger = ScrollTrigger.create({
				trigger: el,
				start: "top 85%",
				onEnter: () => {
					gsap.to(el, {
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease: "power2.out",
					});
				},
				once: true,
			});
			triggers.push(trigger);

			// Set initial state
			gsap.set(el, { opacity: 0, y: 50 });
		});

		return () => {
			triggers.forEach((t) => t.kill());
		};
	}, [isMounted, experiences.length]);

	const renderSectionTitle = (): React.ReactNode => (
		<div className="flex flex-col mb-16">
			<h1 className="section-heading seq">Timeline</h1>
			<h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
				A quick recap of proud moments
			</h2>
		</div>
	);

	const renderExperienceCard = (
		experience: ExperienceItem,
		index: number
	): React.ReactNode => {
		const isEven = index % 2 === 0;

		return (
			<div
				key={`exp-${index}`}
				ref={(el) => (experiencesRef.current[index] = el)}
				className="relative mb-16 last:mb-0"
			>
				{/* Timeline connector */}
				<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:-translate-x-1/2">
					{/* Dot */}
					<div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 border-2 border-yellow-400 rounded-full z-10"></div>
				</div>

				{/* Content wrapper */}
				<div
					className={`flex flex-col md:flex-row items-start gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
						}`}
				>
					{/* Date and Info side */}
					<div
						className={`w-full md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
							} pl-8 md:pl-0`}
					>
						<span className="inline-block text-yellow-400 text-lg font-semibold mb-2">
							{experience.date}
						</span>
						<h3
							className="text-xl md:text-2xl font-bold text-white mb-3"
							dangerouslySetInnerHTML={{ __html: experience.title }}
						/>
						<p className="text-gray-300 text-base leading-relaxed">
							{experience.subtitle}
						</p>
					</div>

					{/* Image side */}
					<div
						className={`w-full md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"
							} pl-8 md:pl-0`}
					>
						<div className="relative group">
							<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-800 transform transition-transform duration-300 group-hover:scale-[1.02]">
								<Image
									src={experience.slideImage}
									alt={experience.title.replace(/<[^>]*>/g, "")}
									layout="fill"
									objectFit="cover"
									className="transition-transform duration-500 group-hover:scale-105"
									priority
									unoptimized
								/>
								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
							{/* Decorative border */}
							<div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<section
			ref={sectionRef}
			className="w-full relative select-none section-container py-8 flex flex-col"
			id={MENULINKS[3].ref}
		>
			{renderSectionTitle()}

			<div className="relative">
				{/* Main timeline line */}
				<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/50 via-gray-700 to-gray-700/50 transform md:-translate-x-1/2"></div>

				{/* Experience cards */}
				<div className="relative">
					{experiences.map((experience, index) =>
						renderExperienceCard(experience, index)
					)}
				</div>

				{/* End dot */}
				<div className="absolute left-0 md:left-1/2 bottom-0 transform md:-translate-x-1/2">
					<div className="w-4 h-4 bg-gray-900 border-2 border-gray-600 rounded-full"></div>
				</div>
			</div>
		</section>
	);
};

export default TimelineSection;
