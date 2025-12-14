import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "lib/gsap";
import type { FC, PropsWithChildren } from "react";

const SmoothScroll: FC<PropsWithChildren> = ({ children }) => {
	useGSAP(() => {
		let smoother = ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
		});
	}, []);
	return (
		<div id="smooth-wrapper">
			<div id="smooth-content">{children}</div>
		</div>
	);
};

export default SmoothScroll;
