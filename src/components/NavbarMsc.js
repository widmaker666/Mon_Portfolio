import React from 'react';
import Logo from "../assets/images/signature-photo-removebg-preview.png";
import { NavLink } from "react-router-dom";

const NavbarMsc = () => {
    return (
        <>
        <div className="navbar-container2">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <ul className="nav2">
            <NavLink className="navlink2" to="/projects">
              <li>Projets</li>
            </NavLink>
            <NavLink className="navlink2" to="/about">
              <li>A Propos</li>
            </NavLink>
            <NavLink className="navlink2" to="/contact">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </>
    );
};

export default NavbarMsc;