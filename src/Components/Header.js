import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import myImage from "./imgs/me.jpg";

const Header = () => {
  return (
    <header className="relative mx-auto container  ">
      <div className="flex flex-col items-center pt-10">
        <div className="mb-5">
          <h1 className="font-bold text-l  ">BRAN</h1>
          <h1 className="font-bold text-l ml-2 md:ml-0">DON.</h1>
        </div>
        <div className="flex space-x-3 mb-20">
          <a className="" href="https://github.com/BrandonCarp">
            <FaGithub
              size="1.8rem"
              className="   hover:text-secondaryPurple hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
          <a href="https://www.linkedin.com/in/brandon-carpenter-559b15203/">
            <FaLinkedin
              size="1.8rem"
              className=" hover:text-linkedInColor hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
          <a href="https://www.instagram.com/bcarpol/">
            <FaInstagram
              size="1.8rem"
              className=" hover:text-secondaryPink hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
        </div>
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-baselg">Hi there, I'm Brandon.</h1>
          <h1 className="text-l">
            Front End
            <span className="text-secondaryPurple"> Developer</span>,
          </h1>
          <h1 className="text-baselg">Linguist, and Dog Dad.</h1>
        </div>

        <div className=" flex flex-col-reverse mb-20">
          <div className="flex flex-col space-y-5 p-5 font-light">
            <p>
              I'm a 29-year-old Self-Taught Developer, coming out of the
              Philadelphia Metropolitan Area.
            </p>
            <p>
              I'm really looking forward to my first experience in a
              professional setting. I have an insatiable need to learn and grow
              as a developer.
            </p>
            <p>
              My story started out 2 years ago dabbling with html and css for
              fun. However, I finally got hooked on phonics in 2021 learning
              vanilla javascript and general web development basics. I have
              since gone on completing multiple vanila javascript, and react
              projects. I am currently working on learning full stack.
            </p>
          </div>
          <div className=" p-5">
            <img className="rounded" src={myImage} alt="me" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
