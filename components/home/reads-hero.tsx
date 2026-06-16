import React, { useEffect, useState } from "react";

// Typographic, photo-free hero for the Reads page. Mirrors the entrance
// choreography of the Passion page hero (PassionComponent → PassionHero) — a
// staggered fade/translate-up driven by a `loaded` flag — but keeps the site's
// default purple theme and needs no background image. A soft purple glow sits
// behind the text so the dark hero reads as deliberate rather than empty.
const ReadsHero = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoaded(true), 100);
		return () => clearTimeout(timer);
	}, []);

	const reveal = (delay: string) =>
		`transition-all duration-1000 ${delay} ${
			loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
		}`;

	return (
		<section
			className="w-full relative select-none section-container pt-32 md:pt-40 pb-14 md:pb-20 overflow-hidden"
			id="reads-hero"
		>
			{/* Decorative purple glow — pure depth, hidden from a11y tree */}
			<div
				aria-hidden
				className="pointer-events-none absolute -top-24 -left-16 w-[28rem] h-[28rem] rounded-full bg-[#9146FF]/20 blur-[120px]"
			/>

			<div className="relative z-10 flex flex-col">
				<p
					className={`text-[#BF94FF] text-sm md:text-base font-medium tracking-[0.25em] uppercase mb-4 ${reveal(
						"delay-200"
					)}`}
				>
					Off the Clock
				</p>
				<h1
					className={`text-gradient w-fit font-bold leading-[1.1] pb-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${reveal(
						"delay-300"
					)}`}
				>
					What I&apos;m Reading
				</h1>
				<div
					className={`h-1 mt-6 rounded-full bg-gradient-to-r from-[#9146FF] to-[#BF94FF] transition-[width,opacity] duration-700 delay-500 ease-out ${
						loaded ? "w-24 opacity-100" : "w-0 opacity-0"
					}`}
				/>
				<p
					className={`text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mt-7 ${reveal(
						"delay-700"
					)}`}
				>
					The blogs, essays, and ideas I keep coming back to — from data
					engineering to philosophy and the gloriously unconventional.
				</p>
			</div>
		</section>
	);
};

export default ReadsHero;
