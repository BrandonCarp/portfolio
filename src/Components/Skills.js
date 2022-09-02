import React from "react";

const Skills = () => {
  return (
    <div className="relative container mx-auto mb-20">
      <div className=" flex flex-col items-center p-5 space-y-10">
        <div className="">
          <h1 className="text-l">My Skills</h1>
        </div>
        <div className="">
          <p className="font-light">
            At the start of my coding journey I've gained an [ array ] of
            practical skills. All of which I cultivated from real world use.
          </p>
        </div>
        <div className="marker:text-secondaryPurple   grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-5 ">
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
