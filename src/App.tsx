import "src/styles/global.css";
import About from "./components/About";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

function App() {
	return (
		<SmoothScroll>
			<main className="overflow-hidden">
				<Navbar />
				<Hero />
				<Cocktails />
				<About />
			</main>
		</SmoothScroll>
	);
}

export default App;
