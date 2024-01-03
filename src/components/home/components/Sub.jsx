import React from "react";
import { Button } from "@nextui-org/react";
import "./Home.css";
const Sub = () => {
  return (
    <div className="h-auto lg:h-[52rem]  items-center sub">
      <div className="w-full flex flex-col items-center">
        <div className="text-center mx-[10rem] text-white">
          <h1 className="font-['rubik_doodle_shadow'] font-bold text-[50px] pt-[4rem]">
            Elevate Your International
          </h1>
          <h1 className="font-['rubik_doodle_shadow'] font-bold text-[50px]">
            Customer Service with TMIS Solutions
          </h1>
          <p className="text-[20px] mt-[1rem]">
            Unlock the potential of exceptional customer service with TMIS. We
            understand that a superior customer experience not only retains
            customers but also elevates your brand image and boosts revenue.
          </p>
          <p className="text-[20px] mt-[1rem]">
            Navigating customer service challenges in cross-border e-commerce
            can be daunting. At TMIS, we specialize in addressing these
            challenges head-on.
          </p>

          <p className="text-[20px] mt-[6rem]">
            Say goodbye to language barriers! Our seasoned agents are proficient
            in serving end customers in their native languages, breaking down
            communication barriers and ensuring a seamless shopping experience.
          </p>
          <p className="text-[20px] mt-[1rem]">
            Certainly! Here's a revised version of the content for your company,
            TMIS, providing customer care services: Elevate Your International
            Customer Service with TMIS Solutions Unlock the potential of
            exceptional customer service with TMIS. We understand that a
            superior customer experience not only retains customers but also
            elevates your brand image and boosts revenue. Navigating customer
            service challenges in cross-border e-commerce can be daunting
          </p>

          <Button
            size="lg"
            radius="full"
            className="bg-[#0e3570] text-white mt-[6rem] text-xl mb-[1rem]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sub;
