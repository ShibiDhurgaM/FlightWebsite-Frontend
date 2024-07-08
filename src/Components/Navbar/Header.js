import React from "react";
import { FaInstagram } from "react-icons/fa";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { FaMailBulk } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import {FaSquareThreads} from "react-icons/io";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className='contact'>
          <div className='box'>
            <div className='icons'>
              <FaInstagram />
            </div>
            <div className='text'>
              <h4>Instagram</h4>
              <a href='/contact'>_voyage_</a>
            </div>
          </div>
          <div className='box'>
            <div className='icons'>
              <PiPhoneCallDuotone />
            </div>
            <div className='text'>
              <h4>Call Us</h4>
              <a href='/contact'>+91 789 019 0876</a>
            </div>
          </div>
          <div className='box'>
            <div className='icons'>
              <FaMailBulk />
            </div>
            <div className='text'>
              <h4>Mail Us</h4>
              <a href='/contact'>voyage@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
