import { gsap, Linear } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const QuoteSection2 = () => {
	const quoteRef = useRef<HTMLDivElement>(null);
	const targetSection = useRef<HTMLDivElement>(null);

	const [willChange, setwillChange] = useState(false);

	const initQuoteAnimation = (
		quoteRef: React.RefObject<HTMLDivElement | null>,
		targetSection: React.RefObject<HTMLDivElement | null>
	): ScrollTrigger => {
		if (!quoteRef.current || !targetSection.current) return ScrollTrigger.create({});
		const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		timeline
			.from(quoteRef.current, { opacity: 0, y: 30, duration: 2 })
			.to(quoteRef.current.querySelector(".text-strong"), {
				backgroundPositionX: "100%",
				duration: 1,
			});

		return ScrollTrigger.create({
			trigger: targetSection.current,
			start: "center bottom",
			end: "center center",
			scrub: 0,
			animation: timeline,
			onToggle: (self) => setwillChange(self.isActive),
		});
	};

	useEffect(() => {
		const quoteAnimationRef = initQuoteAnimation(quoteRef, targetSection);

		return quoteAnimationRef.kill;
	}, [quoteRef, targetSection]);

	return (
		<section className="w-full relative select-none" ref={targetSection}>
			<div className="tall:py-30 py-36 section-container">
				<div
					ref={quoteRef}
					className={`text-center ${willChange ? "will-change-opacity" : ""}`}
				>
					<h1 className="font-medium text-4xl md:text-5xl">
						Analytics isn't just my job - it's my{" "}
						<span className="text-strong font-bold">obsession</span>
					</h1>
					<p className="mt-4 text-xl md:text-2xl text-gray-400">
						scroll down and <span className="text-[#9146FF] font-bold">see for yourself</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default QuoteSection2;
