import React from "react";
import Navbar from "../components/Navbar";
import photo from "../assets/images/photograph2.webp";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconCamera,
  IconEye,
  IconPhoto,
} from "@tabler/icons-react";
import { TypeAnimation } from "react-type-animation";
import AnimBanner from "../components/AnimBanner";
import BannerHobbies from "../components/BannerHobbies";
import BannerMusic from "../components/BannerMusic";
import BannerProf from "../components/BannerProf";

const About = () => {
  return (
    <>
      <section className="formation">
        <Navbar />
        <div className="formation-photo">
          <div className="title-main">
            <h1>mes expériences et hobbies</h1>
          </div>
          <div className="photographe">
            <div className="img-photo">
              <img src={photo} alt="" />
            </div>
            <div className="text-photo">
              <div className="title-photo">
                <h4>PHOTOGRAPHE PRO (2016 - NOW)</h4>
              </div>
              <div className="text-p">
                <p className="p1">
                  <TypeAnimation
                    sequence={[
                      `- Photographe professionnel passionné avec un style 90's très
                    old school comme on dit ! Grâce à la photo je developpe beaucoup
                    le côté relationnel car rien de mieux que quelqu'un qui comprend
                    et qui sait répondre aux attentes et problématiques que les
                    clients lui posent.`,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={70}
                    style={{
                      fontSize: "1em",
                      fontFamily: "$font-paragraph-light",
                      display: "inline-block",
                    }}
                  />
                </p>
                <p className="p2">
                  <TypeAnimation
                    sequence={[
                      `- La photo n'est que le résultat de l'appareil mais le plus
                    intéressant c'est de savoir comment arriver au resultat que l'on
                    visualise avec la technologie.`,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={70}
                    style={{
                      fontSize: "1em",
                      fontFamily: "$font-paragraph-light",
                      display: "inline-block",
                    }}
                  />
                </p>
                <p className="p3">
                  <TypeAnimation
                    sequence={[
                      `- Je travail avec adobe Ligthroom classic et photoshop.`,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={70}
                    style={{
                      fontSize: "1em",
                      fontFamily: "$font-paragraph-light",
                      display: "inline-block",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="social-photo">
            <div className="insta">
              <IconBrandInstagram
                color="rgb(169, 27, 212)"
                size={70}
                stroke={1}
              />
              <a target="_blank" href="">
                Instagram
              </a>
            </div>
            <div className="facebook">
              <IconBrandFacebook color="rgb(0, 76, 190)" size={70} stroke={1} />
              <a target="_blank" href="">
                Facebook
              </a>
            </div>
            <div className="eyeem">
              <IconCamera color="#1B9C85" size={70} stroke={1} />
              <a target="_blank" href="">
                Portfolio
              </a>
            </div>
          </div>
        </div>
        <AnimBanner />
        <div className="formation-music"></div>
      </section>
    </>
  );
};

export default About;
