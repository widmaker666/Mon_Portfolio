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
import { TypeAnimation } from "react-type-animation";

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
                <TypeAnimation
                  sequence={[
                    `Moi c’est Alexandre, nouveau depuis peu dans le monde du
                    développement web.`,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={60}
                  style={{
                    fontSize: "1em",
                    fontFamily: "$font-paragraph-light",
                    display: "inline-block",
                  }}
                />
              </p>
            </div>
            <div id="text2">
              <p>
                <TypeAnimation
                  sequence={[
                    ` Formé par The Hacking Project avec plus de 1200h et le RNCP5
                    (Dev Web), plus un stage de 2 mois en entreprise pour Miss
                    Camille, créatrice de bijoux.`,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={60}
                  style={{
                    fontSize: "1em",
                    fontFamily: "$font-paragraph-light",
                    display: "inline-block",
                  }}
                />
              </p>
            </div>
            <div id="text3">
              <p>
                <TypeAnimation
                  sequence={[
                    `Je veux me faire une place rapidement pour vous donner un aperçu
                    de qui je suis. Je n’ai peux être pour l’instant pas beaucoup de
                    choses à vous montrer mais ces choses existent pourtant et je
                    compte bien continuer à abreuver ma soif de connaissance dans ce
                    milieu qui me plaît de plus en plus à mesure que j’avance et que
                    je code.`,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={60}
                  style={{
                    fontSize: "1em",
                    fontFamily: "$font-paragraph-light",
                    display: "inline-block",
                  }}
                />
              </p>
            </div>
            <div id="text4">
              <p>
                <TypeAnimation
                  sequence={[
                    `J’adore travailler en équipe car on ne peut que progresser grâce
                    aux autres. Mon but serait de pouvoir prendre les commandes
                    d’une équipe et devenir lead Dev d’un projet pour partager mes
                    connaissances et mener à bien le projet ensemble.`,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={60}
                  style={{
                    fontSize: "1em",
                    fontFamily: "$font-paragraph-light",
                    display: "inline-block",
                  }}
                />
              </p>
            </div>
            <div id="text5">
              <p>
                <TypeAnimation
                  sequence={[
                    `Les technologies sur lesquelles j’ai travaillé sont : `,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={60}
                  style={{
                    fontSize: "1em",
                    fontFamily: "$font-paragraph-light",
                    display: "inline-block",
                  }}
                />
                <strong>
                  Ruby et Rails, Html, CSS, SASS, Javascript, ReactJS.
                </strong>{" "}
              </p>
            </div>
            <div id="text6">
              <p>
                <TypeAnimation
                  sequence={[`Mais j’aimerais me tourner vraiment sur : `]}
                  wrapper="span"
                  cursor={true}
                  speed={60}
                  style={{
                    fontSize: "1em",
                    fontFamily: "$font-paragraph-light",
                    display: "inline-block",
                  }}
                />

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
