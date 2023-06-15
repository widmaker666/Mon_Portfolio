import React from "react";
import jesus from "../assets/videos/jebusDance.gif";
import grillePain from "../assets/videos/tostadora_100px1.gif";
import ver from "../assets/videos/gusano_60px1.gif";
import cloche from "../assets/videos/campana_60px1.gif";
import bouche from "../assets/videos/boca_90px1.gif";
import reveil from "../assets/videos/reloj_60px1.gif";
import ReactAudioPlayer from "react-audio-player";
import music from "../assets/music/homer.ogg";

const Erreur_404 = () => {
  return (
    <>
      <main className="main-404">
        <div className="music">
          <ReactAudioPlayer src={music} autoPlay controls loop="true" />
        </div>
        <div className="title-404">
          <h1>Homer's Web Site</h1>
        </div>
        <div className="div-404" title="404">
          404
        </div>
        <div className="img-container">
          <img id="pain" src={grillePain} alt="grille pain avec des ailes animé" />
          <img id="ver" src={ver} alt="ver de terre animé" />
          <img id="cloche" src={cloche} alt="cloche animé" />
          <img id="bouche" src={bouche} alt="bouche rose animé" />
          <img id="reveil" src={reveil} alt="reveil animé" />
          <img id="jesus" src={jesus} alt="c'est le jesus qui dance en rond commme dans les simpsons" />
        </div>
        <button className="erreur404">
          <a href="/">Tu ferais mieux de retourner au début</a>
        </button>
      </main>
    </>
  );
};

export default Erreur_404;
