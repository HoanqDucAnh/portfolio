// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Script from "next/script";
import React from "react";
import { GTAG } from "../../constants";

const Scripts = React.memo(() => {
	const handleJumpToFirst = () => {
		// Logic to jump to the first section
		// You can use scrollIntoView or any other method to achieve this
		window.scrollTo(0, 0);
	};

	return (
		<>
			<button
				onClick={handleJumpToFirst}
				className="fixed right-5 bottom-5 display: flex items-center flex-col border-l-indigo-50 rounded-3xl"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					className="bi bi-chevron-double-up"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
					/>
					<path
						fill-rule="evenodd"
						d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
					/>
				</svg>
				Go to top
			</button>
		</>
	);
});

Scripts.displayName = "Scripts";

export default Scripts;
