import { useGSAP } from "@gsap/react";
import { navLinks } from "constants/index";
import { gsap } from "lib/gsap";

const Navbar = () => {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: "nav",
				start: "bottom top",
			},
		});

		navTween.fromTo(
			"nav",
			{ backgroundColor: "transparent" },
			{
				backgroundColor: "#00000050",
				filter: "blur(10px)",
				duration: 1,
				ease: "power1.inOut",
			},
		);
	});
	return (
		<nav>
			<div className="flex justify-between flex-col gap-y-3">
				<a href="#home" className="flex  justify-center items-center gap-2">
					<img src="/images/logo.png" alt="logo" className="size-8" />
					<p className="text-[2rem]">Velvet Pour</p>
				</a>
				<ul className="flex justify-center items-center gap-7">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className="hover:scale-110 transition-transform text-[1rem]"
						>
							<a href={`${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
