import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const Loader = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [canEndAnimate, setCanEndAnimate] = useState(false);

	useGSAP(() => {});

	useEffect(() => {
		const loadContent = () => {
			setIsLoading(false);
			document.documentElement.classList.remove("lock_scroll");
		};
		if (document.readyState === "complete") {
			setIsLoading(false);
			return;
		}
		window.addEventListener("load", loadContent);
		addEventListener("DOMContentLoaded", loadContent);

		return () => {
			window.removeEventListener("load", loadContent);
			document.removeEventListener("DOMContentLoaded", loadContent);
		};
	}, []);

	if (isLoading) return <div className="loader">Mojito</div>;
	return;
};

export default Loader;
