import React from "react";
import paint1 from "../assets/images/fenetre.webp";
import paint2 from "../assets/images/dali.webp";
import LogoMsc from "../assets/images/logoMsc.webp";
import gameboy from "../assets/images/game.webp";
import ruy from "../assets/videos/ruy.gif";
import missCamille from "../assets/images/IMG_0056.jpg";
import logoCamille from "../assets/videos/Logo.gif";

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
          <div className="paint-1 active-left">
            <img src={paint1} alt="" />
          </div>
          <div className="paint-2 active-right">
            <img src={paint2} alt="" />
          </div>
          <div className="prez-container">
            <p>
              Développement d'une plateforme permettant la visite d'oeuvres
              d'arts du Metropolitan museum de Chicago.
            </p>

            <h5>
              Projet :{" "}
              <a target="_blank" href="https://museum-sheet-cheat.netlify.app">
                Museum Sheet Cheat
              </a>
            </h5>
            <h6>
              Github :{" "}
              <a
                target="_blank"
                href="https://github.com/widmaker666/MuseumSheetCheat_Plateform"
              >
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
        <div className="oldSkool">
          <div className="title-mid">
            <h3 className="color-title">
              Projet Validant de la formationTHP : <span>DEC 2023</span>
            </h3>
          </div>
          <div className="gameboy">
            <img src={gameboy} alt="" />
          </div>
          <div className="prez-container">
            <p>
              Développement d'une plateforme commerciale de vente de console
              vintage.
            </p>

            <h5>
              Projet :{" "}
              <a target="_blank" href="https://oldschoolgaming.fly.dev">
                Old Skool Gaming
              </a>
            </h5>
            <h6>
              Github :{" "}
              <a
                target="_blank"
                href="https://github.com/widmaker666/Old_Skool_Gaming_Site_web"
              >
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
              <li>réalisation d'un systeme d'authentification (devise)</li>
              <li>Mise en place d'un backend avec Ruby on rails</li>
              <li>Gestion des paiement (stripe)</li>
              <li>Utilisation de Bootstrap</li>
            </ul>
          </div>
          <div className="ruy">
            <img src={ruy} alt="" />
          </div>
          <div className="techno-container">
            <h5>Technologies utilisées : </h5>
            <p>
              Ruby on rails/ javascript / sass / html / css / Fly.io / Github /
              postgresql
            </p>
          </div>
        </div>
        <div className="miss-container">
          <div id="title">
            <h1>STAGE ENTREPRISE AVRIL/MAI 2023</h1>
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
        <div className="miss-camille">
          <div className="title-mid">
            <h3 className="color-title">
              Site vitrine Miss Camille créatrice de bijoux
            </h3>
          </div>
          <div className="img-miss">
            <img src={missCamille} alt="" />
          </div>
          <div className="prez-container">
            <p>Conception du site vitrine pour Miss Camille de bijoux</p>

            <h5>
              Projet :{" "}
              <a
                target="_blank"
                href="https://miss-camille-bijoux.netlify.app/"
              >
                Miss Camille Vitrine
              </a>
            </h5>
            <h6>
              Github :{" "}
              <a
                target="_blank"
                href="https://github.com/widmaker666/site-vitrine_miss-camille"
              >
                Projet Github (private)
              </a>
            </h6>
          </div>
          <div className="utilities-container">
            <ul>
              <li>
                Cahier des charges effectué en relation avec la créatrice sur
                TRELLO
              </li>
              <li>Maquette UI/UX (figma) réalisée</li>
              <li>Site vitrine créé en Html / Sass</li>
              <li>Animation en Javascript Vanilla</li>
              <li>Adaptation du site de façon responsive</li>
              <li>Formulaire de contact avec EMAILJS</li>
            </ul>
          </div>
          <div className="logoMiss">
            <img src={logoCamille} alt="" />
          </div>
          <div className="techno-container">
            <h5>Technologies utilisées : </h5>
            <p>Javascript / SASS / HTML / CSS / Netlify / Github / EmailJS</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Formation;
