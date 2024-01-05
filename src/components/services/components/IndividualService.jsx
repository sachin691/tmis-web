import React from "react";
import serviceData from "../assets/Services.json";
import { useLocation } from "react-router-dom";
import "./Services.css";
import { Button } from "@nextui-org/react";

const IndividualService = () => {
  const location = useLocation();
  const id = location.state || 0;
  const data = serviceData.find((item) => item.id === id);

  return (
    <>
      <div className="flex flex-col px-[2rem] md:px-[4rem] lg:px-[16rem] py-[1.5rem]">
        <div
          className={`h-[20rem] md:h-[25rem] rounded ServicesCard${id + 1}${
            id + 1
          }`}
        >
          <div className="h-auto md:h-[35rem]  mx-auto md:mx-[10rem] lg:w-[25rem] "></div>
        </div>
        <div className="py-[3rem] flex flex-col items-center gap-[2rem]">
          <div className="flex flex-col items-start gap-[2rem] w-full">
            <h1 className="font-['lilita_one'] text-[2.3rem] text-start lg:text-left">
              <span className="text-black font-bold">
                {data?.title.special}
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-[1rem] px-[1rem] ">
            {data?.content.map((item, index) => (
              <div key={index} className="flex flex-col gap-[0.5rem]">
                {item.heading ? (
                  <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800">
                    {String(index) + ". " + item.heading}
                  </h1>
                ) : null}
                <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <Button
            variant="solid"
            size="lg"
            className="p-[20px] bg-[#f5a524] text-white"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default IndividualService;
