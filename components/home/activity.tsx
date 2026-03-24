import React from "react";
import GitHubStats from "./github-stats";
import WakatimeStats from "./wakatime-stats";

const ActivitySection = () => {
	return (
		<section
			className="w-full relative select-none section-container py-12 flex flex-col"
			id="activity"
		>
			<div className="flex flex-col mb-10">
				<h1 className="section-heading seq">My Activity</h1>
				<h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
					Coding stats & contributions
				</h2>
			</div>

			<div className="flex flex-col gap-8">
				<GitHubStats />
				<WakatimeStats />
			</div>
		</section>
	);
};

export default ActivitySection;
