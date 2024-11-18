import { COMMENTS } from "../../constants";
import React, { useState } from "react";

const CommentTile = (props: {
	text: string;
	currentPosition: string;
	authorName: string;
	rcmType: String;
}) => {
	return (
		<div className="p-4 m-4 border rounded-lg shadow-md w-1/6 justify-between flex flex-col text-center bg-gray-900">
			<p className="text-sm font-semibold">{props.text}</p>
			<div className="flex items-center">
				<div>
					<p className="text-sm font-medium">{props.authorName}</p>
					<p className="text-sm text-gray-500">{props.currentPosition}</p>
				</div>
			</div>
		</div>
	);
};

const CommentSection = () => {
	return (
		<div className="flex flex-row justify-center">
			{COMMENTS.map(
				(comment: {
					comment: string;
					author: string;
					position: string;
					recomendationType: String;
				}) => (
					<CommentTile
						key={comment.author}
						text={comment.comment}
						authorName={comment.author}
						currentPosition={comment.position}
						rcmType={comment.recomendationType}
					/>
				)
			)}
		</div>
	);
};

export default CommentSection;
