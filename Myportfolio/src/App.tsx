import About from "./components/About";
import Contact from "./components/contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/Socials";

function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
      <SocialLinks/>
    </div>
  );
}

export default App;
