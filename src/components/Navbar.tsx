import { useGSAP } from "@gsap/react";
import { gsap } from "lib/gsap";
import { navLinks } from "../../constants/Index";

const Navbar = () => {
	useGSAP(() => {
		gsap.fromTo(
			"nav",
			{
				backgroundColor: "rgba(0, 0, 0, 0)",
			},
			{
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				ease: "none",
				scrollTrigger: {
					trigger: "nav",
					start: "bottom top",
					end: "top top",
					scrub: 1,
				},
			},
		);
	});
	return (
		<nav>
			<div>
				<a href="#home" className="flex items-center gap-2">
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
