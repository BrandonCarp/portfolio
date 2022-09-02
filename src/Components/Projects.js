import React from "react";
import swapi from "./imgs/swapiApp.jpg";
import tracker from "./imgs/expenseTracker.jpg";
import calc from "./imgs/calcApp.jpg";
import snake from "./imgs/snakeApp.jpg";
import twitter from "./imgs/twitterApp.jpg";

const Projects = () => {
  return (
    <div className="relative container mx-auto p-5 space-y-10 mb-10">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-md">What I've been up to</h1>
        <p className="font-light">
          I want to learn as much as possible, and love staying busy so what
          better way to learn than testing ideas out in new applications. Take a
          look at my most recent applications I have dedicated my free time to.
        </p>
      </div>
      <div className="">
        <div className="space-y-10 mb-10">
          <div className="space-y-2 flex flex-col items-center justify-center">
            <img className="" src={swapi} alt="swapiApp" />
            <div className="space-y-3 flex flex-col items-center ">
              <h3 className="text-baselg">Swapi Api</h3>
              <p className="font-light pl-2 md:pl-0">
                An application that utilizes the Swapi starwars Api, using React{" "}
                {"&"} Tailwind
              </p>

              <a
                href="https://brandoncarp-swapi-app.herokuapp.com/"
                className=" bg-secondaryPurple px-2 py-1 rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="space-y-2 flex flex-col items-center justify-center">
            <img className="" src={tracker} alt="React Expense Tracker" />
            <div className="space-y-3 flex flex-col items-center">
              <h3 className="text-baselg">Expense Tracker</h3>
              <p className=" font-light">
                A application that can be used to keep track of your expenses,
                using React {"&"} Bootstrap
              </p>

              <a
                href="https://brandoncarp-react-expenses.herokuapp.com/"
                className="bg-secondaryPurple  px-2 py-1  rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-5 flex flex-col items-center justify-center">
            <img className="" src={calc} alt="calculator app" />
            <div className="space-y-3 flex flex-col items-center">
              <h3 className="text-baselg">Calculator App</h3>
              <p className="font-light pl-2 md:pl-0">
                This is a calculator application made with Vanilla Javascript{" "}
                {"&"} Css
              </p>
              <a
                href="https://brandoncarp.github.io/calc.html"
                className="bg-secondaryPurple  px-2 py-1 rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="space-y-5 flex flex-col items-center justify-center">
            <img className="" src={snake} alt="snake game" />

            <div className="space-y-3 flex flex-col items-center">
              <h3 className="text-baselg">Snake Game</h3>
              <p className="font-light">
                The classic snake game we all know and love, made with Vanilla
                Javascript {"&"} Css
              </p>
              <a
                href="https://brandoncarp.github.io/snake.html"
                className="bg-secondaryPurple  px-2 py-1  rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 flex flex-col items-center justify-center">
        <img className="" src={twitter} alt="twitter showcase app" />
        <div className="space-y-3 flex flex-col items-center">
          <h1 className="text-md">Twitter Showcase</h1>
          <p className="font-light">
            What I am working on now, a <span className="">Twitter</span>{" "}
            showcase full stack application that lets you see all of your
            favorite users tweets, and even random tweets of a specific user.
          </p>
          <h3 className="font-bold">COMING SOON</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
