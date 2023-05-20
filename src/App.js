import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./styles/pages/Home";
import Projects from "./styles/pages/Projects";
import Carousel from "./styles/pages/Carousel";
import About from "./styles/pages/About";
import Contact from "./styles/pages/Contact";
import Erreur_404 from "./styles/pages/Erreur_404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/carousels" element={<Carousel />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Erreur_404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
