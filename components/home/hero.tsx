// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";
import HeroImage from "./hero-image";
import Link from "next/link";

import { initializeApp } from "firebase/app";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	getDocs,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC7Bd9cOnlhZFTrxMZVbVzaRa9opnSnc4k",
	authDomain: "bminh-porfolio-view-counter.firebaseapp.com",
	projectId: "bminh-porfolio-view-counter",
	storageBucket: "bminh-porfolio-view-counter.firebasestorage.app",
	messagingSenderId: "352556857178",
	appId: "1:352556857178:web:e0671a9649fa0cbd4c6563",
	measurementId: "G-6T2HTBS4WQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface IpInfo {
	ip: string;
	country: string;
	city: string;
}

const countview = async (
	setViewCount: React.Dispatch<React.SetStateAction<number>>
): Promise<void> => {
	try {
		const ipinfo: IpInfo = await fetch("https://api.ipify.org?format=json", {
			method: "GET",
		}).then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		});
		const { ip: userIp } = ipinfo;
		const userIpString = userIp.replace(/\./g, "x");

		const viewsDocRef = doc(db, "views", userIpString);
		const docSnap = await getDoc(viewsDocRef);

		if (docSnap.exists()) {
			console.log(
				"View Will Not Count, welcome back! Hope you are enjoying my portfolio!"
			);
		} else {
			await setDoc(viewsDocRef, { ip: userIp });
			console.log(
				"View counted, hi new user! Welcome to my portfolio, hope you like it!"
			);
		}

		const viewsCollectionRef = collection(db, "views");
		const viewsSnapshot = await getDocs(viewsCollectionRef);
		console.log("Total views:", viewsSnapshot.size);
		setViewCount(viewsSnapshot.size);
	} catch (error) {
		console.error(
			"Error fetching user data or interacting with Firestore:",
			error
		);
	}
};

const HERO_STYLES = {
	SECTION:
		"w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
	CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
	SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
	BG_WRAPPER:
		"absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
	TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};

const HeroSection = React.memo(() => {
	const [viewCount, setViewCount] = useState(0);

	useEffect(() => {
		countview(setViewCount);
	}, []);

	const typedSpanElement: MutableRefObject<HTMLSpanElement> = useRef(null);
	const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

	const initTypeAnimation = (
		typedSpanElement: MutableRefObject<HTMLSpanElement>
	): Typed => {
		return new Typed(typedSpanElement.current, {
			strings: TYPED_STRINGS,
			typeSpeed: 50,
			backSpeed: 50,
			backDelay: 8000,
			loop: true,
		});
	};

	const initRevealAnimation = (
		targetSection: MutableRefObject<HTMLDivElement>
	): GSAPTimeline => {
		const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		revealTl
			.to(targetSection.current, { opacity: 1, duration: 2 })
			.from(
				targetSection.current.querySelectorAll(".seq"),
				{ opacity: 0, duration: 0.5, stagger: 0.5 },
				"<"
			);

		return revealTl;
	};

	useEffect(() => {
		const typed = initTypeAnimation(typedSpanElement);
		initRevealAnimation(targetSection);

		return typed.destroy;
	}, [typedSpanElement, targetSection]);

	const renderBackgroundImage = (): React.ReactNode => (
		<div className={HERO_STYLES.BG_WRAPPER} style={{ maxHeight: "650px" }}>
			<HeroImage />
		</div>
	);

	const renderSocialLinks = (): React.ReactNode =>
		Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
			<a
				href={SOCIAL_LINKS[el]}
				key={el}
				className={HERO_STYLES.SOCIAL_LINK}
				rel="noreferrer"
				target="_blank"
			>
				<Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
			</a>
		));

	const renderHeroContent = (): React.ReactNode => (
		<div className={HERO_STYLES.CONTENT}>
			<div className="md:mb-4 mb-2">
				<h2 className="text-4xl seq">Hello 👋🏻</h2>
				<h1 className="text-3xl seq">I’m Minh (Mark) Pham</h1>
				<div className="text-3xl text-[#f27d0d]">Total Views: {viewCount}</div>
			</div>
			<p className="mb-4">
				<span className={HERO_STYLES.TYPED_SPAN} ref={typedSpanElement}></span>
			</p>
			<div className="flex seq">
				<Button
					classes="mr-3"
					type={ButtonTypes.OUTLINE}
					name="Resume"
					otherProps={{
						target: "_blank",
						rel: "noreferrer",
					}}
					href="https://markphamm.github.io/resume_website/"
				></Button>
				{/* <Button
					classes=""
					type={ButtonTypes.PRIMARY}
					name="Contact me!"
					href=""
					otherProps={{
						target: "_blank",
						rel: "noreferrer",
					}}
				></Button> */}
				<Link href="https://www.linkedin.com/in/minhbphamm/">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/minhbphamm/"
						className="cus-btn py-2 px-7 font-medium rounded text-base md:text-xl tracking-wide link duration-300 flex items-center "
					>
						Contact me!
					</a>
				</Link>
			</div>
		</div>
	);

	const { ref: heroSectionRef } = MENULINKS[0];

	return (
		<section
			className={HERO_STYLES.SECTION}
			id={heroSectionRef}
			ref={targetSection}
			style={{ opacity: 0 }}
		>
			{renderHeroContent()}
			{renderBackgroundImage()}
		</section>
	);
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
