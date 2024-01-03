import React from "react";
import { Image } from "@nextui-org/react";
import "./Home.css";

const Main = () => {
  return (
    <div className="h-auto lg:h-[40rem] flex flex-col lg:flex-row items-center text-white main">
      <div className="w-full flex flex-col items-center lg:items-start gap-[2rem] py-[3rem] px-[1rem] lg:px-[6rem] xl:px-[8rem] bg-[rgba(0,0,0,0.5)] xl:bg-transparent">
        <div>
          <h1 className="font-['rubik_doodle_shadow'] text-[2rem] sm:text-[2.5rem] lg:text-[4rem]  text-center lg:text-left ">
            We Are The Best Choice
          </h1>
          <h1 className="font-['rubik_doodle_shadow'] text-[2rem] sm:text-[2.5rem] lg:text-[4rem] leading-[2rem] text-center lg:text-left">
            Playing Crucial Part
          </h1>
        </div>

        <p className="max-w-[26rem] text-center lg:text-justify">
          We are a dynamic digital marketing agency dedicated to crafting
          innovative solutions for businesses seeking a powerful online
          presence.
        </p>
      </div>
      <Image alt="hg" width={300} src="" className="lg:ml-[2rem]" />
    </div>
  );
};

export default Main;
