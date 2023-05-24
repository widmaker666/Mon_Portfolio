import React from "react";
import Navbar from "../components/Navbar";
import Title from "./Title";
import LightBtn from "../components/LightBtn";
import PhotoHeader from "../assets/images/header.webp";
import {
  IconCircleChevronDown,
  IconCircleChevronUp,
} from "@tabler/icons-react";
import Formation from "./Formation";

const Home = () => {
  const handleClickImg = () => {
    //! text-container transition
    container.style.opacity = 1;
    container.style.visibility = "visible";
    container.style.transition = "1s ease-in-out";
    container.style.transform = "none";
    //! Click img
    imgContainer.style.cursor = "none";
    imgContainer.style.transform = "translateX(-80%)";
    imgContainer.style.border = "3px solid black";
    imgContainer.style.borderRadius = "0 0 0 400px";
    imgContainer.style.transition = "0.8s ease-in-out";
  };

  return (
    <>
      <LightBtn />
      <Title />
      <section className="home" id="home">
        <Navbar />
        <div className="home-container">
          <div className="image-header">
            <img
              src={PhotoHeader}
              alt=""
              onClick={handleClickImg}
              id="imgContainer"
            />
          </div>
          <div className="text-container-header" id="container">
            <div>
              <p id="text1">
                Moi c’est Alexandre, nouveau depuis peu dans le monde du
                développement web.
              </p>
            </div>
            <div id="text2">
              <p>
                Formé par The Hacking Project avec plus de 1200h et le RNCP5
                (Dev Web), plus un stage de 2 mois en entreprise pour Miss
                Camille, créatrice de bijoux.
              </p>
            </div>
            <div id="text3">
              <p>
                Je veux me faire une place rapidement pour vous donner un aperçu
                de qui je suis. Je n’ai peux être pour l’instant pas beaucoup de
                choses à vous montrer mais ces choses existent pourtant et je
                compte bien continuer à abreuver ma soif de connaissance dans ce
                milieu qui me plaît de plus en plus à mesure que j’avance et que
                je code.
              </p>
            </div>
            <div id="text4">
              <p>
                J’adore travailler en équipe car on ne peut que progresser grâce
                aux autres. Mon but serait de pouvoir prendre les commandes
                d’une équipe et devenir lead Dev d’un projet pour partager mes
                connaissances et mener à bien le projet ensemble.
              </p>
            </div>
            <div id="text5">
              <p>
                Les technologies sur lesquelles j’ai travaillé sont :{" "}
                <strong>
                  Ruby et Rails, Html, CSS, SASS, Javascript, ReactJS.
                </strong>{" "}
              </p>
            </div>
            <div id="text6">
              <p>
                Mais j’aimerais me tourner vraiment sur
                <strong>JAVASCRIPT/REACT/NEXT/EXPRESS/VUE/PYTHON</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="arrow-down-home">
          <a href="#formation" id="arrow">
            <IconCircleChevronDown size={51} color="black" stroke={1} />
          </a>
        </div>
      </section>
      <section id="formation">
       
        <Formation />
        <div className="arrow-up-home">
          <a href="#home" id="arrow">
            <IconCircleChevronUp size={51} color="black" stroke={1} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
