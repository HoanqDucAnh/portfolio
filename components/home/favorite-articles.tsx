import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FAV_ARTICLES, IFavoriteRead } from "../../constants";
import { trackEvent, setTag } from "../../utils/clarity";

// Substack-style list row: title + description + meta on the left, cover art on
// the right, divider between rows. Cover falls back to the publication avatar
// (`image`) until a real article cover is provided. Plain <img> (not next/image)
// for the same akamai/Netlify reason as the reads cards.
const ArticleRow = ({ article }: { article: IFavoriteRead }) => {
	const cover = article.cover || article.image;

	return (
		<div className="flex items-start gap-5 md:gap-8 py-7 first:pt-0">
			<div className="flex flex-col min-w-0 flex-grow">
				<h4 className="font-bold text-white group-hover:text-[#BF94FF] transition-colors duration-[10ms] leading-snug text-xl md:text-2xl">
					{article.title}
				</h4>
				<p className="text-sm md:text-base text-gray-400 leading-relaxed mt-2 line-clamp-2">
					{article.description}
				</p>
				<div className="flex items-center gap-2 mt-4 text-xs font-medium tracking-wide text-gray-400 uppercase">
					{article.date && <span>{article.date}</span>}
					{article.date && <span aria-hidden>·</span>}
					<span>{article.author}</span>
					<span className="hidden sm:inline-flex ml-1 normal-case tracking-normal text-[#BF94FF] bg-[#9146FF]/15 border border-[#9146FF]/20 rounded-full px-2.5 py-0.5">
						{article.category}
					</span>
				</div>
			</div>
			{cover && (
				<div className="flex-none w-24 h-24 md:w-44 md:h-32 rounded-xl overflow-hidden border border-white/10 bg-gray-800">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={cover}
						alt={article.title}
						className="w-full h-full object-cover transition-transform duration-[10ms] group-hover:scale-105"
						loading="lazy"
					/>
				</div>
			)}
		</div>
	);
};

const FavoriteArticles = ({
	items = FAV_ARTICLES,
	heading = "Favorite Articles",
	subheading = "Single posts that stuck with me — worth reading start to finish",
	id = "fav-articles",
	className = "py-8 md:py-12",
}: {
	items?: IFavoriteRead[];
	heading?: string;
	subheading?: string;
	id?: string;
	className?: string;
}) => {
	const sectionRef = useRef<HTMLElement>(null);
	const rowsRef = useRef<(HTMLAnchorElement | null)[]>([]);

	useEffect(() => {
		if (!sectionRef.current) return;

		const triggers: ScrollTrigger[] = [];

		rowsRef.current.forEach((el, idx) => {
			if (!el) return;
			gsap.set(el, { opacity: 0, y: 40 });

			const trigger = ScrollTrigger.create({
				trigger: el,
				start: "top 90%",
				once: true,
				onEnter: () => {
					gsap.to(el, {
						opacity: 1,
						y: 0,
						duration: 0.6,
						delay: idx * 0.1,
						ease: "power2.out",
					});
				},
			});
			triggers.push(trigger);
		});

		const heading = sectionRef.current.querySelector(".section-heading");
		if (heading) {
			gsap.set(heading, { clipPath: "inset(0 100% 0 0)" });
			triggers.push(
				ScrollTrigger.create({
					trigger: heading,
					start: "top 85%",
					once: true,
					onEnter: () => {
						gsap.to(heading, {
							clipPath: "inset(0 0% 0 0)",
							duration: 0.8,
							ease: "power2.inOut",
						});
					},
				})
			);
		}

		return () => {
			triggers.forEach((t) => t.kill());
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className={`w-full relative select-none section-container ${className} flex flex-col`}
			id={id}
		>
			<div className="flex flex-col mb-8">
				<h2 className="section-heading seq">{heading}</h2>
				<h3 className="text-2xl md:max-w-2xl w-full seq mt-2 text-gray-200">
					{subheading}
				</h3>
			</div>

			<div className="flex flex-col divide-y divide-gray-800/70">
				{items.map((article, index) => (
					<a
						key={index}
						ref={(el) => (rowsRef.current[index] = el)}
						href={article.url}
						target="_blank"
						rel="noreferrer"
						className="group block transition-colors duration-[10ms]"
						onClick={() => {
							trackEvent("article_click", { article_title: article.title });
							setTag("article_domain", article.domain);
						}}
					>
						<ArticleRow article={article} />
					</a>
				))}
			</div>
		</section>
	);
};

export default FavoriteArticles;
