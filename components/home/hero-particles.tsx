import React from "react";

interface Particle {
	width: number;
	height: number;
	top: string;
	left: string;
	opacity: number;
	animationDuration: string;
	animationDelay: string;
	shape: "circle" | "square" | "hexagon";
	borderRadius: string;
}

// Static array — no Math.random() to avoid SSR hydration mismatch
const PARTICLES: Particle[] = [
	{ width: 6, height: 6, top: "8%", left: "12%", opacity: 0.06, animationDuration: "18s", animationDelay: "0s", shape: "circle", borderRadius: "50%" },
	{ width: 14, height: 14, top: "15%", left: "78%", opacity: 0.04, animationDuration: "22s", animationDelay: "2s", shape: "square", borderRadius: "2px" },
	{ width: 8, height: 8, top: "32%", left: "5%", opacity: 0.07, animationDuration: "20s", animationDelay: "4s", shape: "circle", borderRadius: "50%" },
	{ width: 20, height: 20, top: "45%", left: "88%", opacity: 0.03, animationDuration: "25s", animationDelay: "1s", shape: "square", borderRadius: "3px" },
	{ width: 10, height: 10, top: "60%", left: "22%", opacity: 0.05, animationDuration: "19s", animationDelay: "3s", shape: "circle", borderRadius: "50%" },
	{ width: 5, height: 5, top: "72%", left: "65%", opacity: 0.08, animationDuration: "16s", animationDelay: "5s", shape: "circle", borderRadius: "50%" },
	{ width: 16, height: 16, top: "20%", left: "42%", opacity: 0.04, animationDuration: "24s", animationDelay: "2s", shape: "square", borderRadius: "2px" },
	{ width: 7, height: 7, top: "85%", left: "35%", opacity: 0.06, animationDuration: "21s", animationDelay: "0s", shape: "circle", borderRadius: "50%" },
	{ width: 12, height: 12, top: "50%", left: "55%", opacity: 0.04, animationDuration: "23s", animationDelay: "4s", shape: "square", borderRadius: "2px" },
	{ width: 4, height: 4, top: "38%", left: "92%", opacity: 0.09, animationDuration: "17s", animationDelay: "1s", shape: "circle", borderRadius: "50%" },
	{ width: 18, height: 18, top: "10%", left: "55%", opacity: 0.03, animationDuration: "26s", animationDelay: "3s", shape: "hexagon", borderRadius: "50%" },
	{ width: 9, height: 9, top: "68%", left: "8%", opacity: 0.05, animationDuration: "20s", animationDelay: "6s", shape: "circle", borderRadius: "50%" },
	{ width: 6, height: 6, top: "78%", left: "82%", opacity: 0.07, animationDuration: "18s", animationDelay: "2s", shape: "square", borderRadius: "1px" },
	{ width: 11, height: 11, top: "25%", left: "30%", opacity: 0.04, animationDuration: "22s", animationDelay: "5s", shape: "circle", borderRadius: "50%" },
	{ width: 8, height: 8, top: "55%", left: "45%", opacity: 0.06, animationDuration: "19s", animationDelay: "1s", shape: "circle", borderRadius: "50%" },
];

const HeroParticles = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
			{PARTICLES.map((p, i) => (
				<div
					key={i}
					className="absolute animate-particle-float"
					style={{
						width: p.width,
						height: p.height,
						top: p.top,
						left: p.left,
						opacity: p.opacity,
						borderRadius: p.borderRadius,
						background: p.shape === "square"
							? "rgba(191, 148, 255, 0.6)"
							: "rgba(145, 70, 255, 0.6)",
						animationDuration: p.animationDuration,
						animationDelay: p.animationDelay,
					}}
				/>
			))}
		</div>
	);
};

export default HeroParticles;
