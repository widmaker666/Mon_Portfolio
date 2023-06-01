import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/signature-photo-removebg-preview.png";

const NavBarMsc = () => {
  return (
    <>
      <div className="navbar-container-msc">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul className="nav-msc">
          <Link className="navlink-msc" to="/projects">
            <li className="li-msc">Projets</li>
          </Link>
          <Link className="navlink-msc" to="/about">
            <li className="li-msc">A Propos</li>
          </Link>
          <Link className="navlink-msc" to="/contact">
            <li className="li-msc">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBarMsc;
