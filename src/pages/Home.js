import React from "react";
import Navbar from "../components/Navbar";
import Title from "./Title";
import LightBtn from "../components/LightBtn";

const Home = () => {
  return (
    <>
      <LightBtn />
      <Title />
      <section className="home" id="home">
        <Navbar />
      </section>
    </>
  );
};

export default Home;
