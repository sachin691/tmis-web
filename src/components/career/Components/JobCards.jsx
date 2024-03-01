import React from "react";
import dayjs from "dayjs";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";


 

const JobCards = ({title, location, type, experience,skill,i}) => {
  
  const navigate = useNavigate();
  const date1 = dayjs(Date.now());
  const posted = "2023-09-28";
  const diffInDays = date1.diff(posted, "day");

  return (
    <div className="flex md:flex-row flex-col justify-between items-center h-auto bg-zinc-200 rounded-md hover:border-blue-500 hover:translate-y-1 hover:scale-103 py-[0.5rem] px-[4rem] w-full">
      <div className="flex flex-col lg:items-start items-center justify-between ">
        <h1 className="text-lg font-semibold py-[0.5rem]">{title}</h1>
        <p className="py-[0.5rem]">
          {type} &#x2022; {experience} &#x2022; {location}
        </p>
        <div className="flex md:flex-row flex-col item-center justify-center gap-2 py-[0.5rem]">
          {skill.map((s, i) => (
            <p className="text-gray-500 py-1 px-2 rounded-md border border-black text-center">{s}</p>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center p-[2rem] gap-3 ">
        <p className="text-gray-500 md:p-[1rem] text-[0.8rem]">Posted {diffInDays} Days ago</p>
        <navigate
          key={i}
          onClick={() => {
            
            navigate(`/Career/${title}`, { state: { type: "data" } });
          }}
          className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md cursor-pointer"
        >
          Apply
        </navigate>
      </div>
    </div>
  );
};

export default JobCards;
