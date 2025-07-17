import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function InfoArticle() {
	return (
		<div className="sticky-follow">
			<h6 className="text-lg font-semibold mb-4">Follow me!</h6>
			<section id="social" className="mb-6">
				<div className="mb-2">
					<a
						href="https://www.linkedin.com/in/minhbphamm/"
						target="_blank"
						rel="noreferrer"
						className="flex items-center hover:text-[#f27d0d] transition-colors duration-300"
					>
						<Image 
							src="/social/linkedin.svg" 
							alt="LinkedIn" 
							width={20} 
							height={20} 
							className="mr-2"
						/>
						LinkedIn
					</a>
				</div>
				<div className="mb-2">
					<a
						href="https://github.com/MarkPhamm"
						target="_blank"
						rel="noreferrer"
						className="flex items-center hover:text-[#f27d0d] transition-colors duration-300"
					>
						<Image 
							src="/social/github.svg" 
							alt="GitHub" 
							width={20} 
							height={20} 
							className="mr-2"
						/>
						GitHub
					</a>
				</div>
			</section>
			<hr className="border-gray-300 mb-4" />
			<section>
				<h6 className="text-lg font-semibold mb-3">Read more</h6>
				<div className="space-y-2">
					<div>
						<Link href="/myarticle/userstreak">
							<a className="block hover:text-[#f27d0d] transition-colors duration-300 text-sm">
								User Streak (Gaps and Islands)
							</a>
						</Link>
					</div>
					<div>
						<Link href="/myarticle/retention">
							<a className="block hover:text-[#f27d0d] transition-colors duration-300 text-sm">
								First Day Retention Rate
							</a>
						</Link>
					</div>
					<div>
						<Link href="/myarticle/time">
							<a className="block hover:text-[#f27d0d] transition-colors duration-300 text-sm">
								Time Between Two Events
							</a>
						</Link>
					</div>
					<div>
						<Link href="/myarticle/marketcamp">
							<a className="block hover:text-[#f27d0d] transition-colors duration-300 text-sm">
								Marketing Campaign Analysis
							</a>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
