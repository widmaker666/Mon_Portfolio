import React from "react";
import Logo from "../../assets/images/signature-photo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (

//* C'est juste un exemple il faut mettre ça en forme dans des DIV !
    <>
      <div className="logo"></div>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>

      <NavLink to="/projects">
        <li>Projects</li>
      </NavLink>
      <NavLink to="/about">
        <li>A Propos</li>
      </NavLink>
      <NavLink to="/contact">
        <li>Contact</li>
      </NavLink>
    </>
  );
};

export default Navbar;
