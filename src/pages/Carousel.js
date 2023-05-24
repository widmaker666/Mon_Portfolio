import React, { useEffect, useState } from "react";
//-Site MSC img //
import mscWeb from "../assets/images/museum.webp";
import mscWeb6 from "../assets/images/museum.webp";
import mscWeb1 from "../assets/images/mscWeb1.png";
import mscWeb2 from "../assets/images/mscWeb2.png";
import mscWeb3 from "../assets/images/mscWeb3.png";
import mscWeb4 from "../assets/images/mscWeb4.png";
import mscWeb5 from "../assets/images/mscWeb5.png";

//-OldSkool Site Img //
import oldskool from "../assets/images/FireShot Capture 009 - Oldskoolgaming - oldschoolgaming.fly.dev.png";
import oldskool1 from "../assets/images/old1.png";
import oldskool2 from "../assets/images/old2.png";
import oldskool3 from "../assets/images/old3.png";
import oldskool4 from "../assets/images/old4.png";
import oldskool5 from "../assets/images/old5.png";
import oldskool6 from "../assets/images/FireShot Capture 009 - Oldskoolgaming - oldschoolgaming.fly.dev.png";

//-Site missCamille //
import missCamille from "../assets/images/missCamille.webp";
import missCamille1 from "../assets/images/miss1.png";
import missCamille2 from "../assets/images/miss2.png";
import missCamille3 from "../assets/images/miss3.png";
import missCamille4 from "../assets/images/miss4.png";
import missCamille5 from "../assets/images/miss5.png";
import missCamille6 from "../assets/images/missCamille.webp";

import NavbarMsc from "../components/NavbarMsc";
import {
  IconSquareChevronLeft,
  IconSquareChevronRight,
} from "@tabler/icons-react";

const Carousel = () => {
  let count = 0;

  const handleClickCarouselRight = () => {
    if (count < 2) {
      count++;
    } else {
      count = 1;
    }
    console.log(count);

    switch (count) {
      case 1:
        document.getElementById("oldskool").style.zIndex = 1;
        document.getElementById("oldskool1").style.zIndex = 1;
        document.getElementById("oldskool2").style.zIndex = 1;
        document.getElementById("oldskool3").style.zIndex = 1;
        document.getElementById("oldskool4").style.zIndex = 1;
        document.getElementById("oldskool5").style.zIndex = 1;
        document.getElementById("oldskool6").style.zIndex = 1;
        document.querySelector(".switch-left").style.display = "block";
        break;
      case 2:
        document.getElementById("oldskool").style.zIndex = 0;
        document.getElementById("oldskool1").style.zIndex = 0;
        document.getElementById("oldskool2").style.zIndex = 0;
        document.getElementById("oldskool3").style.zIndex = 0;
        document.getElementById("oldskool4").style.zIndex = 0;
        document.getElementById("oldskool5").style.zIndex = 0;
        document.getElementById("oldskool6").style.zIndex = 0;
        document.getElementById("missCamille").style.zIndex = 1;
        document.getElementById("missCamille1").style.zIndex = 1;
        document.getElementById("missCamille2").style.zIndex = 1;
        document.getElementById("missCamille3").style.zIndex = 1;
        document.getElementById("missCamille4").style.zIndex = 1;
        document.getElementById("missCamille5").style.zIndex = 1;
        document.getElementById("missCamille6").style.zIndex = 1;
        document.querySelector(".switch-right").style.display = "none";
        document.querySelector(".switch-left").style.display = "block";

        break;

      default:
        break;
    }
  };

  const handleClickCarouselLeft = () => {
    let count = 1;

    switch (count) {
      case 1:
        document.getElementById("missCamille").style.zIndex = 0;
        document.getElementById("missCamille1").style.zIndex = 0;
        document.getElementById("missCamille2").style.zIndex = 0;
        document.getElementById("missCamille3").style.zIndex = 0;
        document.getElementById("missCamille4").style.zIndex = 0;
        document.getElementById("missCamille5").style.zIndex = 0;
        document.getElementById("missCamille6").style.zIndex = 0;
        document.getElementById("oldskool").style.zIndex = 0;
        document.getElementById("oldskool1").style.zIndex = 0;
        document.getElementById("oldskool2").style.zIndex = 0;
        document.getElementById("oldskool3").style.zIndex = 0;
        document.getElementById("oldskool4").style.zIndex = 0;
        document.getElementById("oldskool5").style.zIndex = 0;
        document.getElementById("oldskool6").style.zIndex = 0;
        document.getElementById("mscWeb").style.zIndex = 1;
        document.querySelector(".switch-left").style.display = "none";
        document.querySelector(".switch-right").style.display = "block";

        break;
      case 2:
        document.getElementById("missCamille").style.zIndex = 0;
        document.getElementById("oldskool").style.zIndex = 1;
        document.querySelector(".switch-right").style.display = "block";

        break;
      case 3:
        document.getElementById("missCamille").style.zIndex = -1;

        break;

      default:
        break;
    }
  };

  return (
    <section className="msc-carousel" id="msc">
      <NavbarMsc />
      <div className="carousel-container">
        {/* pour le carousel grâce à une animation css en hover faire passer différentes photos du projet MSC et des autres projets selon le projets */}
        <button className="switch-left" onClick={handleClickCarouselLeft}>
          <IconSquareChevronLeft size={70} stroke={1.5} />
        </button>
        <div className="carousel">
          <div className="img-1">
            <img id="mscWeb" src={mscWeb} alt="" />
            <img id="mscWeb1" src={mscWeb1} alt="" />
            <img id="mscWeb2" src={mscWeb2} alt="" />
            <img id="mscWeb3" src={mscWeb3} alt="" />
            <img id="mscWeb4" src={mscWeb4} alt="" />
            <img id="mscWeb5" src={mscWeb5} alt="" />
            <img id="mscWeb6" src={mscWeb6} alt="" />
          </div>
          <div className="img-2">
            <img id="oldskool" src={oldskool} alt="" />
            <img id="oldskool1" src={oldskool1} alt="" />
            <img id="oldskool2" src={oldskool2} alt="" />
            <img id="oldskool3" src={oldskool3} alt="" />
            <img id="oldskool4" src={oldskool4} alt="" />
            <img id="oldskool5" src={oldskool5} alt="" />
            <img id="oldskool6" src={oldskool6} alt="" />
          </div>
          <div className="img-3">
            <img id="missCamille" src={missCamille} alt="" />
            <img id="missCamille1" src={missCamille1} alt="" />
            <img id="missCamille2" src={missCamille2} alt="" />
            <img id="missCamille3" src={missCamille3} alt="" />
            <img id="missCamille4" src={missCamille4} alt="" />
            <img id="missCamille5" src={missCamille5} alt="" />
            <img id="missCamille6" src={missCamille6} alt="" />
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
