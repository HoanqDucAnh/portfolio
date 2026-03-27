// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";
import HeroImage from "./hero-image";
import HeroAurora from "./hero-aurora";
import Link from "next/link";

import { initializeApp, getApps } from "firebase/app";

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

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

const VIEW_COUNT_CACHE_KEY = "portfolio_view_count";

const getCachedViewCount = (): number | null => {
	if (typeof window === "undefined") return null;
	const cached = localStorage.getItem(VIEW_COUNT_CACHE_KEY);
	return cached ? parseInt(cached, 10) : null;
};

const setCachedViewCount = (count: number): void => {
	if (typeof window === "undefined") return;
	localStorage.setItem(VIEW_COUNT_CACHE_KEY, count.toString());
};

interface IpInfo {
	ip: string;
	country: string;
	city: string;
}

const countview = async (
	setViewCount: React.Dispatch<React.SetStateAction<number | null>>
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
			// Returning visitor — don't count again
		} else {
			await setDoc(viewsDocRef, { ip: userIp });
		}

		const viewsCollectionRef = collection(db, "views");
		const viewsSnapshot = await getDocs(viewsCollectionRef);
		setViewCount(viewsSnapshot.size);
		setCachedViewCount(viewsSnapshot.size);
	} catch {
		// Silently fail — cached count is shown as fallback
	}
};

const HERO_STYLES = {
	SECTION:
		"w-full flex md:items-center py-8 section-container min-h-screen relative mb-12",
	CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
	SOCIAL_LINK: "link hover:opacity-90 hover:scale-110 transition-all duration-[10ms] md:mr-4 mr-2",
	BG_WRAPPER:
		"absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
	TYPED_SPAN: "text-xl sm:text-2xl md:text-3xl seq",
};

const HeroSection = React.memo(() => {
	const [viewCount, setViewCount] = useState<number | null>(null);

	useEffect(() => {
		// Load cached count immediately for instant display
		const cached = getCachedViewCount();
		if (cached !== null) {
			setViewCount(cached);
		}
		// Then fetch the real count
		countview(setViewCount);
	}, []);

	const typedSpanElement = useRef<HTMLSpanElement>(null);
	const targetSection = useRef<HTMLDivElement>(null);

	const initTypeAnimation = (
		typedSpanElement: React.RefObject<HTMLSpanElement | null>
	): Typed => {
		if (!typedSpanElement.current) return new Typed(document.createElement('span'), {
			strings: TYPED_STRINGS,
			typeSpeed: 50,
			backSpeed: 50,
			backDelay: 8000,
			contentType: 'html',
			loop: true,
		});
		return new Typed(typedSpanElement.current, {
			strings: TYPED_STRINGS,
			typeSpeed: 50,
			backSpeed: 50,
			backDelay: 8000,
			contentType: 'html',
			loop: true,
		});
	};

	const initRevealAnimation = (
		targetSection: React.RefObject<HTMLDivElement | null>
	): GSAPTimeline => {
		if (!targetSection.current) return gsap.timeline();
		const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		revealTl
			.to(targetSection.current, { opacity: 1, duration: 0.8 })
			.from(
				targetSection.current.querySelectorAll(".seq"),
				{ opacity: 0, duration: 0.5, stagger: 0.25 },
				"<"
			);

		return revealTl;
	};

	useEffect(() => {
		const typed = initTypeAnimation(typedSpanElement);
		initRevealAnimation(targetSection);

		return () => {
			if (typed) {
				typed.destroy();
			}
		};
	}, [typedSpanElement, targetSection]);

	const renderBackgroundImage = (): React.ReactNode => (
		<div className={HERO_STYLES.BG_WRAPPER} style={{ maxHeight: "650px" }}>
			<div
				className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full animate-glow-pulse pointer-events-none"
				style={{
					background: "radial-gradient(circle, rgba(145, 70, 255, 0.15) 0%, transparent 70%)",
					filter: "blur(60px)",
				}}
			/>
			<HeroImage />
		</div>
	);

	const renderSocialLinks = (): React.ReactNode =>
		(Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>).map((el) => (
			<a
				href={SOCIAL_LINKS[el]}
				key={el}
				className={HERO_STYLES.SOCIAL_LINK}
				rel="noreferrer"
				target="_blank"
			>
				<Image src={`/social/${el}.svg`} alt={el} width={48} height={48} priority />
			</a>
		));

	const renderHeroContent = (): React.ReactNode => (
		<div className={HERO_STYLES.CONTENT}>
			<div className="md:mb-4 mb-2">
				<div className="flex items-center gap-4 seq">
					<h2 className="text-4xl">Hello 👋🏻</h2>
					{viewCount !== null && (
						<span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
							<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
							{viewCount.toLocaleString()} visitors
						</span>
					)}
				</div>
				<h1 className="text-3xl md:text-4xl lg:text-5xl seq font-bold">
					I'm{" "}
					<span className="bg-gradient-to-r from-[#9146FF] via-[#BF94FF] to-[#9146FF] bg-clip-text text-transparent">
						Minh (Mark) Pham
					</span>
				</h1>
			</div>
			<p className="mb-4">
				<span className={HERO_STYLES.TYPED_SPAN} ref={typedSpanElement}></span>
			</p>
			<div className="flex seq gap-4">
				{renderSocialLinks()}
			</div>
			<div className="flex flex-wrap gap-4 seq mt-6">
				<a
					href="/minh_pham_resume.pdf"
					download
					className="inline-flex items-center gap-3 px-5 py-3 bg-[#9146FF] hover:bg-[#7B3FD9] text-white text-base font-medium rounded-full transition-all duration-[10ms] hover:shadow-lg hover:shadow-[#9146FF]/25 hover:-translate-y-0.5"
				>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
						<polyline points="7 10 12 15 17 10"/>
						<line x1="12" y1="15" x2="12" y2="3"/>
					</svg>
					<span>Download Resume</span>
				</a>
				<a
					href="https://calendly.com/minh-pham-insurify/30min"
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-3 px-5 py-3 border-2 border-white/80 hover:border-white bg-white/5 hover:bg-white/10 text-white text-base font-medium rounded-full transition-all duration-[10ms] hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5"
				>
					<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
						<path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
						<line x1="6" y1="2" x2="6" y2="4"/>
						<line x1="10" y1="2" x2="10" y2="4"/>
						<line x1="14" y1="2" x2="14" y2="4"/>
					</svg>
					<span>Book a coffee chat</span>
				</a>
			</div>
		</div>
	);

	const { ref: heroSectionRef } = MENULINKS[0];

	return (
		<section
			className={HERO_STYLES.SECTION}
			id={heroSectionRef}
			ref={targetSection}
			style={{ opacity: 0.05 }}
		>
			<HeroAurora />
			{renderHeroContent()}
			{renderBackgroundImage()}
		</section>
	);
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
