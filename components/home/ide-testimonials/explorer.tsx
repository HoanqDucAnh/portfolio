import React, { useState } from "react";
import {
	VscChevronDown,
	VscChevronRight,
	VscFolder,
	VscFolderOpened,
	VscMarkdown,
} from "react-icons/vsc";
import { FOLDERS, folderColor, ITestimonialFile } from "./files";

const Explorer = ({
	activeId,
	onOpen,
}: {
	activeId: string | null;
	onOpen: (file: ITestimonialFile) => void;
}) => {
	const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

	return (
		<div className="py-3 font-mono text-xs text-gray-400 h-full overflow-y-auto ide-scroll">
			<p className="px-4 mb-2 text-[10px] tracking-widest uppercase text-gray-500 select-none">
				Explorer
			</p>
			<p className="ide-tree-row px-4 py-1 flex items-center gap-1.5 text-gray-300 select-none">
				<VscChevronDown aria-hidden="true" />
				recommendations
			</p>
			{FOLDERS.map((folder) => {
				const isCollapsed = !!collapsed[folder.name];
				const color = folderColor(folder.name);
				return (
					<div key={folder.name}>
						<button
							type="button"
							onClick={() =>
								setCollapsed((prev) => ({
									...prev,
									[folder.name]: !prev[folder.name],
								}))
							}
							aria-expanded={!isCollapsed}
							className="ide-tree-row w-full text-left pl-7 pr-4 py-1 flex items-center gap-1.5 hover:text-white transition-colors duration-[10ms]"
						>
							{isCollapsed ? (
								<VscChevronRight aria-hidden="true" />
							) : (
								<VscChevronDown aria-hidden="true" />
							)}
							{isCollapsed ? (
								<VscFolder style={{ color }} aria-hidden="true" />
							) : (
								<VscFolderOpened style={{ color }} aria-hidden="true" />
							)}
							{folder.name}
							<span
								className="ml-auto text-[10px] px-1.5 rounded-full border"
								style={{
									color,
									borderColor: `${color}40`,
									background: `${color}14`,
								}}
							>
								{folder.files.length}
							</span>
						</button>
						{!isCollapsed &&
							folder.files.map((file) => {
								const isActive = file.id === activeId;
								return (
									<button
										key={file.id}
										type="button"
										onClick={() => onOpen(file)}
										className={`ide-tree-row w-full text-left pl-12 pr-4 py-1 flex items-center gap-1.5 whitespace-nowrap border-l-2 transition-colors duration-[10ms] ${
											isActive
												? "bg-gray-800/70 text-white border-[#9146FF]"
												: "border-transparent hover:text-white hover:bg-gray-800/40"
										}`}
									>
										<VscMarkdown
											style={{ color, opacity: isActive ? 1 : 0.75 }}
											aria-hidden="true"
										/>
										<span className="truncate">{file.fileName}</span>
									</button>
								);
							})}
					</div>
				);
			})}
		</div>
	);
};

export default Explorer;
