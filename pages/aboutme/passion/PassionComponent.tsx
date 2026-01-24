import Image from "next/image";
import React, { useState } from "react";

interface DishCardProps {
	image: string;
	title: string;
	subtitle?: string;
	caption: string;
	description: React.ReactNode;
	reverse?: boolean;
}

const DishCard = ({ image, title, subtitle, caption, description, reverse = false }: DishCardProps) => (
	<div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
		<div className="lg:w-1/2 w-full group">
			<div className="relative overflow-hidden rounded-2xl shadow-2xl">
				<Image
					src={image}
					width={600}
					height={400}
					quality={100}
					loading="lazy"
					alt={title}
					className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
			<p className="text-sm text-gray-400 italic text-center mt-3">{caption}</p>
		</div>
		<div className="lg:w-1/2 w-full">
			{subtitle && (
				<span className="inline-block px-3 py-1 bg-[#f27d0d]/20 text-[#f27d0d] text-sm font-medium rounded-full mb-3">
					{subtitle}
				</span>
			)}
			<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
			<div className="text-gray-300 leading-relaxed space-y-4">
				{description}
			</div>
		</div>
	</div>
);

interface CategoryTabProps {
	categories: string[];
	activeCategory: string;
	onSelect: (category: string) => void;
}

const CategoryTabs = ({ categories, activeCategory, onSelect }: CategoryTabProps) => (
	<div className="flex flex-wrap justify-center gap-3 mb-12">
		{categories.map((category) => (
			<button
				key={category}
				onClick={() => onSelect(category)}
				className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
					activeCategory === category
						? 'bg-[#f27d0d] text-white shadow-lg shadow-[#f27d0d]/30'
						: 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
				}`}
			>
				{category}
			</button>
		))}
	</div>
);

const SectionDivider = ({ title, subtitle }: { title: string; subtitle?: string }) => (
	<div className="text-center mb-12">
		{subtitle && (
			<span className="text-[#f27d0d] text-sm font-medium tracking-wider uppercase">{subtitle}</span>
		)}
		<h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
			{title}
		</h2>
		<div className="w-20 h-1 bg-gradient-to-r from-[#f27d0d] to-[#ff9a3c] mx-auto mt-4 rounded-full" />
	</div>
);

export default function PassionComponent() {
	const [activeCategory, setActiveCategory] = useState("All");
	const categories = ["All", "Family", "Steak & Meat", "Seafood", "Italian"];

	const shouldShow = (category: string) => activeCategory === "All" || activeCategory === category;

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900 z-10" />
				<div className="absolute inset-0">
					<Image
						src="/about/passion/steak2.jpeg"
						layout="fill"
						objectFit="cover"
						alt="Culinary background"
						priority
					/>
				</div>
				<div className="relative z-20 text-center px-4">
					<p className="text-[#f27d0d] text-lg md:text-xl font-medium tracking-wider uppercase mb-4">
						Beyond the Code
					</p>
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
						My Passion for <span className="text-[#f27d0d]">Cuisine</span>
					</h1>
					<div className="max-w-2xl mx-auto">
						<blockquote className="text-xl md:text-2xl text-gray-200 italic">
							"If you are a chef, no matter how good a chef you are, it's not good
							cooking for yourself; the joy is in cooking for others."
						</blockquote>
						<p className="text-gray-400 mt-3">— Will.i.am</p>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
			</div>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Category Navigation */}
				<CategoryTabs
					categories={categories}
					activeCategory={activeCategory}
					onSelect={setActiveCategory}
				/>

				{/* Family Dish Section */}
				{shouldShow("Family") && (
					<section className="mb-20">
						<SectionDivider title="Family Dish" subtitle="Heritage Recipe" />
						<DishCard
							image="/about/passion/xaxiu.jpg"
							title="Xa Xiu Noodles"
							subtitle="A Special Dish for Family Celebrations"
							caption="Xa Xiu Noodles with Xa Xiu Pork, Steam and Fried Dumpling, Shrimp, Quail Eggs and Bok Choy"
							description={
								<p>
									One of my favorite dishes to prepare at family gatherings and
									anniversaries is <strong className="text-[#f27d0d]">Xa Xiu noodles</strong>. This traditional
									Vietnamese dish, made with egg noodles, tender char siu pork, and
									quail eggs, embodies a world of nostalgic flavors. More than just
									food, preparing meals is a way of showing my love, honoring family
									connections, and cherishing our traditions.
								</p>
							}
						/>
					</section>
				)}

				{/* Steak Section */}
				{shouldShow("Steak & Meat") && (
					<section className="mb-20">
						<SectionDivider title="Steak & Meat" subtitle="Signature Dishes" />

						<DishCard
							image="/about/passion/steak2.jpeg"
							title="Dry-Aged Ribeye"
							subtitle="Rosemary, Thyme & Garlic Butter"
							caption="Dry-Aged Ribeye with Rosemary, Thyme and Garlic Butter"
							description={
								<>
									<p>
										My journey with steak started humbly - a bit comically even. My early
										attempts were, let's say, less than perfect. As Mom described, they
										were burnt, under-seasoned, and rubbery.
									</p>
									<p>
										<em>"Tenaciously"</em>, I threw myself into mastering the art of cooking
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
								</>
							}
							reverse
						/>

						<div className="mt-16">
							<DishCard
								image="/about/passion/steak3.jpg"
								title="Seared Lamb Rack"
								subtitle="The Next Challenge"
								caption="Seared Lamb Rack with Rosemary, Thyme and Garlic Butter"
								description={
									<>
										<p>
											After mastering steak, I felt ready to take on an even more
											challenging ingredient - a rack of lamb. Cooking lamb requires a higher level of precision and care, from the
											seasoning to the sear to ensuring it's cooked to the perfect level of
											doneness.
										</p>
										<blockquote className="border-l-4 border-[#f27d0d] pl-4 italic text-gray-400 my-4">
											"The greater the payoff, the greater the hardship." — Alex Hormozi
										</blockquote>
										<p>
											Despite the added complexity, achieving that delicate, tender meat
											with a crispy herb-crusted exterior was incredibly rewarding to me.
										</p>
									</>
								}
							/>
						</div>
					</section>
				)}

				{/* Seafood Section */}
				{shouldShow("Seafood") && (
					<section className="mb-20">
						<SectionDivider title="Seafood Sensations" subtitle="Ocean Flavors" />

						{/* Seafood Gallery Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
							{[
								{
									image: "/about/passion/seafood1.jpg",
									title: "Pan-Seared Salmon",
									caption: "With mushrooms and asparagus spears"
								},
								{
									image: "/about/passion/seafood2.jpg",
									title: "Herb-Crusted Salmon",
									caption: "With rice, sunny egg, and sautéed veggies"
								},
								{
									image: "/about/passion/seafood3.jpg",
									title: "Crispy Skin Salmon",
									caption: "With asparagus and garlic chips"
								}
							].map((item, index) => (
								<div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800 cursor-pointer">
									<div className="aspect-[4/3] overflow-hidden">
										<Image
											src={item.image}
											width={400}
											height={300}
											quality={100}
											loading="lazy"
											alt={item.title}
											className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
									<div className="absolute bottom-0 left-0 right-0 p-5">
										<h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
										<p className="text-sm text-gray-300">{item.caption}</p>
									</div>
								</div>
							))}
						</div>

						<div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
							<h3 className="text-2xl font-bold text-white mb-4">The Art of Seafood</h3>
							<div className="text-gray-300 leading-relaxed space-y-4">
								<p>
									Simple but delicious, these dishes are all about bringing out the natural
									flavors. Starting with a salmon fillet, I sear it just right to get
									a crispy, golden crust while keeping the inside nice and juicy. Then,
									I pile on some mushrooms sautéed in garlic—those mushrooms soak up all
									the flavor and add a nice, rich taste to the dish.
								</p>
								<p>
									The salmon's skin is seared to golden perfection, adding a satisfying crunch that
									contrasts beautifully with the tender, flaky flesh beneath. Paired
									with freshly roasted asparagus spears and topped with crisp garlic
									chips, this dish is a celebration of simplicity and sophistication.
								</p>
							</div>
						</div>
					</section>
				)}

				{/* Italian Section */}
				{shouldShow("Italian") && (
					<section className="mb-20">
						<SectionDivider title="Italian Cuisine" subtitle="Pasta Perfection" />

						<div className="bg-gradient-to-r from-[#f27d0d]/10 to-transparent rounded-2xl p-8 mb-12 border-l-4 border-[#f27d0d]">
							<p className="text-lg text-gray-300 leading-relaxed">
								Italian cuisine has always held a special place in my heart. The
								simplicity, yet depth of flavor in Italian cooking is like an endless
								canvas of possibilities that never fails to excite me. From rich,
								hearty sauces to delicate pasta dishes, Italy has a cuisine that
								celebrates fresh ingredients, thoughtful preparation, and bold
								flavors—a combination that keeps me coming back for more.
							</p>
						</div>

						<div className="space-y-16">
							<DishCard
								image="/about/passion/sphagheti1.jpg"
								title="Spaghetti Bolognese"
								subtitle="The Classic"
								caption="Spaghetti Bolognese with a sprinkle of fresh parsley"
								description={
									<p>
										Spaghetti Bolognese is one of those dishes that I find myself
										returning to time and time again. There's something incredibly
										comforting about a bowl of al dente spaghetti topped with a rich,
										savory Bolognese sauce. I make mine with tender minced meat, slowly
										simmered in a tomato-based sauce and hints of garlic, onion, and
										herbs. The flavors meld beautifully, creating a symphony of richness
										and family warmth.
									</p>
								}
								reverse
							/>

							<DishCard
								image="/about/passion/sphagheti2.jpg"
								title="Spaghetti con il Tonno"
								subtitle="Simple Elegance"
								caption="Spaghetti con il Tonno - Tuna Pasta"
								description={
									<p>
										Another Italian favorite of mine is Spaghetti con il Tonno. Such a
										beauty of simplicity. Al dente spaghetti is tossed with tender tuna
										flakes, sautéed garlic, a splash of olive oil, and a sprinkle of fresh
										parsley. The result is light yet satisfying, a dish that's as
										comforting as it is flavorful. It reminds me of
										the versatility of Italian cuisine—how just a handful of quality
										ingredients can create something memorable.
									</p>
								}
							/>

							<DishCard
								image="/about/passion/carbo.png"
								title="Seafood Carbonara"
								subtitle="Ocean-Inspired Fusion"
								caption="Seafood Carbonara with pan-seared asparagus"
								description={
									<p>
										Seafood Carbonara has become one of my go-to dishes when I want to
										serve something special. It's a rich, ocean-inspired spin on classic
										carbonara. Instead of the usual pancetta, I like to use fresh
										seafood—plump shrimp, sweet crab, or, if I feel indulgent enough, a
										touch of lobster. The creamy, egg-based sauce, blended with Parmigiano
										Reggiano, coats the pasta perfectly, while the seafood brings in a
										burst of briny flavor that takes the whole dish up a notch.
									</p>
								}
								reverse
							/>
						</div>
					</section>
				)}

				{/* Closing Quote */}
				<div className="py-20">
					<div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-10 md:p-14 border border-gray-700/50 max-w-4xl mx-auto">
						<div className="absolute -top-6 left-10 text-[#f27d0d] text-8xl font-serif opacity-50">"</div>
						<blockquote className="text-center relative z-10">
							<p className="text-xl md:text-2xl lg:text-3xl text-gray-200 italic leading-relaxed">
								Cooking is like love. It should be entered into with abandon or not at all.
							</p>
							<div className="mt-6 flex items-center justify-center gap-3">
								<div className="w-12 h-px bg-[#f27d0d]"></div>
								<p className="text-[#f27d0d] font-medium">Harriet Van Horne</p>
								<div className="w-12 h-px bg-[#f27d0d]"></div>
							</div>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	);
}
