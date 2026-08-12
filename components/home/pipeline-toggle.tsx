import React from "react";

export type PipelineVariant = "ins" | "il";

const OPTIONS: { id: PipelineVariant; label: string }[] = [
	{ id: "ins", label: "Insurify" },
	{ id: "il", label: "Infinite Lambda" },
];

// Pill toggle between the two pipeline architectures (reads-filter pattern).
// Disabled until the diagram's entrance has drawn and while a morph is running.
const PipelineToggle = ({
	variant,
	disabled,
	onChange,
}: {
	variant: PipelineVariant;
	disabled: boolean;
	onChange: (variant: PipelineVariant) => void;
}) => {
	const basePill =
		"flex-none text-xs md:text-sm font-medium px-4 py-1.5 rounded-full border transition-all duration-[10ms] cursor-pointer disabled:cursor-default";

	return (
		<div
			className="flex items-center justify-center gap-2 md:gap-2.5 mb-4 md:mb-6"
			role="group"
			aria-label="Pipeline architecture view"
		>
			{OPTIONS.map(({ id, label }) => (
				<button
					key={id}
					type="button"
					aria-pressed={variant === id}
					disabled={disabled}
					onClick={() => {
						if (variant !== id) onChange(id);
					}}
					className={`${basePill} ${
						variant === id
							? "bg-[#9146FF] border-[#9146FF] text-white"
							: "border-gray-700 text-gray-400 hover:border-[#9146FF]/40 hover:text-gray-200"
					}`}
				>
					{label}
				</button>
			))}
		</div>
	);
};

export default PipelineToggle;
