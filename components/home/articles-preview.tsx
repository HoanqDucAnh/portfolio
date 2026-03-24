import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ARTICLES, SOCIAL_LINKS } from "../../constants";

const ArticlesPreview = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

	useEffect(() => {
		if (!sectionRef.current) return;

		const triggers: ScrollTrigger[] = [];

		cardsRef.current.forEach((el, idx) => {
			if (!el) return;
			gsap.set(el, { opacity: 0, y: 40 });

			const trigger = ScrollTrigger.create({
				trigger: el,
				start: "top 85%",
				onEnter: () => {
					gsap.to(el, {
						opacity: 1,
						y: 0,
						duration: 0.6,
						delay: idx * 0.15,
						ease: "power2.out",
					});
				},
				once: true,
			});
			triggers.push(trigger);
		});

		return () => {
			triggers.forEach((t) => t.kill());
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="w-full relative select-none section-container py-12 flex flex-col"
			id="articles"
		>
			<div className="flex flex-col mb-10">
				<h1 className="section-heading seq">Articles</h1>
				<h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
					Thoughts on data engineering & analytics
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{ARTICLES.map((article, index) => (
					<a
						key={index}
						ref={(el) => (cardsRef.current[index] = el)}
						href={article.url}
						target="_blank"
						rel="noreferrer"
						className="group block rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-[#9146FF]/40 hover:shadow-[0_20px_40px_-12px_rgba(145,70,255,0.15)] hover:-translate-y-2"
					>
						<div className="relative aspect-[16/9] overflow-hidden bg-gray-800 flex items-center justify-center">
							<img
								src={article.thumbnail}
								alt={article.title}
								className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
							<span className="absolute bottom-3 left-4 text-xs text-gray-400 font-medium">
								{article.date}
							</span>
						</div>
						<div className="p-5">
							<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#BF94FF] transition-colors duration-300">
								{article.title}
							</h3>
							<p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
								{article.excerpt}
							</p>
						</div>
					</a>
				))}
			</div>

			<div className="mt-8 flex justify-center">
				<a
					href={SOCIAL_LINKS.substack}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-2 text-[#9146FF] hover:text-[#BF94FF] transition-colors duration-300 text-base font-medium"
				>
					Read more on Substack
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</section>
	);
};

export default ArticlesPreview;
