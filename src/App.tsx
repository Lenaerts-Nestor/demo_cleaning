import { useState, useEffect } from "react";
import type { PageSection } from "./types";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState<PageSection>("home");

  // Smooth scroll to section
  const handleNavigate = (section: PageSection) => {
    setActiveSection(section);

    // Scroll to the appropriate section
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const navHeight = 80; // Height of fixed navigation
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections: PageSection[] = [
        "home",
        "about",
        "services",
        "gallery",
        "quote",
      ];
      const scrollPosition = window.scrollY + 100;

      // Check if at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        if (section === "home") continue;
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Services />
      </main>

      <Footer />
    </div>
  );
}

export default App;
