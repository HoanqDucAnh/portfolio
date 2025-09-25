// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { SKILLS } from "../../constants";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop } from "pages";
import styled from "styled-components";

const TooltipContainer = styled.div`
	position: relative;
	display: inline-block;
`;

const TooltipText = styled.span`
	visibility: hidden;
	width: 150px;
	background-color: #fff;
	color: #101827;
	text-align: center;
	border-radius: 6px;
	padding: 5px;
	position: absolute;
	z-index: 1;
	bottom: 125%;
	left: 50%;
	margin-left: -60px;
	opacity: 0;
	transition: opacity 0.3s;

	${TooltipContainer}:hover & {
		visibility: visible;
		opacity: 1;
	}
`;

interface TooltipProps {
	text: string;
	children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
	return (
		<TooltipContainer>
			{children}
			<TooltipText>{text}</TooltipText>
		</TooltipContainer>
	);
};

const CERTIFICATE_STYLES = {
	SECTION:
		"w-full relative select-none mb-12 section-container py-6 flex flex-col justify-center",
};

const CertificateSection = ({ isDesktop }: IDesktop) => {
	const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
	const [willChange, setwillChange] = useState(false);

	const initRevealAnimation = (
		targetSection: MutableRefObject<HTMLDivElement>
	): ScrollTrigger => {
		const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		revealTl.from(
			targetSection.current.querySelectorAll(".seq"),
			{ opacity: 0, duration: 0.5, stagger: 0.5 },
			"<"
		);

		return ScrollTrigger.create({
			trigger: targetSection.current.querySelector(".certificate-wrapper"),
			start: "100px bottom",
			end: `center center`,
			animation: revealTl,
			scrub: 0,
			onToggle: (self) => setwillChange(self.isActive),
		});
	};

	useEffect(() => {
		const revealAnimationRef = initRevealAnimation(targetSection);

		return revealAnimationRef.kill;
	}, [targetSection]);

	const renderSectionTitle = (): React.ReactNode => (
		<div className="flex flex-col">
			<p className="section-title-sm seq">Certifications</p>
			<h1 className="section-heading seq mt-2">My certifications</h1>
			<h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
				Professional certifications that validate my expertise
			</h2>
		</div>
	);

	const renderCertified = (skill: string): React.ReactNode => (
		<div
			className={`flex flex-col seq ${willChange ? "will-change-opacity" : ""
				}`}
		>
			<div
				style={{ height: "310px" }}
				className="flex align-middle justify-center "
			>
				<img src={`/skills/3rd/${skill}.png`} alt={skill} />
			</div>
		</div>
	);

	return (
		<section className="relative">
			<div
				className={CERTIFICATE_STYLES.SECTION}
				id="certificates"
				ref={targetSection}
			>
				<div className="flex flex-col certificate-wrapper">
					{renderSectionTitle()}
					<div className="grid lg:grid-cols-3 md:grid-cols-1 mt-10 gap-5">
						<div className="col-span-1 text-center">
							<Tooltip text="Alteryx Core Designer">
								{renderCertified(SKILLS.alteryx)}
							</Tooltip>
						</div>
						<div className="col-span-1 text-center">
							<Tooltip text="HackerRank SQL Advanced">
								{renderCertified(SKILLS.hackerank)}
							</Tooltip>
						</div>
						<div className="col-span-1 text-center">
							<Tooltip text="Astronomer Apache Airflow Certified">
								{renderCertified(SKILLS.airflow)}
							</Tooltip>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CertificateSection; 