import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Portfolio from "./components/Projects/Portfolio";
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
      <ScrollUp />
    </>
  );
}

export default App;
