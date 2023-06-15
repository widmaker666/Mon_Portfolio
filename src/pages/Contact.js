import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const Contact = () => {
  const googleId = "service_cbcbrwa";
  const templateId = "template_memsm0j";
  const publicKey = `${process.env.REACT_APP_ID}`;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(googleId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        alert("Message Envoyé");
      },
      (error) => {
        console.log(error.text);
        alert("Les champs ne sont pas valides");
      }
    );
  };

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
            speed={40}
            style={{
              display: "inline-block",
            }}
          />
        </p>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="form-flex">
            <div className="name">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                id="inputName"
                required
                placeholder="Nom..."
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="inputEmail"
                required
                placeholder="Email..."
              />
            </div>
            <div className="description">
              <label htmlFor="description">Message</label>
              <textarea
                name="description"
                id="inputDescription"
                required
                placeholder="Votre message..."
              ></textarea>
            </div>
            <div className="btn-submit">
              <button className="submit">envoyer</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
