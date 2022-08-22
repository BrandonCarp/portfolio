import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import myImage from "./imgs/me.jpg";

const Header = () => {
  return (
    <header className="relative container mx-auto flex justify-center">
      <div className=" mt-20 flex flex-col items-center md:items-start md:flex-row md:mr-[30rem] ">
        <div className=" ">
          <div className="mb-10 flex flex-col items-center md:mb-28 md:items-start">
            <h1 className="font-bold text-5xl md:text-base">BRAN</h1>
            <h1 className="font-bold text-5xl md:text-base">DON.</h1>
          </div>
          <div className="">
            <div className="flex mb-10 space-x-5  justify-center md:justify-start">
              <a href="https://github.com/BrandonCarp">
                <FaGithub size="2rem" />
              </a>
              <a href="#">
                <FaLinkedin size="2rem" />
              </a>
              <a href="#">
                <FaInstagram size="2rem" />
              </a>
            </div>
            <div className="w-[20rem] ml-10 mb-5 font-bold text-md md:text-l md:w-[70rem] md:ml-0 ">
              <h1 className="">Hi there, I'm Brandon.</h1>
              <h1>
                Front End
                <span className="text-secondaryPurple"> Developer</span>,
              </h1>
              <h1>Linguist, and Dog Dad.</h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col-reverse items-center  md:mt-[32rem] md:absolute md:flex md:flex-row ">
          <div className="text-lightGrey space-y-5  font-bold w-[20rem] mr-5 md:w-[50rem]  md:space-y-20 md:text-3xl">
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
          <div className=" w-[20rem] mb-10   md:w-[60rem] ">
            <img className="" src={myImage} alt="me" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
