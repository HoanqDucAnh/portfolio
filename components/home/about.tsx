// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutSection = () => {
	const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
	const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

	const [willChange, setwillChange] = useState(false);

	const initAboutAnimation = (
		quoteRef: MutableRefObject<HTMLDivElement>,
		targetSection: MutableRefObject<HTMLDivElement>
	): ScrollTrigger => {
		const timeline = gsap.timeline({
			defaults: { ease: Linear.easeNone, duration: 0.1 },
		});
		timeline
			.fromTo(
				quoteRef.current.querySelector(".about-1"),
				{ opacity: 0.2 },
				{ opacity: 1 }
			)
			.to(quoteRef.current.querySelector(".about-1"), {
				opacity: 0.2,
				delay: 0.5,
			})
			.fromTo(
				quoteRef.current.querySelector(".about-2"),
				{ opacity: 0.2 },
				{ opacity: 1 },
				"<"
			)
			.to(quoteRef.current.querySelector(".about-2"), {
				opacity: 0.2,
				delay: 1,
			});

		const scrollTriggerInstance = ScrollTrigger.create({
			trigger: targetSection.current,
			start: "center 65%",
			end: "center top",
			scrub: 0,
			animation: timeline,
			onToggle: (self) => setwillChange(self.isActive),
		});
		return scrollTriggerInstance;
	};

	useEffect(() => {
		const aboutScrollTriggerInstance = initAboutAnimation(
			quoteRef,
			targetSection
		);

		return aboutScrollTriggerInstance.kill;
	}, [quoteRef, targetSection]);

	const renderQuotes = (): React.ReactNode => (
		<h1 ref={quoteRef} className="font-medium text-2xl sm:text-3xl md:text-5xl">
			<span
				className={`about-1 leading-tight ${
					willChange ? "will-change-opacity" : ""
				}`}
			>
				As an analytics engineering enthusiast, I aim to connect
				complex data to strategic insights,
				<span className="text-[#f27d0d]">
					{" "}
					enabling data-driven decisions to drive tangible business outcomes.
				</span>{" "}
			</span>
		</h1>
	);

	return (
		<section
			className={`tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container`}
			ref={targetSection}
		>
			{renderQuotes()}
		</section>
	);
};

export default AboutSection;
