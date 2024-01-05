import React from "react";
import serviceData from "../assets/Services.json";
import { useLocation } from "react-router-dom";
import "./Services.css";
import { Image } from "@nextui-org/react";
import img from "../../../globalAssets/servicesCard1_80.jpg";
const IndividualService = () => {
  const location = useLocation();
  const id = location.state || 0;
  const data = serviceData.find((item) => item.id === id);

  return (
    <>
      <div className="h-auto bg-gray-400 flex p-[2rem] justify-center">
        {/* <div className="md:px-[15rem] bg-yellow-200  w-full ">
          
        </div> */}
        <div className="bg-green-200 h-[10rem] w-full px-[20rem]"></div>
      </div>
    </>
  );
};

export default IndividualService;
