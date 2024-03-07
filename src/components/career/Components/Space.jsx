import React from "react";

const Space = ({ exp, contact, expected }) => {
  return (
    <div className="flex flex-wrap gap-x-[1rem] gap-y-[0.1rem]">
      <span className="font-semibold">Experience :</span> {exp} years
      <span className="font-semibold">Contact :</span> {contact}
      <span className="font-semibold">Expected CTC :</span> {expected} LPA
    </div>
  );
};

export default Space;
