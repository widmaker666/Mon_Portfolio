import React, { useState } from "react";

//-Site MSC img //
import mscWeb from "../assets/images/museum.webp";
import wallpaperMsc from "../assets/images/marbre.webp";

//-OldSkool Site Img //
import oldskool from "../assets/images/FireShot Capture 009 - Oldskoolgaming - oldschoolgaming.fly.dev.png";

//-Site missCamille //
import missCamille from "../assets/images/missCamille.webp";

import {
  IconSquareChevronLeft,
  IconSquareChevronRight,
} from "@tabler/icons-react";
import Navbar from "../components/Navbar";
import NavBarMsc from "../components/NavBarMsc";

const Carousel = () => {
  const [count, setCount] = useState(1);
  const projects = 2;

  const handleClickCarouselRight = () => {
    const addCount = count + 1;
    setCount(count >= projects ? 1 : addCount);
    switch (count) {
      case 1:
        //! Old skool //
        document.getElementById("oldskool").style.zIndex = 1;
        document.querySelector(".switch-left").style.display = "block";
        document.querySelector(".old-carousel").style.background =
          "linear-gradient(33deg, #d1d1d1 0%, #364989 32%, #10162f 100%)";
        //! Arrow Switch //
        document.querySelector(".switch-left").style.display = "none";
        //! changement de style pour chaque projet //
        const navLiOld = document.querySelectorAll("li");
        
        navLiOld.forEach((liStyle) => {
          liStyle.style.border = "3px solid white";
          liStyle.style.color = "white";
          liStyle.style.fontFamily = "Press Start K";
          liStyle.style.fontSize = "0.85rem";
          liStyle.style.background = "none";
        });
        break;
      case 2:
        //! Old skool //
        document.getElementById("oldskool").style.zIndex = 0;
        document.querySelector(".old-carousel").style.backgroundImage = "none";
        const navLiOldOff = document.querySelectorAll("li");
        
        navLiOldOff.forEach((liStyle) => {
          liStyle.style.border = "1px solid #EDC455";
          liStyle.style.color = "#e6c619";
          liStyle.style.fontFamily = 'Alumni Sans';
          liStyle.style.fontWeight = '400';
          liStyle.style.fontSize = "2.5rem";
          liStyle.style.letterSpacing = "1px";
          liStyle.style.background = "none";
          
        });

        //! Miss camille //
        document.getElementById("missCamille").style.zIndex = 1;

        document.querySelector(".miss-carousel").style.backgroundImage =
          "linear-gradient(10deg, #FAD961 0%, #F76B1C 33%, #000000 66%, #000000 100%)";
        //! MSC //
        document.getElementById("mscWeb").style.zIndex = 0;

        //! Arrow Switch //
        document.querySelector(".switch-right").style.display = "none";
        document.querySelector(".switch-left").style.display = "block";
        break;

      default:
        break;
    }
  };

  const handleClickCarouselLeft = () => {
    switch (count) {
      case 1:
        //! miss camille //
        document.getElementById("missCamille").style.zIndex = 0;
        document.querySelector(".miss-carousel").style.backgroundImage = "none";

        //! old skool //
        document.getElementById("oldskool").style.zIndex = 0;

        //! MSC //
        document.getElementById("mscWeb").style.zIndex = 1;
        document.querySelector(
          ".msc-carousel"
        ).style.background = `url('${wallpaperMsc}') center/cover`;
        const navLiOldOff = document.querySelectorAll("li");
        
        navLiOldOff.forEach((liStyle) => {
          liStyle.style.border = "1px solid black";
          liStyle.style.color = "black";
          liStyle.style.fontFamily = 'Italiana';
          liStyle.style.fontWeight = '900';
          liStyle.style.fontSize = "2rem";
          liStyle.style.letterSpacing = "1px";
          liStyle.style.textTransform = "capitalize";
          liStyle.style.background = "white";

        });

        //! Arrow Switch //
        document.querySelector(".switch-left").style.display = "none";
        document.querySelector(".switch-right").style.display = "block";

        break;
      case 2:
        //! miss camille //
        document.getElementById("missCamille").style.zIndex = 0;
        document.querySelector(".miss-carousel").style.backgroundImage = "none";

        //! oldskool //
        document.getElementById("oldskool").style.zIndex = 2;
        document.querySelector(".old-carousel").style.background =
          "linear-gradient(33deg, #d1d1d1 0%, #364989 32%, #10162f 100%)";

        //! MSC //
        document.getElementById("mscWeb").style.zIndex = 0;

        //! Arrow Switch //
        document.querySelector(".switch-right").style.display = "block";

        break;
      case 3:
        //! miss camille //
        document.getElementById("missCamille").style.zIndex = -1;

        break;

      default:
        break;
    }
  };

  return (
    <section
      className="msc-carousel old-carousel miss-carousel"
      id="mscCarousel"
    >
      <NavBarMsc />
      <div className="carousel-container">
        {/* pour le carousel grâce à une animation css en hover faire passer différentes photos du projet MSC et des autres projets selon le projets */}
        <button className="switch-left" onClick={handleClickCarouselLeft}>
          <IconSquareChevronLeft size={70} stroke={1.5} />
        </button>
        <div className="carousel">
          <div className="img-1">
            <a target="_blank" href="https://museum-sheet-cheat.netlify.app">
              <img id="mscWeb" src={mscWeb} alt="" />
            </a>
          </div>
          <div className="img-2">
            <a target="_blank" href="https://oldschoolgaming.fly.dev">
              <img id="oldskool" src={oldskool} alt="" />
            </a>
          </div>
          <div className="img-3">
            <a href="https://miss-camille-bijoux.netlify.app" target="_blank">
              <img id="missCamille" src={missCamille} alt="" />
            </a>
          </div>
        </div>
        <button className="switch-right" onClick={handleClickCarouselRight}>
          <IconSquareChevronRight size={70} stroke={1.5} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
