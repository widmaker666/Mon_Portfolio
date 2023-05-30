import React, { useEffect } from "react";
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Carousel from "./pages/Carousel";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Erreur_404 from "./pages/Erreur_404";

const App = () => {


  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/carousels" element={<Carousel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Erreur_404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
