import Image from "next/image";
import React from "react";

export default function PassionComponent() {
	return (
		<div className="w-[60%] m-auto mt-24 pt-2 ">
			<p className="text-5xl text-center">My passion</p>
			<p className="text-4xl text-center mt-10 text-[#f27d0d]">Cuisine</p>
			<div className="text-center mt-10">
				<em className="text-2xl">
					“If you are a chef, no matter how good a chef you are, it's not good
					cooking for yourself; the joy is in cooking for others.” - Will.i.am
				</em>
			</div>
			<div className="text-justify mt-5 border-l-2 border-l-white">
				<p className="text-md pl-5">
					$300 could get me a PlayStation4, a pair of Nike Air Jordans, or the
					latest iPod. Despite the allure of consumerism, I ended up trading
					$300 for a red cart, a second-hand bike, rosemary, ketchup, spices,
					and a small grill. They have been my companion ever since.
				</p>
				<br />
				<p className="text-md pl-5">
					That was far from my first trade-off. To my parents' bewilderment, I
					never hesitated to sacrifice Lego blocks, Tamagochi, or Spider-Man
					action figures for a cast iron pan. That passion never left me; it
					only grew stronger with time, as I discovered the joy of building
					meals and crafting memories that would last far longer than any toy or
					gadget ever could.
				</p>
			</div>
			<div className="text-justify mt-5">
				<div className="text-3xl text-[#f27d0d]">
					Family Dish - Xa Xiu noodles
				</div>
				<div className="text-md mt-5">
					My Favorite Dish for Family Rituals and Anniversaries
					<br /> For family gatherings and anniversaries, I usually prepare a
					special Vietnamese dish with quail eggs and char siu pork, embodying
					nostalgic flavors. The magic lies in the profound connection it
					fosters, merging my love for cooking with the joy it brings to my
					family."
				</div>
				<div className="mt-2 text-center">
					<Image
						src={`/about/passion/xaxiu.jpg`}
						width={700}
						height={550}
						loading="lazy"
						alt="steak1"
						className="rounded-xl"
					/>
					<p className="text-xs opacity-75 italic">
						Xa Xiu Noodles with Xa Xiu Pork, Steam and Fried Dumpling, Shrimp,
						Quail Eggs and Bok Choy
					</p>
				</div>

				<div className="text-3xl text-[#f27d0d] mt-5">
					My Favorite Dish - Steak
				</div>
				<div className="grid grid-cols-8 mt-5">
					<div className="col-span-2">
						<div className="text-center">
							<Image
								src={`/about/passion/steak1.jpg`}
								width={220}
								height={250}
								loading="lazy"
								alt="steak1"
								className="rounded-xl"
							/>
							<p className="text-xs opacity-75 italic">Medium rare ribeye</p>
						</div>
					</div>
					<div className="col-span-6 justify-center align-middle">
						<div className="text-md">
							My early attempts at cooking steak were less than stellar,
							described by my mom as burnt, under-seasoned, and rubbery. The
							journey to mastering the art of steak involves meticulous factors,
							from pan temperature to seasoning and basting techniques. After
							numerous tries, I achieved the pinnacle of my efforts – a
							sensational, well-seared, medium rare, rosemary-thyme
							butter-basted dry-aged ribeye that truly reflects my passion and
							dedication
						</div>
					</div>
				</div>
				{/* <div className="text-md mt-2">
					<ul className="list-disc ">
						My journey to mastering the art of cooking steak has unveiled a few
						key secrets that consistently result in a mouthwatering dish:
						<li className="ml-7 my-1">
							<span className="text-[#f27d0d]">High Heat Cast Iron Pan:</span>{" "}
							The first secret is to have a sizzling hot cast iron pan.
							Achieving the perfect sear requires a pan that's preheated to a
							high temperature. This ensures that the steak's surface
							caramelizes quickly, creating that coveted crust while locking in
							the juices.
						</li>
						<li className="ml-7 my-1">
							<span className="text-[#f27d0d]">Flavorful Basting:</span> Basting
							the steak is another crucial step. I've found that using a mixture
							of rosemary and thyme-infused butter elevates the taste to new
							heights. As the butter melts and mingles with these aromatic
							herbs, it imparts a rich, herbaceous flavor to the meat, enhancing
							the overall dining experience.
						</li>
						<li className="ml-7 my-1">
							<span className="text-[#f27d0d]">Resting Period:</span> After
							cooking, allowing the steak to rest for a few minutes is
							essential. This time lets the juices redistribute throughout the
							meat, ensuring a juicy and tender bite. Patience pays off, and
							this step should not be rushed.
						</li>
					</ul>
				</div> */}
				<div className="grid grid-cols-2 mt-2">
					<div className="col-span-1 text-center">
						<Image
							src={`/about/passion/steak2.jpeg`}
							width={500}
							height={500}
							loading="lazy"
							alt="steak1"
							className="rounded-xl m-auto"
						/>
						<p className="text-xs opacity-75 italic">
							Dried Aged Rib eye with Rosemary, Thyme and Garlic Butter
						</p>
					</div>
					<div className="col-span-1 text-center">
						<Image
							src={`/about/passion/steak3.jpg`}
							width={500}
							height={500}
							loading="lazy"
							alt="steak1"
							className="rounded-xl m-auto"
						/>
						<p className="text-xs opacity-75 italic">
							Seared Lamb rack with Rosemary, Thyme and Garlic Butter
						</p>
					</div>
				</div>
				<div className="text-md mt-2">
					Having mastered the art of cooking steak, I ventured into the realm of
					a more challenging ingredient: a rack of lamb. Despite the added
					complexity, the satisfaction of mastering lamb was truly rewarding
				</div>
				<div className="text-3xl text-[#f27d0d] mt-5">Italian Food</div>
				<div className="text-md mt-1 mb-2">
					I have an unwavering passion for cooking Italian cuisine, an art that
					brings me immense joy and satisfaction. With its rich flavors and
					diverse ingredients, Italian food never fails to captivate my culinary
					senses.
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-10">
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
				</div>
			</div>
		</div>
	);
}
