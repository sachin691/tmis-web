// Dependencies
import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

// Local Files
import "./Home.css";

const Sub = () => {
  return (
    <div className="flex justify-center py-[5rem] px-[1rem]">
      <div className="max-w-[50rem] flex flex-col gap-[3rem]">
        <h1 className="font-['rubik_doodle_shadow'] font-bold text-[2rem] md:text-[2.6rem] leading-[2.7rem] text-center md:text-left">
          Elevate Your International Customer Service with TMIS Solutions
        </h1>
        <p className="text-justify text-sm md:text-base">
          Unlock the potential of exceptional customer service with TMIS. We understand that a superior customer
          experience not only retains customers but also elevates your brand image and boosts revenue. Navigating
          customer service challenges in cross-border e-commerce can be daunting. At TMIS, we specialize in addressing
          these challenges head-on. Say goodbye to language barriers! Our seasoned agents are proficient in serving end
          customers in their native languages, breaking down communication barriers and ensuring a seamless shopping
          experience.
        </p>

        <p className="text-justify text-sm md:text-base">
          Certainly! Here's a revised version of the content for your company, TMIS, providing customer care services:
          Elevate Your International Customer Service with TMIS Solutions Unlock the potential of exceptional customer
          service with TMIS. We understand that a superior customer experience not only retains customers but also
          elevates your brand image and boosts revenue. Navigating customer service challenges in cross-border
          e-commerce can be daunting
        </p>

        <Button color="primary" radius="full" className="w-[10rem] p-0 gap-0 text-white bg-[#0e3570] text-lg" size="lg">
          <Link to="../ContactUs" className="p-[8px] grow">
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Sub;
