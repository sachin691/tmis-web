// Dependencies
import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import "./Home.css";

const Main = () => {
  return (
    <div className="flex items-center text-white main h-[42rem]">
      <div className="w-full flex flex-col items-center lg:items-start gap-[2rem] py-[5rem] px-[1rem] lg:px-[6rem] xl:px-[8rem] bg-transparent">
        <div>
          <h1 className="font-bold text-[3rem] sm:text-[4rem] leading-[4rem] text-center lg:text-left">
            Welcome to TMIS
          </h1>
          <h1 className="font-['rubik_doodle_shadow'] italic font-bold text-[1.7rem] leading-[4rem] text-center lg:text-left">
            " Your Trusted Partner in Excellence ! "
          </h1>
        </div>

        <p className="text-center lg:text-justify max-w-[35rem]">
          At TMIS, we pride ourselves on delivering world-class solutions to meet your business needs. Our commitment to
          excellence is reflected in every aspect of our services. With TMIS, you gain a partner you can trust, backed
          by a team that's always on-call and ready to assist you.
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
