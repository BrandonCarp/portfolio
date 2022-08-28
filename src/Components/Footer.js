import React from "react";

const Footer = () => {
  return (
    <div className="relative mx-auto container  flex  pt-10 ">
      <div className=" flex flex-col  p-5 space-y-10">
        <div className="">
          <h1 className="text-l">Let's Talk</h1>
          <p className="text-lightGrey font-light text-base py-5 md:w-[50%]">
            Need a developer, have questions, or just wanna say hi. I'm looking
            forward to your email.
          </p>
          <a
            href="mailto: brancarp93@gmail.com"
            className="underline underline-offset-1 hover:no-underline transition ease-in-out delay-150   hover:text-secondaryPurple hover:-translate-y-1 hover:scale-110 duration-300"
          >
            brancarp93@gmail.com
          </a>
        </div>
        <div className="flex flex-row space-x-[8rem] md:space-x-[30rem] lg:space-x-[40rem] xl:space-x-[60rem]">
          <div className="flex flex-col">
            <div>BRAN</div>
            <div>DON.</div>
          </div>
          <div className="space-x-5 w-full flex   ">
            <a
              href="https://github.com/BrandonCarp"
              className="hover:underline hover:underline-offset-1 hover:text-secondaryPurple"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-carpenter-559b15203/"
              className="hover:underline hover:underline-offset-1 hover:text-linkedInColor"
            >
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/bcarpol/"
              className="hover:underline hover:underline-offset-1 hover:text-secondaryPink"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
