import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Button } from "@nextui-org/react";
const Footer = () => {
  return (
    <div className=" bg-slate-50">
      <div className="mx-[8rem] py-[3rem]">
        <div className="grid grid-cols-3 gap-12">
          <div className="p-[2rem]">
            <p className="font-bold text-xl ">TMIS SOLUTIONS, CO., LTD</p>
            <p className="mt-[1rem]">
              As a leading provider in the industry, TMIS is dedicated to
              serving international customers with utmost values.
            </p>
          </div>
          <div className="p-[2rem] px-[8rem]">
            <p className="p-[0.5rem] font-semibold text-[16px]">Services</p>
            <p className="p-[0.5rem] font-semibold text-[16px]">About</p>
            <p className="p-[0.5rem] font-semibold text-[16px]">Pricing</p>
          </div>
          <div className="flex flex-col p-[2rem]">
            <div className="flex p-[0.5rem]">
              <MdEmail className="w-[1.5rem] h-[1.5rem]" />
              <span className="mx-[1rem]">support@tmissolutions.com</span>
            </div>
            <div className="flex p-[0.5rem]">
              <FaPhone className="w-[1.3rem] h-[1.3rem]" />
              <span className="mx-[1rem]">+91 9889382898</span>
            </div>
            <div className="flex p-[0.5rem]">
              <IoLocation className="w-[3rem] h-[3rem]" />
              <span className="mx-[1rem]">
                7F.-2, No. 629, Sec. 1, Chongde Rd., North Dist., Taichung City
                404511, Taiwan (R.O.C.)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
