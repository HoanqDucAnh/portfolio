import React from "react";
import Image from "next/image";

export default function StartupComponent() {
	return (
		<div className="w-[60%] m-auto mt-24 pt-2 ">
			<p className="text-5xl text-center">My Start-up</p>
			<p className="text-4xl text-center mt-10 text-[#f27d0d]">
				The Coconut Academy
			</p>
			<hr className="border-top-2 mt-10 border-white opacity-50"></hr>
			<div className="mt-10 text-center">
				<Image
					src={`/about/startup/1.png`}
					width={1200}
					height={400}
					loading="lazy"
					alt="steak1"
					className="rounded-xl"
				/>
			</div>
			<div className="text-justify mt-5">
				<div className="text-3xl text-[#f27d0d]">Founder Core Value</div>
				<div className="text-md italic border border-white p-6 mt-5">
					"There is no more noble occupation in the world than to assist another
					human being - to help someone succeed.”- Alan Loy McGinnis.
				</div>
				<div className="text-3xl text-[#f27d0d] mt-5">Founder's words</div>
				<div className="mt-2 text-center">
					<Image
						src={`/about/startup/2.png`}
						width={650}
						height={650}
						loading="lazy"
						alt="steak1"
						className="rounded-xl"
					/>
				</div>
				<div className="text-md mt-2">
					I am an eloquent individual driven by innovative ideas, passionately
					embodying the philosophy of 'Do what you love, and love what you do.'
					Committed to giving 100%, I prioritize and dedicate myself to my
					pursuits, demonstrating resilience and a commitment to empowering and
					inspiring others.
				</div>
				<div className="mt-2 text-center">
					<Image
						src={`/about/startup/3.png`}
						width={650}
						height={650}
						loading="lazy"
						alt="steak1"
						className="rounded-xl"
					/>
				</div>
				<div className="text-md mt-2">
					Launched in May 2021, Coconut Consulting Academy (TCCA) is my
					inaugural startup dedicated to assisting global students in applying
					to American universities. With a simple and effective model, we've
					garnered over $10,000 in revenue and reached 1000+ individuals on
					social media, continually evolving to meet the needs of high school
					students pursuing education in the United States.
				</div>
				<div className="text-3xl text-[#f27d0d] mt-5">Coconut's team</div>
				<div className="mt-2 text-center">
					<Image
						src={`/about/startup/4.png`}
						width={650}
						height={650}
						loading="lazy"
						alt="steak1"
						className="rounded-xl"
					/>
				</div>
				<div className="text-md mt-2">
					<ul className="list-disc ">
						For us, a team of high-quality essay writers is indispensable as
						essays constitute the 'heart and soul' of every university
						application. The success of our students' application journeys is
						attributed to the guidance, advice, and thoughtful feedback provided
						by our dedicated team members.
						<li className="ml-7 my-1">
							<span className="text-[#f27d0d]">Linh Nguyen </span> (Washington
							and Lee University, 1550 SAT)
						</li>
						<li className="ml-7 my-1">
							<span className="text-[#f27d0d]">Tran Nguyen </span> (Columbia
							University, 1530 SAT)
						</li>
						<li className="ml-7 my-1">
							<span className="text-[#f27d0d]">Lan Nguyen </span> (University of
							Pennsylvania, 1540 SAT)
						</li>
						<li className="ml-7 my-1">
							<span className="text-[#f27d0d]">Tran Ha My </span> (Vassar
							College, 1530 SAT)
						</li>
						<li className="ml-7 my-1">
							<span className="text-[#f27d0d]">Hoai Anh Le </span> (Bennington
							College, 1530 SAT)
						</li>
						<li className="ml-7 my-1">
							<span className="text-[#f27d0d]">Lam Dinh </span> (Villanova
							University, 1500 SAT)
						</li>
					</ul>
				</div>
				<div className="text-md mt-1">
					These exceptional individuals have played an integral role in helping
					our clients reach their academic goals. Their expertise in crafting
					compelling and persuasive essays has made all the difference. We
					recognize that our team members are the backbone of our success, and
					we are deeply grateful for their unwavering dedication and commitment
					to excellence.
				</div>
				<div className="text-3xl text-[#f27d0d] mt-5">Succesful Case</div>
				<div className="mt-2 text-center">
					<Image
						src={`/about/startup/5.png`}
						width={650}
						height={650}
						loading="lazy"
						alt="steak1"
						className="rounded-xl"
					/>
				</div>
				<div className="text-md mt-1 mb-2">
					<p>
						At our company, we take immense pride in sharing the remarkable
						success story of Mr. Vũ Bảo Tín, who approached TCCA in July with a
						determination to pursue higher education in the United States. Tín
						has secured acceptance letters and substantial scholarships from
						four prestigious American universities, with annual awards ranging
						from $37,500 to $45,500, showcasing his commendable achievement. We
						extend our warmest congratulations to Tín and eagerly anticipate his
						continued success, proud to have played a role in his educational
						journey at our company.
					</p>
					{/* <br />
					<p>
						Tín has received acceptance letters and, to our utmost delight,
						substantial scholarships from four prestigious American
						universities, including an Early Decision 1 offer. Each institution
						has offered Tín scholarships ranging from $37,500 to $45,500
						annually. This means that every year, he will only need to cover a
						tuition fee between $17,000 and $22,000, which includes tuition,
						accommodation, and various associated costs.
					</p>
					<br />
					<p>
						This achievement is nothing short of commendable and genuinely
						well-deserved. Once again, we extend our warmest congratulations to
						Tín for his exceptional accomplishment. We hope that you will
						continue to journey alongside Dừa and reap even more remarkable
						successes in the future. We are proud to have been part of your
						educational journey and look forward to witnessing your continued
						growth and achievements. Together, we will continue to help our
						clients achieve their dreams of attending renowned institutions like
						Augustana University in the United States and beyond.
					</p> */}
				</div>
			</div>
		</div>
	);
}
