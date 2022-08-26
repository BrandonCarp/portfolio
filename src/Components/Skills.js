import React from "react";

const Skills = () => {
  return (
    <div className="container relative mx-auto   mb-[10rem]">
      <div className="space-y-10">
        <div className="px-3">
          <h1 className="text-l">My Skills</h1>
        </div>
        <div className="pb-5 px-3">
          <p className=" text-lightGrey font-light md:text-base">
            At the start of my coding journey I've gained an [ array ] of
            practical skills. All of which I cultivated from real world use.
          </p>
        </div>
        <div className="marker:text-secondaryPurple text-sm px-5  grid grid-rows-2 grid-flow-col gap-5 md:text-base">
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
