import React from "react";

const Skills = () => {
  return (
    <div className=" container relative mx-auto   mb-[5rem]">
      <div className="space-y-10 ">
        <div className="px-3">
          <h1 className="text-l flex justify-center md:justify-start">
            My Skills
          </h1>
        </div>
        <div className="ml-[1rem] md:ml-0 pb-5 px-5">
          <p className="  font-light md:text-base mx-auto ">
            At the start of my coding journey I've gained an [ array ] of
            practical skills. All of which I cultivated from real world use.
          </p>
        </div>
        <div className="marker:text-secondaryPurple text-sm px-5 ml-[2.5rem] md:ml-0  grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-5 md:text-base">
          <li>Javascript ES6</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Bootstrap</li>
          <li>HTML {"&"} CSS</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>Git</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
