// Local Files
import "./Home.css";

const services = [
  "International Call Center",
  "Consumer Satisfaction Survey / Mystery Shoppers",
  "Promotional Booking Services",
  "AI Services",
];

const HomeServices = () => {
  return (
    <div className="homeServices flex flex-col items-center text-white py-[5rem] gap-[2rem]">
      <div className="text-[2.5rem] font-bold">Our Services</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1rem] sm:gap-[2rem]">
        {services.map((data, index) => (
          <div
            key={index}
            className="bg-white text-black p-[3rem] w-[15rem] rounded-3xl flex justify-center items-center hover:scale-110 duration-100 font-['rubik_doodle_shadow'] font-bold leading-5"
          >
            <p className="text-center cursor-pointer">{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
