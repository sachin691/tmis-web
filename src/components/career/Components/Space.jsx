import React from "react";

const Space = ({ exp, contact, expected }) => {
  return (
    <div className="flex flex-wrap gap-x-[1rem] gap-y-[0.1rem]">
      <p>
        <span className="font-semibold">Experience :</span> {exp} years
      </p>
      <p>
        <span className="font-semibold">Contact :</span> {contact}
      </p>
      <p>
        <span className="font-semibold">Expected CTC :</span> {expected} LPA
      </p>
    </div>
  );
};

export default Space;
