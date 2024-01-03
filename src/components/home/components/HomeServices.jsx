import React from "react";
import { Image } from "@nextui-org/react";
import "./Home.css";
const HomeServices = () => {
  return (
    <div className="h-[30rem] homeServices">
      <div className="bg-white opacity-35">
        <div className=" py-[5rem]">
          <div className=" flex flex-col items-center ">
            <div className="text-3xl font-bold">Our services</div>
            <div className="mx-[2rem] py-[2rem]">
              <li className="list-none text-xl font-bold ">
                <ul className="py-[1rem]  hover:bg-[#e5e7eb] cursor-pointer p-[1rem] w-[22rem]">
                  International Call Center
                </ul>
                <ul className="py-[1rem]  hover:bg-[#e5e7eb] cursor-pointer p-[1rem] w-[22rem]">
                  Consumer Satisfaction Survey / <br />{" "}
                  <span>Mystery Shoppers</span>
                </ul>
                <ul className="py-[1rem]  hover:bg-[#e5e7eb] cursor-pointer p-[1rem] w-[22rem]">
                  Promotional Booking Services
                </ul>
                <ul className="py-[1rem] hover:bg-[#e5e7eb]  cursor-pointer p-[1rem] w-[22rem]">
                  AI Services
                </ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
