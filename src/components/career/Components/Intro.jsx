import React from "react";
import "./Intro.css";
const Intro = () => {
  return (
    <div className="bg-gray-900 grid xl:grid-cols-2">
      <div className="px-[2rem] sm:px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] flex flex-col gap-[3rem]">
        <span className="font-['rubik_doodle_shadow'] text-white text-6xl font-bold">Career</span>
        <div className="flex flex-col gap-[1rem]">
          <p className="text-white">
            "Embark on a fulfilling career journey with us! Explore exciting opportunities, develop valuable skills, and
            achieve your professional aspirations. Join our dynamic team and make a meaningful impact in a collaborative
            and innovative work environment. Discover your potential with us today!"
          </p>
          
        </div>
      </div>
      <div className="career"></div>
    </div>
  );
};

export default Intro;
