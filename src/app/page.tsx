import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Hero />
      <About />
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
