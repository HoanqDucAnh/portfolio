import { COMMENTS } from "../../constants";
import React, { useEffect, useState, useCallback } from "react";
import { IDesktop } from "pages";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const CommentTile = (props: {
	text: string;
	currentPosition: string;
	authorName: string;
	avatar: string;
	isActive: boolean;
}) => {
	return (
		<div
			className={`absolute inset-0 transition-all duration-500 ease-in-out ${
				props.isActive
					? "opacity-100 translate-x-0 visible"
					: "opacity-0 translate-x-8 pointer-events-none invisible"
			}`}
		>
			<div className={`relative p-8 md:p-10 mx-auto max-w-3xl rounded-2xl border transition-all duration-500 ${
				props.isActive
					? "bg-gray-900/90 backdrop-blur-sm border-[#9146FF]/30 shadow-lg shadow-[#9146FF]/5"
					: "bg-gray-900 border-gray-800"
			}`}>
				<FaQuoteLeft className="absolute top-4 left-6 text-6xl text-[#9146FF] opacity-10" />

				<div className="flex flex-col">
					<div className="flex justify-center mb-6">
						<Image
							src={props.avatar}
							alt={props.authorName}
							width={96}
							height={96}
							className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#9146FF]/30 shadow-lg shadow-[#9146FF]/10 object-cover"
							priority
							unoptimized
						/>
					</div>

					<p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 italic text-left">
						"{props.text}"
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

const CommentSection = ({}: IDesktop) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const totalSlides = COMMENTS.length;

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % totalSlides);
	}, [totalSlides]);

	const goToPrev = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
	}, [totalSlides]);

	const goToSlide = useCallback((index: number) => {
		setCurrentIndex(index);
	}, []);

	// Auto-play functionality
	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			goToNext();
		}, 6000); // Change slide every 6 seconds

		return () => clearInterval(interval);
	}, [isPaused, goToNext]);

	return (
		<section
			className="w-full relative select-none section-container flex-col flex py-8 justify-center"
			id="comments"
		>
			<div className="flex flex-col inner-container">
				<h2 className="section-heading seq mb-8">What Others Say</h2>

				{/* Carousel Container with Navigation */}
				<div
					className="relative"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					{/* Navigation Arrows - Outside overflow container */}
					<button
						onClick={goToPrev}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 shadow-lg"
						aria-label="Previous testimonial"
					>
						<FaChevronLeft className="text-lg" />
					</button>

					<button
						onClick={goToNext}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 shadow-lg"
						aria-label="Next testimonial"
					>
						<FaChevronRight className="text-lg" />
					</button>

					{/* Slides Container */}
					<div className="relative min-h-[620px]">
						{COMMENTS.map((comment, index) => (
							<CommentTile
								key={index}
								text={comment.comment}
								authorName={comment.author}
								currentPosition={comment.position}
								avatar={comment.avatar}
								isActive={index === currentIndex}
							/>
						))}
					</div>
				</div>

				{/* Navigation Dots */}
				<div className="flex justify-center gap-3 mt-6">
					{COMMENTS.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentIndex
									? "bg-[#9146FF] w-8"
									: "bg-gray-600 hover:bg-gray-500"
							}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>

				{/* Progress Bar */}
				<div className="mt-4 max-w-md mx-auto w-full">
					<div className="h-1 bg-gray-800 rounded-full overflow-hidden">
						<div
							className="h-full bg-[#9146FF] transition-all duration-300"
							style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
						/>
					</div>
				</div>

				<div className="mt-6 flex justify-center">
					<a
						href="https://drive.google.com/file/d/1EyMtIZU1_ohN9i2lJ7sGvAiPnxX7vVAv/view?usp=sharing"
						className="text-[#9146FF] text-md underline hover:text-white transition-colors"
						target="_blank"
						rel="noreferrer"
					>
						View all recommendations &rarr;
					</a>
				</div>
			</div>
		</section>
	);
};

export default CommentSection;
