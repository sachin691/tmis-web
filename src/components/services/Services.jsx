import React from "react";
import ServicesCard from "./components/ServicesCard";
import "./components/Services.css";
const Services = () => {
  return (
    <div className="servicesBg">
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
    </div>
  );
};

export default Services;
