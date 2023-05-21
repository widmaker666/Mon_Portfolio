import React from "react";
import Navbar from "../components/Navbar";
import Title from "./Title";
import LightBtn from "../components/LightBtn";

const Home = () => {
  return (
    <main>
      <LightBtn />
      <Title />
      <section id="home">
        <div className="navbar">
          <Navbar />
        </div>
      </section>
    </main>
  );
};

export default Home;
