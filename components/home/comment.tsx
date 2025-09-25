import { COMMENTS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { IDesktop } from "pages";

const CommentTile = (props: {
	text: string;
	currentPosition: string;
	authorName: string;
	rcmType: String;
	avatar: string;
}) => {
	return (
		<div className="relative p-6 m-4 border rounded-lg shadow-lg w-1/3 flex flex-col bg-gray-200 text-gray-800">
			<div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
				<img
					src={props.avatar}
					alt="avatar"
					className="w-20 h-20 rounded-full border-4 border-white shadow-md"
				/>
			</div>
			<div className="mt-12 flex-grow">
				<p className="text-lg font-semibold text-justify">{props.text}</p>
			</div>
			<div className="mt-6 flex justify-center">
				<div className="text-center">
					<p className="text-md font-bold">{props.authorName}</p>
					<p className="text-sm text-gray-500">{props.currentPosition}</p>
				</div>
			</div>
		</div>
	);
};

const CommentSection = ({ isDesktop }: IDesktop) => {
	const PROJECT_STYLES = {
		SECTION:
			"w-full relative select-none section-container flex-col flex py-2 justify-center",
	};
	const [willChange, setwillChange] = useState(false);
	const [horizontalAnimationEnabled, sethorizontalAnimationEnabled] =
		useState(false);

	const targetSectionRef: MutableRefObject<HTMLDivElement> = useRef(null);
	const projectWrapperRef = useRef(null);
	const sectionTitleElementRef: MutableRefObject<HTMLDivElement> = useRef(null);

	return (
		<section
			ref={targetSectionRef}
			className={`${isDesktop && "min-h-screen"} ${PROJECT_STYLES.SECTION}`}
			id={"comments"}
		>
			<div
				className={`flex flex-col inner-container  ${willChange ? "will-change-transform" : ""
					}`}
				ref={sectionTitleElementRef}
			>
				<h2 className="section-heading seq mb-12">What Others Say</h2>
				<div className="flex flex-row justify-center">
					{COMMENTS.map((comment, index) => (
						<CommentTile
							key={index}
							text={comment.comment}
							authorName={comment.author}
							currentPosition={comment.position}
							rcmType={comment.recomendationType}
							avatar={comment.avatar}
						/>
					))}
				</div>
				<div className="mt-4 flex justify-end">
					<a
						href="https://drive.google.com/file/d/1EyMtIZU1_ohN9i2lJ7sGvAiPnxX7vVAv/view?usp=sharing"
						className="text-[#f27d0d] text-md underline hover:text-white"
						target="_blank"
						rel="noreferrer"
					>
						Learn more &rarr;
					</a>
				</div>
			</div>
		</section>
	);
};

export default CommentSection;
