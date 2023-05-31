import React from "react";
import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <Navbar />
        <h1>contact</h1>
        <p>
          <TypeAnimation
            sequence={[
              `Vous voici arrivez à la fin de mon Portfolio. 

                      Je serais ravi de mettre à profit mes compétences au service de votre projet ou au sein de votre entreprise.
                      
                       N’hésiter pas à me contacter si vous avez des questions.
                      Merci et à bientôt`,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={40}
            style={{
              display: "inline-block",
            }}
          />
        </p>
        <div className="form-container">
          <form className="formulaire">
            <div className="name">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                id="inputName"
                placeholder="Nom..."
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="inputEmail"
                placeholder="Email..."
              />
            </div>
            <div className="description">
              <label htmlFor="description">Message</label>
              <textarea
                name="description"
                id="inputDescription"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <button>envoyer</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
