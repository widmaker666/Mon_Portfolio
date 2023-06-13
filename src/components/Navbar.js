import React from "react";
import Logo from "../assets/images/signature-photo-removebg-preview.png";
import { NavLink }  from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul className="nav">          
          <NavLink className="navlink" to="/about">
            <li className="li">A Propos</li>
          </NavLink>
          <NavLink className="navlink" to="/contact">
            <li className="li">Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
