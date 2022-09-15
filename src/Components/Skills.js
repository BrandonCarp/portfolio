import React from "react";

const Skills = () => {
  return (
    <div className="relative container mx-auto mb-20">
      <div className=" flex flex-col items-center p-5 space-y-10">
        <div className="">
          <h1 className="text-l md:text-xl">My Skills</h1>
        </div>
        <div className=" flex justify-center items-center md:w-[80%]">
          <p className="font-light text-[1.2rem]">
            At the start of my coding journey I've gained an [ array ] of
            practical skills. All of which I cultivated from real world use.
          </p>
        </div>
        <div className="marker:text-secondaryPurple   grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-5  ">
          <li className="md:text-[1.2rem]">Vanilla Javascript ES6</li>
          <li className="md:text-[1.2rem]">Node.js</li>
          <li className="md:text-[1.2rem]">Express.js</li>
          <li className="md:text-[1.2rem]">Responsive Design</li>
          <li className="md:text-[1.2rem]">Google</li>
          <li className="md:text-[1.2rem]">React</li>
          <li className="md:text-[1.2rem]">Tailwind</li>
          <li className="md:text-[1.2rem]">Git</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
