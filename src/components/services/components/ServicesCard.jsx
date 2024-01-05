import React from "react";
import { Button } from "@nextui-org/react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ service, descrition, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const toUrl = "../Individual";
    navigate(toUrl, { state: index });
  };

  return (
    <div className="px-[2rem] md:px-[4rem] lg:px-[8rem] py-[1.5rem]">
      <div className={`h-auto md:h-[35rem] ServicesCard${index + 1}`}>
        <div className="h-auto md:h-[35rem]  mx-auto md:mx-[10rem] lg:w-[25rem] md:bg-white md:opacity-50">
          <div className="px-[1rem] md:px-[5rem] py-[1rem] md:py-[5rem] flex flex-col items-center md:items-start">
            <div className="font-['rubik_doodle_shadow'] text-2xl md:text-5xl text-center md:text-left text-white md:text-black">
              {service}
            </div>
            <p className="font-['rubik_doodle_shadow']  py-[1rem] md:py-[2rem] text-center md:text-left text-white md:text-black">
              {descrition}
            </p>
            <Button
              className="md:text-black  text-white mt-4"
              variant="shadow"
              radius="none"
              onClick={handleClick}
            >
              More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
