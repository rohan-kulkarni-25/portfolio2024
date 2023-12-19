import AboutMe from "./components/AboutMe";
import Hero from "./components/Header/Hero";
import { FaAngleDoubleDown } from "react-icons/fa";
import ToolKit from "./components/ToolKit";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <div className="bg-yellow-200 w-fit mx-auto p-8 rounded-2xl text-center text-2xl ">
        Fusing Passion with Community: Co-Creating Experiences at
        <span className="font-bold italic"> React India </span>
        and Sparking Innovation with
        <span className="font-bold italic"> Hack The League</span>.
      </div>

      <AboutMe />
      {/* <ToolKit /> */}
      <Footer />
    </div>
  );
};

export default App;
