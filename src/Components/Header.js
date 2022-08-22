import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import myImage from "./imgs/me.jpg";

const Header = () => {
  return (
    <header className="relative container mx-auto">
      <div className="flex flex-col items-center mt-20 md:items-start">
        <div className="flex flex-col  ">
          <div className=" mb-[5rem] flex flex-col items-center md:items-start">
            <h1 className="font-bold text-l  md:text-base">BRAN</h1>
            <h1 className="font-bold text-l  md:text-base">DON.</h1>
          </div>
          <div className="mb-5">
            <div className=" flex flex-row  justify-center  md:justify-start space-x-3 mb-20">
              <a href="https://github.com/BrandonCarp">
                <FaGithub size="2rem" />
              </a>
              <a href="#">
                <FaLinkedin size="2rem" />
              </a>
              <a href="https://www.instagram.com/bcarpol/">
                <FaInstagram size="2rem" />
              </a>
            </div>
            <div className="flex flex-col items-center p-1 font-bold text-md md:text-xl md:items-start">
              <h1 className="">Hi there, I'm Brandon.</h1>
              <h1 className="">
                Front End
                <span className="text-secondaryPurple"> Developer</span>,
              </h1>
              <h1>Linguist, and Dog Dad.</h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col-reverse p-5 md:flex-row p5">
          <div className="text-lightGrey space-y-5  font-bold mt-10 md:w-[45rem] md:mt-0 md:mr-5 lg:text-base xl:text-baselg">
            <p>
              I'm a 29-year-old Self-Taught Developer, coming out of the
              Philadelphia Metropolitan Area.
            </p>
            <p>
              I'm really looking forward to my first experience in a
              professional setting. I have an insatiable need to learn and grow
              as a developer alongside senior, and junior developers.
            </p>
            <p>
              My anime coding back story started out 2 years ago dabbling with
              html and css for fun. However, I finally got hooked on phonics in
              2021 learning vanilla javascript and general web development last
              year from a mentor. I have since gone on completing multiple
              vanila javascript, and react projects. I am currently working on
              learning full stack.
            </p>
          </div>
          <div className=" ">
            <img className="rounded" src={myImage} alt="me" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
