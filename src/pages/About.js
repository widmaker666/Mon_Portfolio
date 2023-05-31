import React from "react";
import Navbar from "../components/Navbar";
import photo from "../assets/images/photograph2.webp";
import imgPhoto from "../assets/images/concert.webp";
import photoGuitar from "../assets/images/IMG_0112.webp";
import cthulhu from "../assets/images/chtlhu.webp";
import amnesia from "../assets/images/amnesia.webp";
import king from "../assets/images/king.webp";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconCamera,
} from "@tabler/icons-react";
import { TypeAnimation } from "react-type-animation";
import AnimBanner from "../components/AnimBanner";
import BannerHobbies from "../components/BannerHobbies";
import BannerMusic from "../components/BannerMusic";
import BannerProf from "../components/BannerProf";
import Footer from "../components/Footer";

const About = () => {
 
  return (
    <>
        
      <section className="container-about" id="formation">
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
        <div className="formation-musician">
          <div className="title-music">
            <h1>MUSICIEN AUTEUR / COMPOSITEUR (2011 - NOW)</h1>
          </div>

          <img src={imgPhoto} alt="" />

          <div className="description-music">
            <ul id="ul1">
              <li>
                Fondateur des groupes "the dirty fingernails" et "the flying
                sharks"
              </li>
              <li>
                Auteur compositeur interprète arrangeur de musique (jazz,
                jazz-manouche, rock, pop/punk rock)
              </li>
              <li>Mixage studio enregistrement</li>
            </ul>
            <br />
            <p>La musique est un média qui ouvre beaucoup de portes sur : </p>
            <ul id="ul2">
              <li>les méthodes de travail</li>
              <li>
                les relations avec les musiciens, les salles de concerts etc...
              </li>
              <li>l'organisation lors des concerts</li>
              <li>
                la composition demande beaucoup de recherches et de travail pour
                arriver au résultat escompté
              </li>
              <li>
                le studio demande aussi d'être attentif à la direction
                artistique du projet et de réflechir sur les technologies à
                employer
              </li>
            </ul>
          </div>
          <div className="social-music">
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
            <div className="youtube">
              <IconBrandYoutube color="#c4302b" size={70} stroke={1} />
              <a target="_blank" href="">
                Youtube
              </a>
            </div>
          </div>
        </div>
        <BannerMusic />
        <div className="formation-guitar">
          <h1>PROFESSEUR DE GUITARE (2007 - NOW)</h1>
          <div className="container-text-photo">
            <div className="description-guitar">
              <p>
                Professeur de guitare depuis de nombreuses années. J'aime
                transmettre mes connaissances aux autres et je suis toujours
                prêt à apprendre de nouvelles méthodes pour améliorer mon
                enseignement. Je crois que l'enseignement est un processus
                continu d'apprentissage, car chaque personne est unique et il
                est important de s'adapter pour trouver la meilleure façon de
                les aider à apprendre.
              </p>
            </div>
            <img src={photoGuitar} alt="" />
          </div>
        </div>
        <BannerProf />
        <div className="formation-vert">
          <h1>ouvrier espace verts (2009/2010/2016/2017)</h1>
          <div className="description-vert">
            <p>
              A travailler pour l’AESE feyzin et la mairie de feyzin au cours de
              plusieurs contrat en CDI et CDD Ouvrier paysagiste et voirie.
              J'adore le contact avec la nature et même si le travail est
              physique, il faut aussi <strong>réfléchir</strong> à comment faire
              pour <strong>optimiser son temps</strong> et avoir une certaine
              <strong>logique</strong>pour utiliser les bons outils et les
              bonnes techniques.
            </p>
          </div>
        </div>
        <BannerHobbies />
        <div className="hobbies">
          <div className="jdr">
            <div className="text1">
              <h1>jeux de société et jdr</h1>
              <div className="description">
                <p>
                  Warhammer / Cthulhu / D&D / Heroquest / Dungeon Saga / ....
                </p>
              </div>
            </div>
            <img src={cthulhu} alt="" />
          </div>
          <div className="amnesia">
            <img src={amnesia} alt="" />
            <div className="text2">
              <h1>Jeux videos / Amnesia the dark descent</h1>
              <div className="description">
                <p>
                  Création de custom stories sur Amnesia : Utilisation de
                  Notepad ++ pour écrire des scripts qui font sens avec le
                  logiciel de création 3D
                </p>
              </div>
            </div>
          </div>
          <div className="movies">
            <div className="text3">
              <h1>Cinema et art d’horreur / s.f</h1>
              <div className="description">
                <p>
                  Intérêt pour tout l’art et le cinéma avec des artistes : King,
                  Carpenter, Ridley Scott, Kubrick, Dali, Giger, Beksinski,
                  chris Mars etc ....
                </p>
              </div>
            </div>
            <img src={king} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
