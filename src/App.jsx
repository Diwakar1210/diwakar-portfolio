import React,{useEffect} from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Project />
      {/* <Contact/> */}
      <Footer />
    </>
  );
}
export default App;
