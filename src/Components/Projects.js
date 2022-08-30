import React from "react";
import swapi from "./imgs/swapiApp.png";
import tracker from "./imgs/expenseTracker.png";
import calc from "./imgs/calcApp.png";
import snake from "./imgs/snakeApp.png";
import twitter from "./imgs/twitterApp.png";

// ml-[2.5rem] md:ml-0

const Projects = () => {
  return (
    <div className="container relative mx-auto ">
      <div className="p-5 space-y-[4rem]">
        <div className="space-y-[3rem] flex flex-col items-center md:items-start">
          <h1 className="text-spsml ">What I've been up to</h1>
          <p className=" font-light md:text-base ml-[1rem] md:ml-0">
            I want to learn as much as possible, and love staying busy so what
            better way to learn than testing ideas out in new applications. Take
            a look at my most recent applications ive dedicated all of my free
            time to.
          </p>
        </div>
        <div className="  space-y-10">
          <div className="flex flex-col items-center space-y-10  md:items-start md:flex-row md:space-x-[6rem]">
            <div className=" mt-10 ">
              <img className="lg:w-[90%]" src={swapi} alt="swapiApp" />
              <h3 className="text-md">Swapi Api</h3>
              <p className=" lg:text-base mb-2">
                An application that utilizes the Swapi starwars Api, using React{" "}
                {"&"} Tailwind
              </p>
              <a
                href="https://brandoncarp-swapi-app.herokuapp.com/"
                className="bg-secondaryPurple px-2 py-1 rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
              >
                View Project
              </a>
            </div>
            <div
              href="https://brandoncarp-react-expenses.herokuapp.com/"
              className=""
            >
              <img
                className="md:w-[56rem] lg:w-[100%]"
                src={tracker}
                alt="React Expense Tracker"
              />
              <h3 className="text-md">Expense Tracker</h3>
              <p className=" lg:text-base mb-2">
                A application that can be used to keep track of your expenses,
                using React {"&"} Bootstrap
              </p>
              <a
                href="https://brandoncarp-react-expenses.herokuapp.com/"
                className="bg-secondaryPurple px-2 py-1 rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-10  md:items-start md:flex-row md:space-x-[6rem]">
            <div className="mt-10">
              <img className="" src={calc} alt="calculator app" />
              <h3 className="text-md">Calculator App</h3>
              <p className="  lg:text-base mb-2">
                This is a calculator application made with Vanilla Javascript{" "}
                {"&"} Css
              </p>
              <a
                href="https://brandoncarp.github.io/calc.html"
                className="bg-secondaryPurple px-2 py-1 rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
              >
                View Project
              </a>
            </div>
            <div className="">
              <img
                className="md:w-[50rem] lg:w-[100%]"
                src={snake}
                alt="snake game"
              />
              <h3 className="text-md">Classic Snake Game</h3>
              <p className="  lg:text-base mb-2">
                The classic snake game we all know and love, made with Vanilla
                Javascript {"&"} Css
              </p>
              <a
                href="https://brandoncarp.github.io/snake.html"
                className="bg-secondaryPurple px-2 py-1 rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-10">
          <img
            className="mt-10 lg:h-[40rem]"
            src={twitter}
            alt="twitter showcase app"
          />
          <div className="space-y-5 md:flex md:flex-col md:items-center">
            <h1 className="text-l">Twitter Showcase</h1>
            <p className="  md:text-base">
              What I am working on now, a <span className="">Twitter</span>{" "}
              showcase full stack application that lets you see all of your
              favorite users tweets, and even random tweets of a specific user.
            </p>
            <h3 className="font-bold">COMING SOON</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
