import "src/styles/global.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

function App() {
	return (
		<SmoothScroll>
			<main>
				<Navbar />
				<Hero />
				<div className="h-[500px] bg-black"></div>
			</main>
		</SmoothScroll>
	);
}

export default App;
