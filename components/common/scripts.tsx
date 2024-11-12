import Script from "next/script";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
	getDatabase,
	goOnline,
	goOffline,
	get,
	child,
	ref,
	set,
} from "firebase/database";

// const firebaseConfig = {
// 	apiKey: "AIzaSyC7Bd9cOnlhZFTrxMZVbVzaRa9opnSnc4k",
// 	authDomain: "bminh-porfolio-view-counter.firebaseapp.com",
// 	projectId: "bminh-porfolio-view-counter",
// 	storageBucket: "bminh-porfolio-view-counter.firebasestorage.app",
// 	messagingSenderId: "352556857178",
// 	appId: "1:352556857178:web:e0671a9649fa0cbd4c6563",
// 	measurementId: "G-6T2HTBS4WQ",
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// interface IpInfo {
// 	ip: string;
// 	country: string;
// 	city: string;
// }

// interface UserDetails {
// 	ip: string;
// 	visitTime: number;
// }

// const countview = async (
// 	setViewCount: React.Dispatch<React.SetStateAction<number>>
// ): Promise<void> => {
// 	try {
// 		const ipinfo: IpInfo = await fetch("https://api.ipify.org?format=json", {
// 			method: "GET",
// 		}).then((response) => {
// 			if (!response.ok) {
// 				throw new Error(`HTTP error! status: ${response.status}`);
// 			}
// 			return response.json();
// 		});
// 		const { ip: userIp } = ipinfo;
// 		const userIpString = userIp.replace(/\./g, "x");

// 		goOnline(database);

// 		const viewsRef = ref(database, "views");
// 		const snapshot = await get(viewsRef);

// 		setViewCount(snapshot.size);

// 		const currentTime = Date.now();
// 		const oneDayInMillis = 24 * 60 * 60 * 1000;

// 		if (snapshot.hasChild(userIpString)) {
// 			const userDetails: UserDetails = snapshot.child(userIpString).val();
// 			if (currentTime - userDetails.visitTime < oneDayInMillis) {
// 				console.log(
// 					"View Will Not Count, welcome back! Hope you are enjoying my portfolio!"
// 				);
// 				return;
// 			}
// 		}

// 		const userDetails: UserDetails = { ip: userIp, visitTime: currentTime };
// 		await set(child(viewsRef, userIpString), userDetails);
// 		console.log(
// 			"View counted, hi new user! Welcome to my portfolio, hope you like it!"
// 		);

// 		goOffline(database);
// 	} catch (error) {
// 		goOffline(database);
// 		console.error(
// 			"Error fetching user data or interacting with Firebase:",
// 			error
// 		);
// 	}
// };

const Scripts: React.FC = () => {
	// const [viewCount, setViewCount] = useState(0);

	// useEffect(() => {
	// 	countview(setViewCount);
	// }, []);

	const handleJumpToFirst = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className="fixed right-5 bottom-5 flex items-center space-x-4">
			<div className="text-3xl text-[#f27d0d]">Total Views: 3</div>
			<button
				onClick={handleJumpToFirst}
				className="flex items-center flex-col border-l-indigo-50 rounded-3xl"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					className="bi bi-chevron-double-up"
					viewBox="0 0 16 16"
				>
					<path d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
					<path d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
				</svg>
				Go to top
			</button>
		</div>
	);
};

Scripts.displayName = "Scripts";

export default Scripts;
