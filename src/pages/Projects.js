import React from "react";
import Navbar from "../components/Navbar";
import { IconSquareChevronLeft, IconSquareChevronRight } from "@tabler/icons-react";
import msc from "../assets/images/logoMsc.webp";
import game from "../assets/images/game.webp";
import miss from "../assets/videos/Logo.gif";
import mscWeb from "../assets/images/museum.webp";
import oldskool from "../assets/images/FireShot Capture 009 - Oldskoolgaming - oldschoolgaming.fly.dev.png";
import missCamille from "../assets/images/missCamille.webp";
import NavbarMsc from "../components/NavbarMsc";

const Projects = () => {
  return (
    <>
      <section className="project">
        <Navbar />
        <div className="intro-container">
          <div className="grid-intro">
            <div className="img-msc">
              <img src={msc} alt="" />
            </div>
            <div className="text1">
              <h1>MES</h1>
            </div>
            <div className="img-miss">
              <img src={miss} alt="" />
            </div>
            <div className="text2">
              <h1>différents</h1>
            </div>
            <div className="img-game">
              <img src={game} alt="" />
            </div>
            <div className="text3">
              <h1>PROJETS</h1>
            </div>
          </div>
        </div>
        <div className="arrow-right">
          <a href="#msc">
            <IconSquareChevronRight size={100} color="black" stroke={1.5} />
          </a>
        </div>
        <section className="msc-carousel" id="msc">
          <NavbarMsc />
          <div className="carousel-container">
            {/* pour le carousel grâce à une animation css en hover faire passer différentes photos du projet MSC et des autres projets selon le projets */}
            <button className="switch-left">
              <IconSquareChevronLeft size={70} color="black" stroke={1.5} />
            </button>
            <div className="carousel">
              <div className="img-1">
                <img id="mscWeb" src={mscWeb} alt="" />
              </div>
              <div className="img-2">
                <img id="oldskool" src={oldskool} alt="" />
              </div>
              <div className="img-3">
                <img id="missCamille" src={missCamille} alt="" />
              </div>
            </div>
            <button className="switch-right">
              <IconSquareChevronRight size={70} color="black" stroke={1.5} />
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
