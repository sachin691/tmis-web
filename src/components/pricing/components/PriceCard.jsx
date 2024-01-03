import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
const PriceCard = () => {
  return (
    <Card radius="none" className="w-[350px] bg-black">
      <CardHeader className="flex flex-col justify-center">
        <p className="text-xl  text-blue-500">Bronze</p>
        <span className="font-bold text-white text-4xl">$12.50 / Hour</span>
        <span className=" text-white text-2xl">Per Employee</span>
        <span className=" text-white text-xl">
          (10 Hours / Employee / Week)
        </span>
      </CardHeader>

      <CardBody>
        <li className="list-none">
          <ul className="text-white px-[1rem]  py-[0.5rem]">
            Minimum of 5 Employees
          </ul>
          <ul className="text-white px-[1rem] py-[0.5rem]">
            Supported by American Management
          </ul>
          <ul className="text-white px-[1rem] py-[0.5rem]">
            Full Pbx and Call Transfer Features
          </ul>
          <ul className="text-white px-[1rem] py-[0.5rem]">
            Free Training Hours Included
          </ul>
          <ul className="text-white px-[1rem] py-[0.5rem]">
            Utilization of Remote Desktop
          </ul>
          <ul className="text-white px-[1rem] py-[0.5rem]">
            Willingness to Adhere to Additional Security Standards
          </ul>
        </li>
      </CardBody>

      <CardFooter></CardFooter>
    </Card>
  );
};

export default PriceCard;
