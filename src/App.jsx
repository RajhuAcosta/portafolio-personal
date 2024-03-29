import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import PhilosophyAndValues from "./components/PhilosophyAndValues";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillSet from "./components/SkillSet";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div id="home" className="font-[Sen] min-h-screen">
      <Header windowWidth={windowWidth} />
      <Presentation />
      {/* <WorkExperience/> */}
      <PhilosophyAndValues />
      <SkillSet />
      <MyProjects />
      {/* <Dribbble/> */}
      <Contact useForm={useForm} ValidationError={ValidationError} />
      <Footer windowWidth={windowWidth} />
    </div>
  );
}

export default App;
