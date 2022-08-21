import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import myImage from "./imgs/me.jpg";

const Header = () => {
  return (
    <nav className="relative">
      <div className="container mx-auto mt-20">
        <div className="mb-28">
          <h1 className="font-bold">BRAN</h1>
          <h1 className="font-bold">DON.</h1>
        </div>
        <div>
          <div className="flex space-x-5">
            <a href="#">
              <FaGithub className="" size="1.5rem" />
            </a>
            <a href="#">
              <FaLinkedin size="1.5rem" />
            </a>
            <a href="#">
              <FaInstagram size="1.5rem" />
            </a>
          </div>
          <div className="w-[55rem]">
            <h1 className="font-bold text-md">
              Hey there, I'm Brandon.
              <br /> Self Taught Full Stack
              <span> Developer</span>,<br />
              Linguistic, and Dog Dad.
            </h1>
          </div>
          <img className="h-" src={myImage} alt="me" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
