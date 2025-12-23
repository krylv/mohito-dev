import "src/styles/global.css";
import About from "./components/About";
import Art from "./components/Art";
import Cocktails from "./components/Cocktails";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

function App() {
	return (
		<>
			<Loader />
			<SmoothScroll>
				<main className="overflow-hidden">
					<Navbar />
					<Hero />
					<Cocktails />
					<About />
					<Art />
					<Menu />
					<Footer />
				</main>
			</SmoothScroll>
		</>
	);
}

export default App;
