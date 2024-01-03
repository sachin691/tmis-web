import React from "react";
import "./About.css";
const AboutUs = () => {
  return (
    <div className="bg-gray-900 grid grid-cols-2 max-h-[35rem]">
      <div className="px-[8rem] py-[2rem]">
        <span className="font-['rubik_doodle_shadow'] text-white text-6xl">
          About Us
        </span>
        <p className="text-white py-[5rem]">
          Our TMIS Solutions were crafted by a team of dedicated professionals
          who recognized a critical need in the business landscape. Similar to
          many other businesses, there was an initial apprehension about
          adopting a Team Member Information System (TMIS), but any concerns
          were swiftly dispelled as we witnessed the incredible advantages this
          model brought. Beyond the evident cost savings and the freedom to
          redirect our focus towards revenue generation, implementing our TMIS
          solutions provided a breath of fresh air. We experienced the joy of
          working with team members who consistently delivered exceptional
          results, valued the opportunities presented, and willingly went beyond
          the scope of their responsibilities. We take pride in what we've
          developed, and we're enthusiastic about the prospect of collaborating
          with you to address your business needs.
        </p>
      </div>
      <div className="max-h-[35rem] about"></div>
    </div>
  );
};

export default AboutUs;
