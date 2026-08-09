import React from "react";
import Image from "next/image";
import { VscChevronRight, VscFolderOpened, VscMarkdown } from "react-icons/vsc";
import { folderColor, ITestimonialFile } from "./files";

// Line count for a rendered file: 5 frontmatter lines + 1 blank + quote lines
export const lineCount = (file: ITestimonialFile): number =>
	6 + file.quoteLines.length;

const Line = ({
	n,
	highlight,
	children,
}: {
	n: number;
	highlight?: boolean;
	children?: React.ReactNode;
}) => (
	<div className={`flex ${highlight ? "bg-[#9146FF]/10" : ""}`}>
		<span className="w-8 shrink-0 pr-3 text-right text-gray-600 select-none">
			{n}
		</span>
		<span className="flex-1 min-w-0">{children ?? " "}</span>
	</div>
);

const Editor = ({ file }: { file: ITestimonialFile | null }) => {
	if (!file) {
		return (
			<div className="h-[380px] lg:h-auto lg:flex-1 lg:min-h-0 flex items-center justify-center bg-gray-950/60">
				<div className="text-center text-gray-600 font-mono text-sm px-6">
					<p className="text-4xl mb-3 opacity-40" aria-hidden="true">
						⌘P
					</p>
					<p>Show all files — or pick one in the Explorer</p>
				</div>
			</div>
		);
	}

	let n = 0;
	const next = () => ++n;
	const color = folderColor(file.folder);

	return (
		<div className="relative h-[380px] lg:h-auto lg:flex-1 lg:min-h-0 flex flex-col bg-gray-950/60">
			{/* Reviewer portrait — floats in the empty top-right of the pane
			    instead of squeezing next to the author value */}
			<div className="absolute top-10 right-4 md:top-12 md:right-8 z-10 pointer-events-none">
				<Image
					src={file.avatar}
					alt={file.displayName}
					width={112}
					height={112}
					className="w-16 h-16 md:w-28 md:h-28 rounded-full object-cover border-4 border-[#9146FF]/40 shadow-lg shadow-[#9146FF]/20"
					loading="lazy"
				/>
			</div>
			{/* Breadcrumbs */}
			<div className="flex items-center gap-1 px-4 pt-2 font-mono text-[11px] text-gray-500 select-none">
				recommendations
				<VscChevronRight aria-hidden="true" />
				<span className="flex items-center gap-1" style={{ color }}>
					<VscFolderOpened aria-hidden="true" /> {file.folder}
				</span>
				<VscChevronRight aria-hidden="true" />
				<span className="flex items-center gap-1 text-gray-300">
					<VscMarkdown style={{ color }} aria-hidden="true" /> {file.fileName}
				</span>
			</div>

			<div className="sql-editor-metrics ide-scroll flex-1 min-h-0 overflow-y-auto">
			{/* Frontmatter wraps early so it never runs under the floating portrait */}
			<div className="pr-24 md:pr-40">
			<Line n={next()}>
				<span className="text-gray-500">---</span>
			</Line>
			<Line n={next()}>
				<span className="text-[#BF94FF]">author</span>
				<span className="text-gray-500">: </span>
				<span className="text-emerald-300">
					&quot;{file.displayName}&quot;
				</span>
			</Line>
			<Line n={next()}>
				<span className="text-[#BF94FF]">role</span>
				<span className="text-gray-500">: </span>
				<span className="text-sky-300">&quot;{file.role}&quot;</span>
			</Line>
			<Line n={next()}>
				<span className="text-[#BF94FF]">tags</span>
				<span className="text-gray-500">: [</span>
				<span className="text-amber-300">{file.tag}</span>
				<span className="text-gray-500">, </span>
				<span style={{ color }}>{file.folder}</span>
				<span className="text-gray-500">]</span>
			</Line>
			<Line n={next()}>
				<span className="text-gray-500">---</span>
			</Line>
			</div>
			<Line n={next()} />
			{file.quoteLines.map((line, i) => (
				<Line key={i} n={next()} highlight={i === 0}>
					<span className="text-[#BF94FF]/70 select-none">&gt; </span>
					<span className="text-gray-200">{line}</span>
				</Line>
			))}
			</div>
		</div>
	);
};

export default Editor;
