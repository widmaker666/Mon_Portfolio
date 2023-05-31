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
          <img id="pain" src={grillePain} alt="" />
          <img id="ver" src={ver} alt="" />
          <img id="cloche" src={cloche} alt="" />
          <img id="bouche" src={bouche} alt="" />
          <img id="reveil" src={reveil} alt="" />
          <img id="jesus" src={jesus} alt="" />
        </div>
        <button className="erreur404">
          <a href="/">Tu ferais mieux de retourner au début</a>
        </button>
      </main>
    </>
  );
};

export default Erreur_404;
