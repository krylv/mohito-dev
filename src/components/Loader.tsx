import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "lib/gsap";
import { useEffect, useRef, useState } from "react";

const Loader = () => {
	const [isContentLoaded, setIsContentLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [canEndAnimate, setCanEndAnimate] = useState(false);

	useGSAP(() => {
		const title = SplitText.create("#logo_title", { type: "chars" });

		const circleTimeline = gsap.timeline({
			repeat: 0,
			onComplete: () => {
				setCanEndAnimate(true);
			},
		});

		circleTimeline
			.fromTo(
				title.chars,
				{
					opacity: 0,
					top: (idx) => (idx % 2 === 0 ? 100 : -100),
					rotate: (idx) => (idx % 2 === 0 ? 180 : 180),
				},
				{
					opacity: 1,
					top: 0,
					left: 0,
					rotate: 0,
					stagger: 0.3,
					ease: "back.inOut",
				},
			)
			.to(
				".leaf",
				{
					opacity: 1,
					left: (idx: number) => {
						return idx % 2 === 0 ? 40 : 300;
					},
					top: (idx: number) => {
						return idx % 2 === 0 ? 40 : 70;
					},
					rotate: -90,
					stagger: 0.5,
					ease: "power3.inOut",
				},
				"-=0.5",
			);
	});

	useEffect(() => {
		document.documentElement.classList.add("lock_scroll");
		const handleLoad = () => {
			setIsContentLoaded(true);
		};

		if (document.readyState === "complete") {
			setIsContentLoaded(true);
		} else {
			window.addEventListener("load", handleLoad);
		}

		return () => {
			window.removeEventListener("load", handleLoad);
			document.documentElement.classList.remove("lock_scroll");
		};
	}, []);

	useEffect(() => {
		if (isContentLoaded && canEndAnimate) {
			setIsLoading(false);
			document.documentElement.classList.remove("lock_scroll");
		}
	}, [isContentLoaded, canEndAnimate]);

	if (isLoading)
		return (
			<div className="loader">
				<div className="flex box gap-[3px] justify-center items-center relative h-full w-full  p-2 rounded-2xl">
					<h2 className="text-[120px] flex absolute uppercase" id="logo_title">
						Mojito
						<img
							src="/images/leafMojito.svg"
							alt="min leafes"
							className="absolute size-15 top-1/2 left-1/2 opacity-0 -z-10 leaf "
						/>
						<img
							src="/images/leafMojito.svg"
							alt="min leafes"
							className="absolute size-15 top-1/2 left-1/2  -z-10  opacity-0 leaf "
						/>
					</h2>
				</div>
			</div>
		);
	return;
};

export default Loader;
