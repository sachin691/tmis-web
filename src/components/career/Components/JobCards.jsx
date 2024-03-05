import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "@nextui-org/react";
import { getCookie } from "../../../utils/cookies";

const JobCards = ({ title, location, type, experience, skill, id, date }) => {
  const navigate = useNavigate();
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(date, "day");

  const isAdmin = getCookie("admin") ? true : false;

  return (
    <Card
      shadow="none"
      isPressable
      className="flex md:flex-row flex-col justify-between items-center h-auto bg-zinc-200 rounded-md hover:border-blue-500 hover:scale-[0.99] transition py-[0.5rem] px-[2rem] lg:px-[4rem] w-full"
    >
      <div className="flex flex-col items-center md:items-start justify-between ">
        <h1 className="text-lg font-semibold py-[0.5rem]">{title}</h1>
        <p className="py-[0.5rem]">
          {type} &#x2022; {experience} &#x2022; {location}
        </p>
        <div className="flex item-center justify-center gap-2 py-[0.5rem]">
          {skill.map((s, i) => (
            <Button
              size="sm"
              variant="ghost"
              color="primary"
              className="text-gray-500 py-1 px-2 rounded-md border border-black text-center"
            >
              {s}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-3 ">
        <p className="text-gray-500 md:p-[1rem] text-[0.8rem]">Posted {diffInDays} Days ago</p>
        <Button
          color="primary"
          variant="ghost"
          radius="sm"
          className="px-[2rem]"
          onClick={() => {
            navigate(isAdmin === false ? `/Career/Individual/${title}` : `/Career/View/2`);
          }}
        >
          {isAdmin === false ? "Apply" : "View"}
        </Button>
      </div>
    </Card>
  );
};

export default JobCards;
