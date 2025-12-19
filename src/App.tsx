import "src/styles/global.css";
import About from "./components/About";
import Art from "./components/Art";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
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
				<Art />
				<Menu />
			</main>
		</SmoothScroll>
	);
}

export default App;
