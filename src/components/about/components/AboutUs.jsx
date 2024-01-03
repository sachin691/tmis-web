import React from "react";
import "./About.css";
const AboutUs = () => {
  return (
    <div className="bg-gray-900 grid xl:grid-cols-2">
      <div className="px-[2rem] sm:px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] flex flex-col gap-[3rem]">
        <span className="font-['rubik_doodle_shadow'] text-white text-6xl font-bold">About Us</span>
        <div className="flex flex-col gap-[1rem]">
          <p className="text-white">
            TMIS Solutions was crafted by a team of dedicated professionals who recognized a critical need in the
            business landscape. Similar to many other businesses, there was an initial apprehension about adopting a
            Team Member Information System (TMIS), but any concerns were swiftly dispelled as we witnessed the
            incredible advantages this model brought. Beyond the evident cost savings and the freedom to redirect our
            focus towards revenue generation, implementing our TMIS solutions provided a breath of fresh air.
          </p>
          <p className="text-white">
            We take pride in what we've developed, and we're enthusiastic about the prospect of collaborating with you to address your
            business needs.
          </p>
        </div>
      </div>
      <div className="about"></div>
    </div>
  );
};

export default AboutUs;
