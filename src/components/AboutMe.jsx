import React from "react";
import { PiMedalFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

const AboutMe = () => {
  return (
    <div className="h-screen w-full my-24 flex flex-col gap-4">
      <span className="text-center text-2xl italic">
        "Explore the coder's story and passions, one byte at a time."
      </span>
      <span className="text-center text-7xl">About Me</span>
      <div className="flex flex-row mt-24 justify-center">
        <div className="w-2/5 flex flex-row justify-center ">
          <img
            className=" rounded-2xl w-2/3"
            src="https://res.cloudinary.com/dw58xmffd/image/upload/v1703021778/387080350_18004808654013051_2312138016343497425_n_isfqxa.jpg"
          />
        </div>
        <div className="flex flex-col gap-12 w-2/5 ">
          <div className="flex flex-row justify-evenly">
            <div className="border border-gray-500 w-2/6 text-2xl flex-col flex place-items-center p-4 gap-4 rounded-2xl">
              <PiMedalFill />
              <span className="font-bold">Experience</span>
              <p className="text-center text-xl text-gray-500">
                1 year experience in development
              </p>
            </div>
            <div className="border border-gray-500 w-2/6 text-2xl flex-col flex place-items-center p-4 rounded-2xl gap-4">
              <FaPeopleGroup />
              <span className="font-bold">Education</span>
              <p className="text-center text-xl text-gray-500">
                Final Year Undergrad Bachelor's in Computer Science from SITS
                Pune
              </p>
            </div>
          </div>
          <div className="border border-gray-500 w-3/4 place-self-center text-2xl flex-col flex place-items-center p-4 rounded-2xl gap-4">
            <MdWork />

            <p className="flex flex-row gap-4 items-center font-bold">
              <span className="">Software Developer Internship</span>

              <span className="text-lg italic text-gray-500">
                Jan 2023 - Sept 2023
              </span>
            </p>
            <p className="text-center text-xl text-gray-500">
              Final Year Undergrad Bachelor's in Computer Science from SITS Pune
            </p>
          </div>
          <p className="w-3/4 place-self-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
