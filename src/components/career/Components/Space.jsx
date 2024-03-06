import React from "react";

const Space = ({exp, contact, expected}) => {
  return (
    <div className="flex flex-wrap gap-[1rem]">
      <h1>
        <span className="font-semibold">Experience :</span> {exp} years
      </h1>
      <h1>
        <span className="font-semibold">Contact :</span> {contact}
      </h1>
      <h1>
        <span className="font-semibold">Expected CTC :</span> {expected} LPA
      </h1>
    </div>
  );
};

export default Space;
