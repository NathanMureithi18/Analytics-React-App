import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "flowbite";
import "./index.css";
import "./App.css";

function App() {
	return (
		<div>
			<NavBar />
			<Hero />
			<Analytics />
			<Newsletter />
			<Cards />
			<Footer />
			{/* Other components */}
		</div>
	);
}

export default App;
