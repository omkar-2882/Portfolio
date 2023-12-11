import About from "./components/About/About";
import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
import Hero2 from "./components/hero/Hero2";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Portfolio2 from "./components/portfolio/Portfolio2";
import Cursor from "./components/cursor/Cursor";

const App = () => {
	return (
		<div>
			{/* <Cursor /> */}
			<section id="Homepage">
				<Navbar />
				<Hero2 />
			</section>
			<section id="About">
				<About/>
			</section>
			{/* <section>
        		<Services />
      		</section> */}
			<section id="Portfolio">
				<Parallax type="portfolio" />
			</section>
			<section id="Projects">
				<Portfolio2 />
			</section>
			<section id="Contact">
				<Contact />
			</section>
		</div>
	);
};

export default App;
