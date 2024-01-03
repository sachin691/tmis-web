import React from "react";
import { Button } from "@nextui-org/react";
import "./Services.css";

const ServicesCard = () => {
  return (
    <div className="px-[2rem] md:px-[4rem] lg:px-[8rem] py-[1.5rem]">
      <div className="h-auto md:h-[35rem] ServicesCard">
        <div className="h-auto md:h-[35rem]  mx-auto md:mx-[10rem] lg:w-[25rem] ">
          <div className="px-[1rem] md:px-[5rem] py-[1rem] md:py-[5rem] flex flex-col items-center md:items-start">
            <div className="font-['rubik_doodle_shadow'] text-2xl md:text-5xl text-center md:text-left text-white">
              International Call Center
            </div>
            <p className="font-['rubik_doodle_shadow']  py-[1rem] md:py-[2rem] text-center md:text-left text-white">
              TMIS offers cutting-edge international inbound call services,
              presenting a golden opportunity to delve deeper into the world of
              your customers. Our team of multi-language agents adds significant
              value, ensuring efficient service delivery across diverse markets
              simultaneously.
            </p>
            <Button className="text-white mt-4" variant="ghost" radius="none">
              More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
