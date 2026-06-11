import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/Services";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AdminPanel from "./components/AdminPanel";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [isAdmin, setIsAdmin] = useState(window.location.hash === "#admin");

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdmin(window.location.hash === "#admin");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <LanguageProvider>
      {isAdmin ? (
        <AdminPanel />
      ) : (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-[#FF6B00] selection:text-white">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Skills />
          <Testimonials />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;