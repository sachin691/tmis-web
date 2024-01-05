// Local Files
import "./About.css";

const achievements = [
  {
    name: "2,000+",
    desc: "Calls A Day",
  },
  {
    name: "91%",
    desc: "Efficiency",
  },
  {
    name: "5+",
    desc: "Years Experience",
  },
  {
    name: "99%",
    desc: "Customer Satisfaction",
  },
];

const OurMission = () => {
  return (
    <div className="ourMission py-[5rem] lg:py-0">
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <div className="lg:py-[8rem] lg:max-w-[25rem] flex flex-col items-center lg:items-start">
          <p className="text-white text-6xl font-['rubik_doodle_shadow'] text-center lg:text-left">Our Mission Is Empowering Connections</p>
          <div className="py-[3rem] grid grid-cols-2 gap-[2rem] justify-center items-center max-w-[25rem]">
            {achievements.map((data, index) => (
              <div className="flex flex-col gap-2 max-w-[8rem]" key={index}>
                <span className="text-5xl text-blue-600">{data.name}</span>
                <span className="text-xl text-white py-[0.5rem]">{data.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:py-[8rem] px-[2rem] lg:px-0 lg:max-w-[30rem]">
          <p className="text-white ">
            At TMIS, we are more than an outsourcing facilitator – we are your dedicated partners in empowerment.
            Committed to transcending conventional boundaries, we strive to elevate both individuals and organizations,
            transforming the landscape of how businesses operate and people thrive. Here's how we empower you:
          </p>
          <p className="text-white mt-[2rem]">
            <span className="font-bold text-blue-600">Efficiency Redefined:</span> Experience a paradigm shift in your
            workflow efficiency. We are dedicated to streamlining your processes, offering unparalleled opportunities,
            and expanding your team's capabilities.
          </p>
          <p className="text-white mt-[2rem]">
            <span className="font-bold text-blue-600">Cost-Effective Solutions:</span> Unlock the power of
            cost-effectiveness with our outsourcing services. By partnering with us, you can significantly reduce
            overhead costs associated with hiring and training full-time employees, allowing your resources to be
            invested where they matter the most.
          </p>
          <p className="text-white mt-[2rem]">
            <span className="font-bold text-blue-600">Scalability at Your Fingertips:</span> Adaptability is key to
            success. Our flexible solutions empower you to easily scale your operations up or down based on your
            business needs, ensuring that you always have the optimal resources at your disposal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
