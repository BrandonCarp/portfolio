import React from "react";

const Footer = () => {
  return (
    <div className="relative container mx-auto p-5">
      <div className="mb-20 flex flex-col">
        <div className="space-y-3 mb-5 flex flex-col items-center">
          <h1 className="text-l">Let's Talk</h1>
          <p className="font-light pl-2 md:pl-0 ">
            Need a developer, have questions, or just wanna say hi. I'm looking
            forward to your email.
          </p>
          <div className="">
            <a
              href="mailto: brancarp93@gmail.com"
              className=" hover:text-secondaryPurple "
            >
              brancarp93@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-[25%]">
        <div className="">
          <div>BRAN</div>
          <div>DON.</div>
        </div>
        <div className="space-x-3 flex  items-center text-sm font-light  ">
          <a
            href="https://github.com/BrandonCarp"
            className=" hover:text-secondaryPurple"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-carpenter-559b15203/"
            className=" hover:text-linkedInColor"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/bcarpol/"
            className=" hover:text-secondaryPink"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
