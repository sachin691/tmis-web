import React from "react";
import ServicesCard from "./ServicesCard";
const AllServices = () => {
  const data = [
    {
      service: "International Call Center",
      description:
        "Access our dedicated international call center for prompt and efficient customer support.",
    },
    {
      service: "Consumer Satisfaction Survey / Mystery Shoppers",
      description:
        "Gain valuable insights into customer satisfaction levels and enhance your services based on real feedback.",
    },
    {
      service: "Promotional Booking Service",
      description:
        "Boost your sales with our promotional booking service, reaching a wider audience and driving customer engagement.",
    },
    {
      service: "AI Services",
      description:
        "Embrace the future of customer service with our advanced AI solutions, providing a personalized and efficient experience for your customers.",
    },
  ];
  return (
    <div className="servicesBg">
      {data.map((item, index) => (
        <ServicesCard
          index={index}
          service={item.service}
          descrition={item.description}
        />
      ))}
    </div>
  );
};

export default AllServices;
