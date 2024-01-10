// Local Files
import "./Home.css";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router";
const services = [
  "International Call Center",
  "Consumer Satisfaction Survey / Mystery Shoppers",
  "Promotional Booking Services",
  "AI Services",
];

const HomeServices = () => {
  const navigate = useNavigate();
  const images = ["hIcc", "consumer", "pb", "ai"]

  const handleClick = ({index}) => {
    console.log("here")
    navigate("/Services/Individual", {state: index})
  }
  return (
    <div className="homeServices flex flex-col items-center text-white py-[5rem] gap-[2rem]">
      <div className="text-[3.5rem] font-bold font-['rubik_doodle_shadow']">Our Services</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1rem] sm:gap-[2rem]">
        {services.map((data, index) => (
          <div
            key={index}
            className={`col-span-4 md:col-span-2 h-[15rem] w-[30rem] rounded-3xl relative overflow-hidden ${images[index]}`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Button
                className="text-white bg-black/20 p-[1.2rem] h-[4rem] text-[1.2rem] hover:scale-110 duration-100 font-['rubik_doodle_shadow'] leading-5"
                variant="flat"
                color="default"
                radius="lg"
                size="lg"
                onClick={() => handleClick({ index })}
              >
                {data}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
