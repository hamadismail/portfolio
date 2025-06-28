import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Projects/Portfolio";
import Publications from "./components/Publications/Publications";
import Qualification from "./components/Qualification/Qualification";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Publications />
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
