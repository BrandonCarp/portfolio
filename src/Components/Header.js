import { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import myImage from "./imgs/me.jpg";
import lofi from "./imgs/lofi.mp3";

const Header = () => {
  const [music, setMusic] = useState(false);

  const audioRef = useRef(new Audio(lofi));

  const playLofi = () => {
    if (music) {
      setMusic(false);
      audioRef.current.pause();
    } else {
      setMusic(true);
      audioRef.current.play();
    }
  };

  return (
    <header className="relative mx-auto container ">
      <button
        onClick={playLofi}
        className=" absolute left-[85%]  mt-10 bg-white text-black px-3 rounded font-bold  hover:-translate-y-1  hover:scale-110 duration-300"
      >
        Play Lofi
      </button>
      <div className="flex flex-col items-center md:items-start pt-10">
        <div className="mb-5 pl-5">
          <h1 className="font-bold text-l md:text-base  ">BRAN</h1>
          <h1 className="font-bold text-l ml-2 md:text-base md:ml-0">DON.</h1>
        </div>
        <div className="flex space-x-3 mb-20 pl-5 ">
          <a className="" href="https://github.com/BrandonCarp">
            <FaGithub
              size="1.5rem"
              className="   hover:text-secondaryPurple hover:-translate-y-1 hover:scale-110 duration-300 md:text-base"
            />
          </a>
          <a href="https://www.linkedin.com/in/brandon-carpenter-559b15203/">
            <FaLinkedin
              size="1.5rem"
              className=" hover:text-linkedInColor hover:-translate-y-1 hover:scale-110 duration-300 md:text-base"
            />
          </a>
          <a href="https://www.instagram.com/bcarpol/">
            <FaInstagram
              size="1.5rem"
              className=" hover:text-secondaryPink hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start pl-5 mb-10">
          <h1 className="text-baselg md:text-l lg:text-xl">
            Hi there, I'm Brandon.
          </h1>
          <h1 className="text-l md:text-xl lg:text-xxl">
            Front End
            <span className="text-secondaryPurple"> Developer</span>,
          </h1>
          <h1 className="text-baselg md:text-l lg:text-xl">
            Linguist, and Dog Dad.
          </h1>
        </div>

        <div className=" flex flex-col-reverse md:flex-row mb-20">
          <div
            className="flex flex-col space-y-5 p-5 font-light md:justify-center  md:text-[1.1rem] md:w-[80%] lg:text-baselg xl:text-md 
          "
          >
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
              since gone on completing multiple vanila javascript and react
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
