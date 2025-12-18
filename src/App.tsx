import "src/styles/global.css";
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
			</main>
		</SmoothScroll>
	);
}

export default App;
