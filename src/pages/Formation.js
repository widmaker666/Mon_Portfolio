import React from "react";
import paint1 from "../assets/images/fenetre.webp";
import paint2 from "../assets/images/dali.webp";
import LogoMsc from "../assets/images/logoMsc.webp";

const Formation = () => {
  return (
    <>
      <section className="formation">
        <div className="title-container">
          <div id="title">
            <h1>the hacking project</h1>
          </div>
          <div id="mid-title">
            <h2>Formation Web Developpeur</h2>
          </div>
          <div id="paragraph">
            <p>
              RNCP5(BAC+2) sur 6 mois avec plus de 1200h, validé par 2 mois de
              stage (sept 2022 - mai 2023)
            </p>
          </div>
        </div>
        <div className="msc">
          <div className="title-mid">
            <h3 className="color-title">
              Projet Validant de la formationTHP : <span>MARS 2023</span>
            </h3>
          </div>
          <div className="paint-1">
            <img src={paint1} alt="" />
          </div>
          <div className="paint-2">
            <img src={paint2} alt="" />
          </div>
          <div className="prez-container">
            <p>
              Développement d'une plateforme permettant la visite d'oeuvres
              d'arts du Metropolitan museum de Chicago.
            </p>

            <h5>
              Projet :{" "}
              <a href="https://museum-sheet-cheat.netlify.app">
                Museum Sheet Cheat
              </a>
            </h5>
            <h6>
              Github :{" "}
              <a href="https://github.com/widmaker666/MuseumSheetCheat_Plateform">
                Projet Github
              </a>
            </h6>
          </div>
          <div className="utilities-container">
            <ul>
              <li>Creation d'un cahier des charges avec Trello</li>
              <li>Figma pour la maquette graphique UI/UX</li>
              <li>
                Travail en équipe, utilisation de git et github pour travailler
              </li>
              <li>
                Réalisation d'un systeme d'authentification via Firebase + envoi
                de mailsautomatisés
              </li>
              <li>Formulaire contact fait avec EMAILJS</li>
              <li>Utilisation de l'API museum chicago</li>
            </ul>
          </div>
          <div className="logo-msc">
            <img src={LogoMsc} alt="" />
          </div>
          <div className="techno-container">
            <h5>Technologies utilisées : </h5>
            <p>
              React / Firebase / emailjs / javascript / sass / html / css /
              Netlify / Github
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Formation;
