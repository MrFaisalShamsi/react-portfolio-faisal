import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () =>{
    return(
        <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
          <h3 className="mx-2 w-10 text-5xl">Fs</h3>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl" >
        <a href="https://www.linkedin.com/in/MDFaisalShamsi/"><FaLinkedin /></a>
        <a href="https://github.com/MrFaisalShamsi"><FaGithub /></a>
        {/* <FaSquareXTwitter /> */}
        <a href="https://www.instagram.com/mr_faissu__18/#"><FaInstagram /></a>
        </div>
      </nav>
    );
}

export default Navbar;