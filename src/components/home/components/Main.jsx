// Dependencies
import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import "./Home.css";

const   Main = () => {
  return (
    <div className="flex items-center text-white main h-auto">
      <div className="w-full flex flex-col items-center lg:items-start gap-[2rem] py-[5rem] px-[1rem] lg:px-[6rem] xl:px-[8rem] bg-transparent">
        <div>
          <h1 className="font-bold text-[2rem]  sm:text-[4rem] leading-[2rem] text-center lg:text-left">
            Welcome to TMIS <br /> Solutions
          </h1>
          <h1 className="font-['rubik_doodle_shadow'] italic font-bold sm:text-[1.4rem] md:text-[1.7rem] leading-[2rem] py-[1rem] text-center lg:text-left">
            "Your Trusted Partner for International Customer <br /> Service Excellence!"
          </h1>
        </div>
        <p className="text-center lg:text-justify max-w-[35rem]">
          At TMIS <span className="font-bold">(Travelmagnet Infotech Private Limited)</span> Solutions, we understand the critical role that
          customer service plays in driving customer retention, enhancing brand image, and ultimately boosting revenue.
          Our mission is to alleviate the challenges faced by cross-border e-commerce businesses, particularly in
          dealing with customer service and language barriers.
        </p>

        <Button
          variant="ghost"
          color="default"
          radius="full"
          endContent={<FaArrowCircleRight className="mt-[0.2rem] mr-[1rem]" />}
          className="w-[9rem] p-0 gap-0 text-white hover:text-[black]"
        >
          <Link to="../About" className="p-[8px] grow">
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Main;
