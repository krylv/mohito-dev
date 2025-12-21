"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "lib/gsap";
import { useRef, useState } from "react";
import { sliderLists } from "../../constants/Index";

const Menu = () => {
	const [currentCocktail, setCurrentCocktail] = useState(0);
	const isRightDirectionRef = useRef<boolean>(true);

	useGSAP(() => {
		const leafBouncing = gsap.timeline();

		gsap.fromTo(
			"#title",
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1,
			},
		);
		gsap.fromTo(
			".cocktail img",
			{
				opacity: 0,
				xPercent: isRightDirectionRef.current ? -100 : 100,
			},
			{
				xPercent: 0,
				opacity: 1,
				duration: 0.7,
				ease: "back.out",
			},
		);

		gsap.fromTo(
			".details h2",
			{
				yPercent: 100,
				opacity: 0,
			},
			{
				yPercent: 0,
				opacity: 1,
				ease: "power1.inOut",
			},
		);
		gsap.fromTo(
			".details p",
			{
				yPercent: 100,
				opacity: 0,
			},
			{
				yPercent: 0,
				opacity: 1,
				ease: "power1.inOut",
			},
		);

		leafBouncing
			.to("#m-right-leaf", {
				x: -30,
				duration: 0.5,
				yoyo: true,
				repeat: 1,
				ease: "back.out",
			})
			.to(
				"#m-left-leaf",
				{
					x: 30,
					repeat: 1,
					duration: 0.5,
					yoyo: true,
					ease: "back.out",
				},
				0,
			);
	}, [currentCocktail]);

	useGSAP(() => {
		const leafParallax = gsap.timeline({
			scrollTrigger: {
				trigger: "#menu",
				start: "top center",
				end: "center top",
				scrub: true,
			},
		});

		leafParallax
			.to("#m-right-leaf", {
				yPercent: 50,
				rotate: 45,
				xPercent: 20,
			})
			.to(
				"#m-left-leaf",
				{
					yPercent: -50,
					rotate: 45,
					xPercent: -20,
				},
				0,
			);
	});

	const totailCocktails = sliderLists.length;

	const goToSlide = (
		id: number,
		direction: "forward" | "backward" = "forward",
	) => {
		isRightDirectionRef.current = direction === "forward";
		const newId = (id + totailCocktails) % totailCocktails;

		setCurrentCocktail(newId);
	};

	const getCocktailAt = (indexOffset: number) => {
		return sliderLists[
			(currentCocktail + indexOffset + totailCocktails) % totailCocktails
		];
	};

	const cocktail = getCocktailAt(0);
	const prevCocktail = getCocktailAt(-1);
	const nextCocktail = getCocktailAt(+1);
	return (
		<section id="menu" aria-labelledby="menu-heading">
			<img
				src="/images/footer-left-leaf.png"
				alt="left-leaf"
				id="m-left-leaf"
			/>
			<img
				src="/images/footer-right-leaf.png"
				alt="right-leaf"
				id="m-right-leaf"
			/>
			<h2 id="menu-heading" className="sr-only">
				Cocktail Menu
			</h2>
			<nav className="cocktail-tabs" aria-label="Cocktail Navigation">
				{sliderLists.map((cocktail, idx) => {
					const isActive = idx === currentCocktail;
					return (
						<button
							type="button"
							key={cocktail.id}
							className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
							onClick={() => goToSlide(idx)}
						>
							{cocktail.name}
						</button>
					);
				})}
			</nav>
			<div className="content">
				<div className="arrows">
					<button
						type="button"
						className="text-left"
						onClick={() => goToSlide(currentCocktail - 1, "backward")}
					>
						<span>{prevCocktail.name}</span>
						<img
							src="/images/right-arrow.png"
							alt="right-arrow"
							aria-hidden="true"
						/>
					</button>
					<button
						type="button"
						className="text-left"
						onClick={() => goToSlide(currentCocktail + 1)}
					>
						<span>{nextCocktail.name}</span>
						<img
							src="/images/left-arrow.png"
							alt="left-arrow"
							aria-hidden="true"
						/>
					</button>
				</div>
				<div className="cocktail">
					<img src={cocktail.image} alt="" className="object-contain" />
				</div>
				<div className="recipe">
					<div className="info">
						<p>Recipe for:</p>
						<p id="title">{cocktail.name}</p>
					</div>
					<div className="details">
						<h2>{cocktail.title}</h2>
						<p>{cocktail.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
