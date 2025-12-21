import { useGSAP } from "@gsap/react";
import { gsap } from "lib/gsap";
import { openingHours, socials, storeInfo } from "../../constants/Index";

const Footer = () => {
	useGSAP(() => {
		const leafTweek = gsap.timeline({
			scrollTrigger: {
				trigger: "#contact",
				start: "top 65%",
				end: "top top",
				scrub: true,
			},
		});

		leafTweek
			.to("#f-right-leaf", {
				yPercent: 10,
				rotate: 45,
				x: 20,
			})
			.to("#f-left-leaf", {
				yPercent: -10,
				rotate: 45,
				x: -20,
			});
	});
	const { address, contact, heading } = storeInfo;
	return (
		<footer id="contact">
			<div className="noisy" />
			<img
				src="/images/footer-left-leaf.png"
				alt="left-leaf"
				id="f-left-leaf"
			/>
			<img
				src="/images/footer-right-leaf.png"
				alt="right-leaf"
				id="f-right-leaf"
			/>
			<div className="content">
				<h2>{heading}</h2>
				<div>
					<h3>Visit our store</h3>
					<p>{address}</p>
				</div>
				<div>
					<h3>Contact us</h3>
					<p>{contact.phone}</p>
					<p>{contact.email}</p>
				</div>
				<div>
					<h3>Open every day</h3>
					{openingHours.map(({ day, time }) => (
						<p key={day}>{`${day}:${time}`}</p>
					))}
				</div>
				<div>
					<h4 className="mb-2">Socials</h4>
					<div className="flex justify-center gap-5">
						{socials.map((social) => (
							<a href={social.url} aria-label={social.name} key={social.name}>
								<img src={social.icon} alt={social.name} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
