import React from "react";
import "./Pricing.css";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const Rates = () => {
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
    <div className="h-auto md:h-[40rem] rates ">
      <div className="flex justify-center">
        <p className="font-['rubik_doodle_shadow'] text-white text-2xl py-[2rem] md:text-4xl py-[1rem] font-bold text-center md:text-left">
          Starting Rates As Low As
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 justify-center ">
        {cardData.map((data, index) => (
          <Card
            key={index}
            radius="none"
            className="w-full md:w-[350px] lg:w-[400px] bg-black"
          >
            <CardHeader className="flex flex-col justify-center items-center md:items-center">
              <p className="text-xl text-blue-500 ">{data.stage}</p>
              <span className="font-bold text-white text-3xl md:text-4xl lg:text-5xl">
                {data.rate} / Hour
              </span>
              <span className="text-white text-xl md:text-2xl">
                {data.hours} / Employee / Week
              </span>
            </CardHeader>

            <CardBody>
              <ul className="list-none flex flex-col justify-center items-center text-center md:items-center">
                {data.listItems.map((item, i) => (
                  <li key={i} className="text-white px-[1rem] py-[0.5rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </CardBody>

            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Rates;
