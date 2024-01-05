import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const PriceCard = () => {
  const cardData = [
    {
      stage: "Bronze",
      rate: "$12.50",
      hours: "10 Hours",
      listItems: [
        "Minimum of 5 Employees",
        "Supported by American Management",
        "Full Pbx and Call Transfer Features",
        "Free Training Hours Included",
        "Utilization of Remote Desktop",
        "Willingness to Adhere to Additional Security Standards",
      ],
    },
  ];
  return (
    <Card radius="none" className="w-full md:w-[350px] lg:w-[400px] bg-black">
      <CardHeader className="flex flex-col justify-center items-center md:items-center">
        <p className="text-xl text-blue-500 ">Bronze</p>
        <span className="font-bold text-white text-3xl md:text-4xl lg:text-5xl">
          $12.50 / Hour
        </span>
        <span className="text-white text-xl md:text-2xl">Per Employee</span>
        <span className="text-white text-lg md:text-xl">
          (10 Hours / Employee / Week)
        </span>
      </CardHeader>

      <CardBody>
        <ul className="list-none flex flex-col justify-center items-center text-center md:items-center">
          <li className="text-white px-[1rem] py-[0.5rem]">
            Minimum of 5 Employees
          </li>
          <li className="text-white px-[1rem] py-[0.5rem]">
            Supported by American Management
          </li>
          <li className="text-white px-[1rem] py-[0.5rem]">
            Full Pbx and Call Transfer Features
          </li>
          <li className="text-white px-[1rem] py-[0.5rem]">
            Free Training Hours Included
          </li>
          <li className="text-white px-[1rem] py-[0.5rem]">
            Utilization of Remote Desktop
          </li>
          <li className="text-white px-[1rem] py-[0.5rem] ">
            Willingness to Adhere to Additional Security Standards
          </li>
        </ul>
      </CardBody>

      <CardFooter></CardFooter>
    </Card>
  );
};

export default PriceCard;
