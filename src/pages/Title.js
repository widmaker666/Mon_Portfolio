import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCircleChevronDown,
} from "@tabler/icons-react";
import React from "react";

const Title = () => {
  return (
    <header>
      <div className="header" id="header">
        <h1>PORTFOLIO</h1>
        <div className="links-container">
          <ul className="links">
            <li>
              <a className="text" href="https://youtu.be/ahdH8eTydWY" target="_blank">
                <IconBrandInstagram id="social1" size={71} stroke={2} />
              </a>
            </li>
            <li>
              <a href="https://youtu.be/ahdH8eTydWY" target="_blank">
                <IconBrandGithub id="social2" size={71} stroke={2} />
              </a>
            </li>
            <li>
              <a href="https://youtu.be/ahdH8eTydWY" target="_blank">
                <IconBrandLinkedin id="social3" size={71} stroke={2} />
              </a>
            </li>
          </ul>
        </div>
        <div className="name">
          <div className="name-container">
            <h3>HONTCHAROUK Alexandre</h3>
          </div>
          <div className="work-container">
            <h5>Développeur Web Junior</h5>
          </div>
        </div>
        <div className="quote-container">
          <div className="quote">
            <div className="description">
              <p>
                <em>
                  “N’importe quel idiot peut écrire du code qu'un ordinateur
                  peut comprendre. Les bons programmeurs écrivent du code que
                  les humains peuvent comprendre.”
                </em>{" "}
                - <strong>Martin Fowler</strong>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="arrow-down">
         <a href="#home"><IconCircleChevronDown size={51} color="black" stroke={1} /></a> 
        </div>
      </div>
    </header>
  );
};

export default Title;
