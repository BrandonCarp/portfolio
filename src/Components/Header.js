import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import myImage from "./imgs/me.jpg";
// import { Transition } from "react-transition-group";

const Header = () => {
  return (
    <header className="relative mb-[5rem]  md:mb-[15rem] lg:mb-[10rem] xl:mb-[10rem]  container mx-auto  ">
      <div className="flex flex-col items-center  mt-10 md:items-start">
        <div className="flex flex-col  ">
          <div className=" mb-[1rem] md:mb-[5rem] flex flex-col items-center   md:items-start">
            <h1 className="font-bold text-md  md:text-base">BRAN</h1>
            <h1 className="font-bold text-md  md:text-base">DON.</h1>
          </div>
          <div className="invisible absolute  lg:ml-[40rem] xl:ml-[50rem]  lg:visible"></div>
          <div className="mb-1">
            <div className=" flex flex-row  justify-center  md:justify-start space-x-3 mb-10 md:mb-20">
              <a className="" href="https://github.com/BrandonCarp">
                <FaGithub
                  size="1.8rem"
                  className="transition ease-in-out delay-150   hover:text-secondaryPurple hover:-translate-y-1 hover:scale-110 duration-300"
                />
              </a>
              <a href="https://www.linkedin.com/in/brandon-carpenter-559b15203/">
                <FaLinkedin
                  size="1.8rem"
                  className="transition ease-in-out delay-150  hover:text-linkedInColor hover:-translate-y-1 hover:scale-110 duration-300"
                />
              </a>
              <a href="https://www.instagram.com/bcarpol/">
                <FaInstagram
                  size="1.8rem"
                  className="transition ease-in-out delay-150 hover:text-secondaryPink hover:-translate-y-1 hover:scale-110 duration-300"
                />
              </a>
            </div>

            <div className="flex flex-col justify-start p-1 font-bold   text-base md:text-l lg:text-xl  ">
              <h1 className="">Hi there, I'm Brandon.</h1>
              <h1 className="text-spsml md:text-spmd lg:text-spl">
                Full Stack
                <span className="text-secondaryPurple"> Developer</span>,
              </h1>
              <h1>Linguist, and Dog Dad.</h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col-reverse p-5 md:flex-row p5">
          <div className=" text-lightGrey space-y-5  font-bold mt-10 md:w-[45rem] md:mt-0 md:flex md:flex-col md:justify-center md:mr-5 lg:text-base xl:text-baselg">
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
              2021 learning vanilla javascript and general web development
              basics. I have since gone on completing multiple vanila
              javascript, and react projects. I am currently working on learning
              full stack.
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
