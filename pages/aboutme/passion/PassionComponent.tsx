import Image from "next/image";
import React from "react";

export default function PassionComponent() {
	return (
		<div className="w-[60%] m-auto mt-24 pt-2 ">
			<p className="text-4xl text-center">My Passion - <span className="text-[#f27d0d]">Cuisine</span></p>
			<div className="text-center mt-10 max-w-[900px] mx-auto">
				<em className="text-lg">
					"If you are a chef, no matter how good a chef you are, it's not good
					cooking for yourself; the joy is in cooking for others." - Will.i.am
				</em>
			</div>
			<div className="text-justify mt-5">
				<div className="text-3xl text-[#f27d0d] max-w-[900px] mx-auto">Family Dish</div>
				<div className="text-2xl text-[#f27d0d] text-opacity-80 max-w-[900px] mx-auto">
					Xa Xiu noodles - A Special Dish for Family Celebrations
				</div>
				<div className="mt-2 text-center max-w-[900px] mx-auto">
					<Image
						src={`/about/passion/xaxiu.jpg`}
						width={900}
						height={600}
						quality={100}
						loading="lazy"
						alt="steak1"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-xs opacity-75 italic">
						Xa Xiu Noodles with Xa Xiu Pork, Steam and Fried Dumpling, Shrimp,
						Quail Eggs and Bok Choy
					</p>
				</div>
				<div className="text-lg mt-5 leading-relaxed max-w-[900px] mx-auto">
					One of my favorite dishes to prepare at family gatherings and
					anniversaries is <strong>Xa Xiu noodles</strong>. This traditional
					Vietnamese dish, made with egg noodles, tender char siu pork, and
					quail eggs, embodies a world of nostalgic flavors. More than just
					food, preparing meals is a way of showing my love, honoring family
					connections, and cherishing our traditions.
				</div>

				<div className="text-3xl text-[#f27d0d] mt-5 max-w-[900px] mx-auto">Feature Dish - Steak</div>
				<div className="text-2xl text-[#f27d0d] text-opacity-80 max-w-[900px] mx-auto">
					Dried Aged Rib eye with Rosemary, Thyme and Garlic Butter
				</div>
				<div className="mt-2 text-center max-w-[900px] mx-auto">
					<Image
						src={`/about/passion/steak2.jpeg`}
						width={900}
						height={600}
						quality={100}
						loading="lazy"
						alt="steak1"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-xs opacity-75 italic">
						Dried Aged Rib eye with Rosemary, Thyme and Garlic Butter
					</p>
				</div>
				<div className="text-lg my-5 leading-relaxed max-w-[900px] mx-auto">
					<p className="mb-4">
						My journey with steak started humbly - a bit comically even. My early
						attempts were, let's say, less than perfect. As Mom described, they
						were burnt, under-seasoned, and rubbery.
					</p>
					<p className="mb-4">
						<i>"Tenaciously"</i>, I threw myself into mastering the art of cooking
						steak. After countless attempts, testing every little detail: the pan
						temperature, the timing, the seasoning, basting it with butter and
						fresh herbs, I finally nailed it: a perfectly seared, medium-rare,
						dry-aged ribeye, basted in rosemary-thyme butter that was tender,
						juicy, and packed with flavor.
					</p>
					<p>
						The dish became a symbol of my dedication and growth as a cook, and
						the commitment I bring to my culinary creations.
					</p>
				</div>
				<div className="col-span-1 text-center mt-5 justify-center max-w-[900px] mx-auto">
					<Image
						src={`/about/passion/steak3.jpg`}
						width={900}
						height={600}
						quality={100}
						loading="lazy"
						alt="steak1"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-xs opacity-75 italic">
						Seared Lamb rack with Rosemary, Thyme and Garlic Butter
					</p>
				</div>

				<div className="text-lg mt-2 leading-relaxed max-w-[900px] mx-auto">
					<p className="mb-4">
						After mastering steak, I felt ready to take on an even more
						challenging ingredient - a rack of lamb. Cooking lamb requires a higher level of precision and care, from the
						seasoning to the sear to ensuring it's cooked to the perfect level of
						doneness.
					</p>
					<p className="mb-4 italic text-gray-300 border-l-4 border-red-500 pl-4">
						"The greater the payoff, the greater the hardship." - Alex Hormozi
					</p>
					<p>
						Despite the added complexity, achieving that delicate, tender meat
						with a crispy herb-crusted exterior was incredibly rewarding to me.
					</p>
				</div>
				<div className="text-3xl text-[#f27d0d] mt-5 max-w-[900px] mx-auto">Seafood Sensations</div>
				<div className="text-2xl text-[#f27d0d] text-opacity-80 mt-2 max-w-[900px] mx-auto">
					Pan-Seared Salmon, with <i>mushrooms and asparagus spears</i>
				</div>
				<div className="mt-4 text-center max-w-[900px] mx-auto">
					<Image
						src={`/about/passion/seafood1.jpg`}
						width={900}
						height={600}
						quality={100}
						loading="lazy"
						alt="steak1"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-xs opacity-75 italic mt-2">
						Herb-Crusted Salmon, with Rice, Sunny Egg, and Sautéed Veggies
					</p>
				</div>
				<div className="text-lg mt-5 mb-2 leading-relaxed max-w-[900px] mx-auto">
					Simple but delicious, this dish is all about bringing out the natural
					flavors. Starting with a salmon fillet, I seared it just right to get
					a crispy, golden crust while keeping the inside nice and juicy. Then,
					I pile on some mushrooms sautéed in garlic—those mushrooms soak up all
					the flavor and add a nice, rich taste to the dish. I love adding
					asparagus for that little crunch a pop of green, and a few crispy
					bread strips for some extra texture. It's a warm, hearty plate that
					feels like a hug in every bite.
				</div>
				<div className="text-2xl text-[#f27d0d] text-opacity-80 mt-8 max-w-[900px] mx-auto">
					Herb-Crusted Salmon, with <i>Rice, Sunny Egg, and Sautéed Veggies</i>
				</div>
				<div className="mt-4 text-center max-w-[900px] mx-auto">
					<Image
						src={`/about/passion/seafood2.jpg`}
						width={900}
						height={600}
						quality={100}
						loading="lazy"
						alt="steak1"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-xs opacity-75 italic mt-2">
						Pan-seared Salmon with mushrooms and asparagus spears
					</p>
				</div>
				<div className="text-lg mt-5 mb-2 leading-relaxed max-w-[900px] mx-auto">
					This dish is my idea of a feel-good, satisfying meal. Here, I've taken
					a fillet of salmon, crusted it with herbs, and seared it until crispy,
					pairing it with a simple sunny-side-up egg on rice for a bit of
					comfort. The sautéed veggies—peas, mushrooms, and herbs—bring some
					freshness and texture. A slice of orange and a lemon wedge brighten up
					the whole dish, adding a little zest and freshness to balance
					everything out. It's a colorful, balanced plate that's as tasty as it
					looks!
				</div>
				<div className="text-2xl text-[#f27d0d] text-opacity-80 mt-8 max-w-[900px] mx-auto">
					Crispy Skin Salmon, with <i>asparagus and garlic chips</i>
				</div>
				<div className="mt-4 text-center max-w-[900px] mx-auto">
					<Image
						src={`/about/passion/seafood3.jpg`}
						width={900}
						height={600}
						quality={100}
						loading="lazy"
						alt="steak1"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-xs opacity-75 italic mt-2">
						Crispy Skin Salmon with asparagus and garlic chips
					</p>
				</div>
				<div className="text-lg mt-5 mb-2 leading-relaxed max-w-[900px] mx-auto">
					This dish is the perfect balance of texture and flavor. The salmon's
					skin is seared to golden perfection, adding a satisfying crunch that
					contrasts beautifully with the tender, flaky flesh beneath. Paired
					with freshly roasted asparagus spears and topped with crisp garlic
					chips, this dish is a celebration of simplicity and sophistication.
				</div>
				<div className="text-3xl text-[#f27d0d] mt-5 max-w-[900px] mx-auto">Italian food</div>
				<div className="text-lg mt-1 mb-2 leading-relaxed max-w-[900px] mx-auto">
					Italian cuisine has always held a special place in my heart. The
					simplicity, yet depth of flavor in Italian cooking is like an endless
					canvas of possibilities that never fails to excite me. From rich,
					hearty sauces to delicate pasta dishes, Italy has a cuisine that
					celebrates fresh ingredients, thoughtful preparation, and bold
					flavors—a combination that keeps me coming back for more, eager to
					experiment and refine.
				</div>
				<div className="text-2xl text-[#f27d0d] text-opacity-80 max-w-[900px] mx-auto">
					Spaghetti Bolognese The Classic
				</div>
				<div className="mt-2 text-center max-w-[900px] mx-auto">
					<Image
						src={`/about/passion/sphagheti1.jpg`}
						width={900}
						height={600}
						quality={100}
						loading="lazy"
						alt="steak1"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-xs opacity-75 italic">
						Spaghetti Bolognese with a sprinkle of fresh parsley
					</p>
				</div>
				<div className="text-lg mt-1 mb-2 leading-relaxed max-w-[900px] mx-auto">
					Spaghetti Bolognese is one of those dishes that I find myself
					returning to time and time again. There's something incredibly
					comforting about a bowl of al dente spaghetti topped with a rich,
					savory Bolognese sauce. I make mine with tender minced meat, slowly
					simmered in a tomato-based sauce and hints of garlic, onion, and
					herbs. The flavors meld beautifully, creating a symphony of richness
					and family warmth. It's a simple, yet powerful dish that always leaves
					an impression.
				</div>
				<div className="text-2xl text-[#f27d0d] text-opacity-80 max-w-[900px] mx-auto">
					Spaghetti Con ill to tonno
				</div>
				<div className="mt-2 text-center max-w-[900px] mx-auto">
					<Image
						src={`/about/passion/sphagheti2.jpg`}
						width={900}
						height={600}
						quality={100}
						loading="lazy"
						alt="steak1"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-xs opacity-75 italic">
						Spaghetti Con ill to tonno
					</p>
				</div>
				<div className="text-lg mt-1 mb-2 leading-relaxed max-w-[900px] mx-auto">
					Another Italian favorite of mine is Spaghetti con il Tonno. Such a
					beauty of simplicity. Al dente spaghetti is tossed with tender tuna
					flakes, sautéed garlic, a splash of olive oil, and a sprinkle of fresh
					parsley. The result is light yet satisfying, a dish that's as
					comforting as it is flavorful. Spaghetti con il Tonno reminds me of
					the versatility of Italian cuisine—how just a handful of quality
					ingredients can create something memorable.
				</div>
				<div className="text-2xl text-[#f27d0d] text-opacity-80 max-w-[900px] mx-auto">
					Seafood Carbonara
				</div>
				<div className="mt-2 text-center max-w-[900px] mx-auto">
					<Image
						src={`/about/passion/carbo.png`}
						width={900}
						height={600}
						quality={100}
						loading="lazy"
						alt="steak1"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-xs opacity-75 italic">
						Seafood Carbonara with pan-seared asparagus
					</p>
				</div>
				<div className="text-lg mt-1 mb-2 leading-relaxed max-w-[900px] mx-auto">
					Seafood Carbonara has become one of my go-to dishes when I want to
					serve something special. It's a rich, ocean-inspired spin on classic
					carbonara. Instead of the usual pancetta, I like to use fresh
					seafood—plump shrimp, sweet crab, or, if I feel indulgent enough, a
					touch of lobster. The creamy, egg-based sauce, blended with Parmigiano
					Reggiano, coats the pasta perfectly, while the seafood brings in a
					burst of briny flavor that takes the whole dish up a notch. It's a
					comforting yet elevated fusion of textures and tastes, capturing the
					versatility and elegance of Italian cuisine.
				</div>
				{/* <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-10">
					<div className="col-span-1">
						<div className="text-2xl text-[#f27d0d]">Spaghetti Bolognese</div>
						<div className="text-md mt-1 mb-4">
							Spaghetti Bolognese holds a special place in my heart among the
							many delectable dishes I love preparing. The hearty combination of
							tender minced meat simmered in a savory tomato sauce, generously
							ladled over perfectly cooked spaghetti, is a symphony of flavors
							that never fails to delight.
						</div>
						<Image
							src={`/about/passion/sphagheti1.jpg`}
							width={500}
							height={350}
							loading="lazy"
							alt="steak1"
							className="rounded-xl m-auto"
						/>
						<p className="text-xs opacity-75 italic text-center">
							Spaghetti Bolognese
						</p>
					</div>
					<div className="col-span-1">
						<div className="text-2xl text-[#f27d0d]">
							Spaghetti Con ill to tonno
						</div>
						<div className="text-md mt-1 mb-4">
							Spaghetti con il tonno, another Italian classic, is a dish that I
							adore creating. This simple yet delightful dish features al dente
							spaghetti tossed with tender tuna flakes, aromatic garlic, and
							olive oil. The marriage of these ingredients results in a light,
							flavorful, satisfying, and comforting pasta.
						</div>
						<Image
							src={`/about/passion/sphagheti2.jpg`}
							width={500}
							height={350}
							loading="lazy"
							alt="steak1"
							className="rounded-xl m-auto mt-2"
						/>
						<p className="text-xs opacity-75 italic text-center">
							Spaghetti Con ill to tonno
						</p>
					</div>
				</div>
				<div className="text-3xl text-[#f27d0d] mt-5">Seafood Carbonara</div>
				<div className="text-md mt-1">
					Seafood Carbonara is a heavenly fusion, blending the richness of
					carbonara sauce with a medley of succulent seafood, including plump
					shrimp and tender crab or lobster. The creamy, egg-based sauce,
					enriched with Parmigiano Reggiano, elevates the dish to a divine
					symphony of textures and tastes when served over perfectly cooked
					pasta.
				</div>
				<div className="mt-2 text-center">
					<Image
						src={`/about/passion/carbo.png`}
						width={600}
						height={450}
						loading="lazy"
						alt="steak1"
						className="rounded-xl "
					/>
					<p className="text-xs opacity-75 italic text-center">
						Seafood Carbonara served with pan-seared asparagus
					</p>
				</div>
				<div className="text-3xl text-[#f27d0d] mt-5">
					Crispy Skin Salmon (with asparagus and garlic chips)
				</div>
				<div className="text-md mt-1">
					Indulge in the delightful experience of Crispy Skin Salmon—a perfect
					harmony of textures and flavors. With its perfectly crispy skin,
					buttery flesh, fresh asparagus, and magical garlic chips, this dish is
					a celebration of simple ingredients creating culinary magic that will
					leave your taste buds thanking you
				</div>
				<div className="mt-2 text-center">
					<Image
						src={`/about/passion/salmon.png`}
						width={600}
						height={450}
						loading="lazy"
						alt="steak1"
						className="rounded-xl "
					/>
					<p className="text-xs opacity-75 italic text-center">
						Rosemary infused Crispy Skin Salmon served with asparagus and garlic
						chips
					</p>
				</div> */}
			</div>
		</div>
	);
}
