import React from "react";
import Logo from "../assets/images/signature-photo-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";

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
          <Link className="navlink" to="/about">
            <li className="li">A Propos</li>
          </Link>
          <Link className="navlink" to="/contact">
            <li className="li">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
