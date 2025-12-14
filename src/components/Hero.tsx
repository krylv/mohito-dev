import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "lib/gsap";

const Hero = () => {
	useGSAP(() => {
		const heroSplit = new SplitText(".title", { type: "chars,words" });
		const paragraphSplit = new SplitText(".sub-content", {
			type: "lines",
		});
		heroSplit.chars.forEach((char) => {
			char.classList.add("text-gradient");
		});
		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.7,
			opacity: 0,
			ease: "expo.out",
			stagger: 0.05,
		});

		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.06,
			delay: 1,
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#hero",
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			})
			.to(
				".right-leaf",
				{
					y: 200,
				},
				0,
			)
			.to(
				".left-leaf",
				{
					y: -200,
				},
				0,
			);
	}, []);

	return (
		<section id="hero" className="overflow-hidden">
			<div className="noisy " />
			<h1 className="title">MOJITO</h1>
			<img
				alt="left-leaf"
				src="/images/hero-left-leaf.png"
				className="left-leaf"
			/>
			<img
				alt="right-leaf"
				src="/images/hero-right-leaf.png"
				className="right-leaf"
			/>
			<div className="body">
				<div className="content">
					<div className="space-y-5 hidden md:block">
						<p>Coll.Crisp.Classic</p>
						<p className="sub-content">
							Sip the Spirit <br /> of Summer
						</p>
					</div>
					<div className="view-cocktails">
						<p className="sub-content">
							Every cocktail on our menu is a blend of premium ingredients,
							creative flair, and timless recipes - designed to delight your
							senses.
						</p>
						<a href="#cocktails">View cockatils</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
