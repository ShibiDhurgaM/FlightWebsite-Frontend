import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoIosContacts } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/images/voyage.png" alt="logo" className="applogo" />
        </div>
        <div className={click ? "menu-icon active" : "menu-icon"} onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/our-gallery" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/booking" onClick={closeMobileMenu}>
              Book!
            </Link>
          </li>
          <li>
            <Link to="/where-we-fly" onClick={closeMobileMenu}>
              Our Wings
            </Link>
          </li>
          <li>
            <Link to="/features" onClick={closeMobileMenu}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/ask-your-queries" onClick={closeMobileMenu}>
              Queries?
            </Link>
          </li>
        </ul>
        <div className="login-area">
          <ul>
            <li>
              <Link to="/login">
                <SiGnuprivacyguard /> Login
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <SiGnuprivacyguard /> SignUp
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <IoIosContacts /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
