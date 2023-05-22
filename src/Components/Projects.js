import React from "react";
import swapi from "./imgs/swapiApp.jpg";
import tracker from "./imgs/expenseTracker.jpg";
import calc from "./imgs/calcApp.jpg";
import snake from "./imgs/snakeApp.jpg";
import dailyvid from "./imgs/dailyvidApp.png";

const Projects = () => {
  return (
    <div className="relative container mx-auto p-5  mb-10">
      <div className="flex flex-col items-center space-y-5  ">
        <h1 className="text-md md:text-xl">What I've been up to</h1>
        <p className="font-light text-[1.1rem]  md:px-10 lg:px-20">
          I want to learn as much as possible and love staying busy so what
          better way to learn than testing ideas out in new applications. Take a
          look at my most recent applications I have dedicated my free time to.
        </p>
      </div>
      <div className="">
        <div className="space-y-5 flex flex-col items-center justify-center mt-10 mb-10">
          <img className="w-[80%]" src={dailyvid} alt="twitter showcase app" />
          <div className="space-y-3 flex flex-col items-center">
            <h1 className="text-md md:text-l">DailyVid</h1>
            <p className="font-light md:text-[1.2rem]">
              DailyVid! My most recent project to date. A video search
              application, with a random video generator page. Created using a
              React front end, with a express back end. Styled with Tailwind and
              a drop of vanilla css.
            </p>
            <a
              href="https://daily-vid-brandoncarp.vercel.app/"
              className="bg-secondaryPurple  px-2 py-1  rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="   mb-5 p-5 md:space-x-20 md:flex ">
          <div className="flex mx-auto container">
            <div className="flex flex-col items-center justify-center mb-10 md:mb-0">
              <div>
                <img className="" src={swapi} alt="star wars api" />
              </div>
              <div className="space-y-3 flex flex-col items-center ">
                <h3 className="text-baselg pt-3">StarWars Api</h3>
                <p className=" font-light  ml-4 md:ml-0">
                  A react application utilizing the swapi api to search starwars
                  characters. I manage the state using React Query, and styled
                  with Tailwind.
                </p>

                <a
                  href="https://star-wars-api-eta.vercel.app/"
                  className="bg-secondaryPurple  px-2 py-1  rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="relative mx-auto container">
            <div
              className="
              flex
              flex-col
              items-center
              justify-center"
            >
              <div>
                <img className="" src={tracker} alt="React Expense Tracker" />
              </div>
              <div className="space-y-3 flex flex-col items-center">
                <h3 className="text-baselg pt-3">Expense Tracker</h3>
                <p className=" font-light ml-4 md:ml-0">
                  A react application to help you manage your expenses, styled
                  with bootstrap.
                </p>

                <a
                  href="https://react-expense-tracker22.netlify.app/"
                  className="bg-secondaryPurple  px-2 py-1  rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto container space-y-10 mb-10 p-5 md:space-x-20 md:flex ">
          <div className="space-y-5 flex flex-col items-center justify-center">
            <img className="md:mt-11" src={calc} alt="calculator app" />
            <div className="space-y-3 flex flex-col items-center">
              <h3 className="text-baselg">Calculator App</h3>
              <p className="font-light ml-4 md:ml-0">
                This is a calculator application made with Vanilla Javascript
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
              <p className="font-light ml-4 md:ml-0">
                The classic snake game, made with Vanilla Javascript
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

      {/* <div className="space-y-5 flex flex-col items-center justify-center">
        <img className="" src={twitter} alt="twitter showcase app" />
        <div className="space-y-3 flex flex-col items-center">
          <h1 className="text-md md:text-l">Twitter Showcase</h1>
          <p className="font-light md:text-[1.2rem]">
            What I am working on now, <span className="">TWEETER</span> a
            twitter showcase full stack application that lets you see all of
            your favorite users tweets, and even random tweets of a specific
            user.
          </p>
          <h3 className="font-bold">COMING SOON</h3>
          <a
            href="https://github.com/BrandonCarp/tweeter"
            className="bg-secondaryPurple  px-2 py-1  rounded-full text-black font-bold hover:bg-secondaryPurpleLight"
          >
            See Progress
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
