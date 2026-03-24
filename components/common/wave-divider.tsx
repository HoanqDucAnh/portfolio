import React from "react";

interface WaveDividerProps {
	flip?: boolean;
	className?: string;
}

const WaveDivider = ({ flip = false, className = "" }: WaveDividerProps) => {
	return (
		<div
			className={`w-full pointer-events-none select-none ${flip ? "rotate-180" : ""} ${className}`}
			aria-hidden="true"
		>
			<svg
				viewBox="0 0 1440 60"
				preserveAspectRatio="none"
				className="w-full h-[40px] md:h-[60px] block"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient id={`wave-grad-${flip ? "flip" : "normal"}`} x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="rgba(145, 70, 255, 0)" />
						<stop offset="30%" stopColor="rgba(145, 70, 255, 0.12)" />
						<stop offset="50%" stopColor="rgba(191, 148, 255, 0.15)" />
						<stop offset="70%" stopColor="rgba(145, 70, 255, 0.12)" />
						<stop offset="100%" stopColor="rgba(145, 70, 255, 0)" />
					</linearGradient>
				</defs>
				<path
					d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 L1440,60 L0,60 Z"
					fill={`url(#wave-grad-${flip ? "flip" : "normal"})`}
				/>
				<path
					d="M0,35 C360,50 720,15 1080,35 C1260,45 1380,30 1440,35"
					fill="none"
					stroke="rgba(145, 70, 255, 0.15)"
					strokeWidth="1"
				/>
			</svg>
		</div>
	);
};

export default WaveDivider;
