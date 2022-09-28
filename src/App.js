import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Intro from "./components/Intro/Intro.js";
import Direction from "./components/Direction/Direction.js";
import Footer from "./components/Footer/Footer.js";

// scss Styles
import "./components/variables.scss"

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Intro />
        <Direction />
        <Footer />
      </main>
    </>
  );
}

export default App;
