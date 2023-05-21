import React from "react";
import Navbar from "../components/Navbar";
import Title from "./Title";
import LightBtn from "../components/LightBtn";
import PhotoHeader from "../assets/images/header.webp";

const Home = () => {
  return (
    <>
      <LightBtn />
      <Title />
      <section className="home" id="home">
        <Navbar />
        <div className="image-header">
          <img src={PhotoHeader} alt="" />
        </div>
        <div className="text-container-header">
          <div className="text1">
            <p className="text1">
              Moi c’est Alexandre, nouveau depuis peu dans le monde du
              développement web.
            </p>
          </div>
          <div className="text2">
            <p className="text2">
              Formé par The Hacking Project avec plus de 1200h et le RNCP5 (Dev
              Web), plus un stage de 2 mois en entreprise pour Miss Camille,
              créatrice de bijoux.
            </p>
          </div>
          <div className="text3">
            <p className="text3">
              Je veux me faire une place rapidement pour vous donner un aperçu
              de qui je suis. Je n’ai peux être pour l’instant pas beaucoup de
              choses à vous montrer mais ces choses existent pourtant et je
              compte bien continuer à abreuver ma soif de connaissance dans ce
              milieu qui me plaît de plus en plus à mesure que j’avance et que
              je code.
            </p>
          </div>
          <div className="text4">
            <p className="text4">
              J’adore travailler en équipe car on ne peut que progresser grâce
              aux autres. Mon but serait de pouvoir prendre les commandes d’une
              équipe et devenir lead Dev d’un projet pour partager mes
              connaissances et mener à bien le projet ensemble.
            </p>
          </div>
          <div className="text5">
            <p className="text5">
              Les technologies sur lesquelles j’ai travaillé sont : Ruby et
              Rails, Html, CSS, SASS, Javascript, ReactJS.{" "}
            </p>
          </div>
          <div className="text6">
            <p className="text6">
              Mais j’aimerais me tourner vraiment sur
              JAVASCRIPT/REACT/NEXT/EXPRESS/VUE/PYTHON
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
