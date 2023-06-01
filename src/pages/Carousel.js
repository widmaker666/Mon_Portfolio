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
        document.getElementById("oldskool").style.transition = "1s ease";
        document.querySelector(".switch-left").style.display = "block";
        document.querySelector(".old-carousel").style.background =
          "linear-gradient(0deg, #10162F 63%, #f0f0f0 100%)";
        document.querySelector(".switch-left").style.display = "none";
        break;
      case 2:
        //! Old skool //
        document.getElementById("oldskool").style.zIndex = 0;
        document.querySelector(".old-carousel").style.backgroundImage = "none";
        //! Miss camille //
        document.getElementById("missCamille").style.zIndex = 1;
        document.querySelector(".miss-carousel").style.backgroundImage =
          "linear-gradient(180deg, #FAD961 0%, #F76B1C 33%, #000000 66%, #000000 100%)";
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
        //! Arrow Switch //
        document.querySelector(".switch-left").style.display = "none";
        document.querySelector(".switch-right").style.display = "block";

        break;
      case 2:
        //! miss camille //
        document.getElementById("missCamille").style.zIndex = 0;
        document.querySelector(".miss-carousel").style.backgroundImage = "none";
        //! Arrow Switch //
        document.getElementById("oldskool").style.zIndex = 2;
        document.querySelector(".old-carousel").style.background =
          "linear-gradient(180deg, #15186d 63%, #f0f0f0 100%)";
        //! Arrow Switch //
        document.getElementById("mscWeb").style.zIndex = 0;
        //! Arrow Switch //
        document.querySelector(".switch-right").style.display = "block";

        break;
      case 3:
        //! Arrow Switch //
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
      <Navbar className="navbarChange" />
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
