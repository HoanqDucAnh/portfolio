// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Image from "next/image";
import { useState } from "react";
import Menu from "@/components/common/menu";
import { NAVBARITEMS } from "../../constants";
import Link from "next/link";

const Header = () => {
	const [menuVisible, setmenuVisible] = useState(false);

	return (
		<header className="w-full fixed top-0 py-8 select-none z-50 bg-gradient-to-b from-gray-900 to-transparent">
			<div className="flex justify-between section-container">
				<a href="#home" className="link">
					<Image src="/logo2.svg" alt="Logo" width={22} height={22} />
				</a>
				<div className="hidden md:flex items-center justify-center">
					{NAVBARITEMS.map((item: any) => (
						<a key={item.name} href={`#${item.ref}`} className="link px-3">
							{item.name}
						</a>
					))}
					<Link href="/aboutme/passion">
						<a className="link px-3">My Passion</a>
					</Link>
					<Link href="/aboutme/startup">
						<a className="link px-3">My Startup</a>
					</Link>
				</div>
				<nav className={`outer-menu ${menuVisible ? "menu-visible" : ""}`}>
					<button
						className="hamburger w-6 h-6 flex items-center justify-center link relative"
						onClick={setmenuVisible.bind(null, !menuVisible)}
					>
						<div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
					</button>
					<Menu setmenuVisible={setmenuVisible} />
				</nav>
			</div>
		</header>
	);
};

export default Header;
