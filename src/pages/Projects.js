import React from "react";
import Navbar from "../components/Navbar";
import {
  IconSquareChevronLeft,
  IconSquareChevronRight,
} from "@tabler/icons-react";
import msc from "../assets/images/logoMsc.webp";
import game from "../assets/images/game.webp";
import miss from "../assets/videos/Logo.gif";
import { NavLink } from "react-router-dom";

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
        <NavLink className="navlink" to="/projects/carousels">
          <IconSquareChevronRight size={100} color="black" stroke={1.5} />
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Projects;
