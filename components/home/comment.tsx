import { COMMENTS } from "../../constants";
import React, {
	useEffect,
	useLayoutEffect,
	useState,
	useCallback,
	useRef,
} from "react";
import { IDesktop } from "pages";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { gsap } from "gsap";
import { trackEvent } from "../../utils/clarity";
import { initHeadingWipe, prefersReducedMotion } from "../../utils/motion";

// useLayoutEffect on the client (animates before paint, no flash); useEffect
// during SSR to avoid the React warning.
const useIsoLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

const CommentTile = (props: {
	text: string;
	currentPosition: string;
	authorName: string;
	avatar: string;
	isActive: boolean;
}) => {
	return (
		<div
			className={`transition-all duration-[10ms] ${props.isActive
					? "opacity-100 translate-x-0 scale-100"
					: "opacity-0 translate-x-8 scale-[0.98]"
				}`}
			style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
		>
			<div className={`relative p-5 sm:p-8 md:p-10 mx-auto max-w-3xl min-h-[400px] sm:min-h-[440px] md:min-h-[470px] flex flex-col justify-center rounded-2xl border transition-all duration-[10ms] overflow-hidden ${props.isActive
					? "bg-gray-900/90 backdrop-blur-sm border-[#9146FF]/30 shadow-lg shadow-[#9146FF]/5"
					: "bg-gray-900 border-gray-800"
				}`}>
				<FaQuoteLeft className="absolute top-4 left-6 text-6xl text-[#9146FF] opacity-10" />

				<div className="flex flex-col">
					<div className="flex justify-center mb-6">
						<Image
							src={props.avatar}
							alt={props.authorName}
							width={128}
							height={128}
							className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#9146FF]/30 shadow-lg shadow-[#9146FF]/10 object-cover"
							loading="lazy"
						/>
					</div>

					<p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8 italic text-left">
						&ldquo;{props.text}&rdquo;
					</p>

					<div className="text-right self-end">
						<p className="text-lg font-bold text-white">{props.authorName}</p>
						<p className="text-sm text-gray-400">{props.currentPosition}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const FILTERS = [
	{ label: "Insurify", value: "insurify" },
	{ label: "Lazard", value: "lazard" },
	{ label: "Mentorship", value: "mentorship" },
	{ label: "Academia", value: "academia" },
];

const CommentSection = ({ }: IDesktop) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [activeFilter, setActiveFilter] = useState("all");
	const sectionRef = useRef<HTMLElement>(null);
	const slidesRef = useRef<HTMLDivElement>(null);
	// +1 = navigating forward, -1 = backward; drives the slide direction
	const dirRef = useRef(1);
	const isFirstRender = useRef(true);

	const filteredComments =
		activeFilter === "all"
			? COMMENTS
			: COMMENTS.filter((comment) => comment.company === activeFilter);

	const totalSlides = filteredComments.length;

	const goToNext = useCallback(() => {
		dirRef.current = 1;
		setCurrentIndex((prev) => (prev + 1) % totalSlides);
	}, [totalSlides]);

	const goToPrev = useCallback(() => {
		dirRef.current = -1;
		setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
	}, [totalSlides]);

	const goToSlide = useCallback((index: number) => {
		setCurrentIndex((prev) => {
			dirRef.current = index >= prev ? 1 : -1;
			return index;
		});
	}, []);

	const handleNav = (direction: "prev" | "next" | "dot", slide?: number) => {
		trackEvent("testimonial_nav", { direction, ...(slide !== undefined && { slide }) });
	};

	const handleFilter = (filter: string) => {
		const nextFilter = activeFilter === filter ? "all" : filter;
		trackEvent("testimonial_filter", { filter: nextFilter });
		setActiveFilter(nextFilter);
		setCurrentIndex(0);
	};

	// Auto-play functionality. currentIndex in the deps resets the 6s timer on
	// manual navigation, keeping it in sync with the countdown bar (which also
	// remounts per slide).
	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			goToNext();
		}, 6000); // Change slide every 6 seconds

		return () => clearInterval(interval);
	}, [isPaused, goToNext, currentIndex]);

	// Directional slide choreography: GSAP animates the incoming slide so the
	// carousel glides instead of hard-cutting (the Tailwind transitions here are
	// intentionally 10ms site-wide).
	useIsoLayoutEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		if (prefersReducedMotion() || !slidesRef.current) return;

		const active = slidesRef.current.querySelector(".slide-active");
		if (!active) return;

		const tween = gsap.fromTo(
			active,
			{ x: dirRef.current * 60, opacity: 0, scale: 0.97 },
			{ x: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
		);
		return () => {
			tween.kill();
		};
	}, [currentIndex, activeFilter]);

	// Cinematic heading wipe, matching Skills/Timeline
	useEffect(() => {
		const wipe = initHeadingWipe(sectionRef.current);
		return () => wipe?.kill();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="w-full relative select-none section-container flex-col flex py-8 md:py-12 justify-center"
			id="comments"
		>
			<div className="flex flex-col inner-container">
				<h2 className="section-heading seq">What Others Say</h2>
				<h3 className="text-2xl md:max-w-2xl w-full seq mt-2 mb-8">
					Proof I'm not just making this up
				</h3>

				{/* Carousel Container with Navigation */}
				<div
					className="relative"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					onKeyDown={(e) => {
						if (e.key === "ArrowLeft") goToPrev();
						if (e.key === "ArrowRight") goToNext();
					}}
					tabIndex={0}
					role="region"
					aria-label="Testimonial carousel"
				>
					{/* Navigation Arrows */}
					<button
						onClick={() => { handleNav("prev"); goToPrev(); }}
						className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-[10ms] shadow-lg"
						aria-label="Previous testimonial"
					>
						<FaChevronLeft className="text-lg" />
					</button>

					<button
						onClick={() => { handleNav("next"); goToNext(); }}
						className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-[10ms] shadow-lg"
						aria-label="Next testimonial"
					>
						<FaChevronRight className="text-lg" />
					</button>

					{/* Slides Container */}
					<div className="relative mb-4 overflow-hidden" ref={slidesRef}>
						{filteredComments.map((comment, index) => (
							<div
								key={comment.author}
								className={index === currentIndex ? "slide-active relative" : "absolute inset-0 pointer-events-none"}
							>
								<CommentTile
									text={comment.comment}
									authorName={comment.author}
									currentPosition={comment.position}
									avatar={comment.avatar}
									isActive={index === currentIndex}
								/>
							</div>
						))}
					</div>
				</div>

				{/* Mobile Navigation Arrows */}
				<div className="flex md:hidden justify-center gap-4 mt-4">
					<button
						onClick={() => { handleNav("prev"); goToPrev(); }}
						className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-[10ms] shadow-lg"
						aria-label="Previous testimonial"
					>
						<FaChevronLeft className="text-lg" />
					</button>
					<button
						onClick={() => { handleNav("next"); goToNext(); }}
						className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-[10ms] shadow-lg"
						aria-label="Next testimonial"
					>
						<FaChevronRight className="text-lg" />
					</button>
				</div>

				{/* Slide Counter */}
				<div className="text-center text-sm text-gray-400 mt-4">
					{currentIndex + 1} / {totalSlides}
				</div>

				{/* Navigation Dots */}
				<div className="flex justify-center gap-3 mt-3">
					{filteredComments.map((comment, index) => (
						<button
							key={comment.author}
							onClick={() => { handleNav("dot", index); goToSlide(index); }}
							className={`w-3.5 h-3.5 rounded-full transition-all duration-[10ms] ${index === currentIndex
									? "bg-[#9146FF] w-10"
									: "bg-gray-600 hover:bg-gray-500"
								}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>

				{/* Autoplay countdown — fills over the 6s cycle, freezes while hovered */}
				<div className="mt-4 max-w-md mx-auto w-full">
					<div className="h-1 bg-gray-800 rounded-full overflow-hidden">
						<div
							key={`${activeFilter}-${currentIndex}-${isPaused ? "p" : "r"}`}
							className="carousel-countdown h-full w-full bg-gradient-to-r from-[#9146FF] to-[#BF94FF] rounded-full"
							style={{ animationPlayState: isPaused ? "paused" : "running" }}
						/>
					</div>
				</div>

				{/* Filter Buttons */}
				<div className="flex flex-wrap justify-center gap-3 mt-6">
					{FILTERS.map((filter) => (
						<button
							key={filter.value}
							onClick={() => handleFilter(filter.value)}
							className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-[10ms] ${activeFilter === filter.value
									? "bg-[#9146FF] border-[#9146FF] text-white"
									: "bg-gray-900 border-gray-700 text-gray-300 hover:border-[#9146FF]/50 hover:text-white"
								}`}
						>
							{filter.label}
						</button>
					))}
				</div>

				<div className="mt-6 flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
					<a
						href="https://www.linkedin.com/in/minhbphamm/details/recommendations/"
						className="text-[#BF94FF] text-md underline hover:text-white transition-colors"
						target="_blank"
						rel="noreferrer"
						onClick={() => trackEvent("recommendations_click", { source: "linkedin" })}
					>
						View all on LinkedIn &rarr;
					</a>
					<span className="text-gray-600" aria-hidden="true">·</span>
					<a
						href="https://drive.google.com/file/d/1EyMtIZU1_ohN9i2lJ7sGvAiPnxX7vVAv/view?usp=sharing"
						className="text-[#BF94FF] text-md underline hover:text-white transition-colors"
						target="_blank"
						rel="noreferrer"
						onClick={() => trackEvent("recommendations_click", { source: "lazard_pdf" })}
					>
						Lazard reference letter (PDF)
					</a>
				</div>
			</div>
		</section>
	);
};

export default CommentSection;
