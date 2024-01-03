import React from "react";
import { Button } from "@nextui-org/react";
import "./Services.css";
const ServicesCard = () => {
  return (
    <div className="px-[8rem] py-[1rem]">
      <div className="h-[35rem]  ServicesCard">
        <div className=" h-[35rem] bg-white mx-[10rem] w-[25rem] bg-opacity-50">
          <div className="px-[5rem] py-[5rem]">
            <div className=" font-['rubik_doodle_shadow'] text-5xl">
              International Call Center
            </div>
            <p className="font-['rubik_doodle_shadow'] text-gray-900 py-[2rem]">
              TMIS offers cutting-edge international inbound call services,
              presenting a golden opportunity to delve deeper into the world of
              your customers. Our team of multi-language agents adds significant
              value, ensuring efficient service delivery across diverse markets
              simultaneously.
            </p>
            <Button className="text-white" variant="ghost" radius="none">
              More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
