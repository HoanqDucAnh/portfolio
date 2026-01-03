import React, { memo } from "react";
import { FaClock, FaCode } from "react-icons/fa";
import { SiWakatime } from "react-icons/si";

const WAKATIME_USERNAME = "MarkPham";

const WakatimeStats = memo(() => {
	return (
		<div className="w-full bg-gray-950 rounded-lg p-6 hover:bg-gray-900/50 transition-all duration-500">
			<a
				href={`https://wakatime.com/@${WAKATIME_USERNAME}`}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 mb-6 group"
			>
				<SiWakatime className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
				<span className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors">
					Wakatime Stats
				</span>
				<span className="text-gray-500 text-sm">@{WAKATIME_USERNAME}</span>
			</a>

			{/* Wakatime Coding Activity */}
			<div className="space-y-6">
				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
						<FaClock className="text-3xl text-blue-400" />
						<div>
							<p className="text-sm text-gray-400">Coding Activity</p>
							<p className="text-lg font-semibold text-white">Since Sep 2024</p>
						</div>
					</div>
					<div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
						<FaCode className="text-3xl text-green-400" />
						<div>
							<p className="text-sm text-gray-400">Tracking</p>
							<p className="text-lg font-semibold text-white">All Projects</p>
						</div>
					</div>
				</div>

				{/* Wakatime Badge and Stats */}
				<div className="bg-gray-800/30 rounded-lg p-4">
					<h4 className="text-sm font-medium text-gray-400 mb-4">Total Coding Time</h4>
					<a
						href={`https://wakatime.com/@${WAKATIME_USERNAME}`}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block"
					>
						<img
							src={`https://wakatime.com/badge/user/894cf02a-9974-42d0-acde-603cdd98fe17.svg?style=for-the-badge`}
							alt="Wakatime Total Coding Time"
							className="h-10"
							loading="lazy"
						/>
					</a>
					<p className="text-xs text-gray-500 mt-3">
						Tracked across all IDEs and projects
					</p>
				</div>
			</div>
		</div>
	);
});

WakatimeStats.displayName = "WakatimeStats";

export default WakatimeStats;
