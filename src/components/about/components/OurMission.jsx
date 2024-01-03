import React from "react";
import "./About.css";
const OurMission = () => {
  return (
    <div className="h-[50rem] ourMission">
      <div className="grid grid-cols-2">
        <div className="px-[10rem] py-[8rem]">
          <div>
            <p className="text-white text-6xl font-['rubik_doodle_shadow']">
              Our Mission Is Empowering
            </p>
            <span className="text-white text-6xl font-['rubik_doodle_shadow']">
              People
            </span>
          </div>
          <div className="py-[3rem]">
            <div className="flex flex-col">
              <div className="flex py-[3rem]">
                <div className="flex flex-col gap-2">
                  <span className="text-5xl text-blue-600">2,000+</span>
                  <span className="text-xl text-white py-[0.5rem]">
                    Calls A Day
                  </span>
                </div>
                <div className="flex flex-col gap-2 px-[5rem]">
                  <span className="text-5xl text-blue-600">91%</span>
                  <span className="text-xl text-white py-[0.5rem]">
                    Efficiency
                  </span>
                </div>
              </div>
              <div className="flex ">
                <div className="flex flex-col gap-2">
                  <span className="text-5xl text-blue-600">5+</span>
                  <span className="text-xl text-white py-[0.5rem]">
                    Years Experience
                  </span>
                </div>
                <div className="flex flex-col gap-2 px-[5rem]">
                  <span className="text-5xl text-blue-600">99%</span>
                  <span className="text-xl text-white py-[0.5rem]">
                    Customer Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[10rem] py-[8rem]">
          <p className="text-white ">
            At TMIS, we are more than an outsourcing facilitator – we are your
            dedicated partners in empowerment. Committed to transcending
            conventional boundaries, we strive to elevate both individuals and
            organizations, transforming the landscape of how businesses operate
            and people thrive. Here's how we empower you:
          </p>
          <p className="text-white mt-[2rem]">
            <span className="font-bold text-blue-600">
              Efficiency Redefined:
            </span>{" "}
            Experience a paradigm shift in your workflow efficiency. We are
            dedicated to streamlining your processes, offering unparalleled
            opportunities, and expanding your team's capabilities.
          </p>
          <p className="text-white mt-[2rem]">
            <span className="font-bold text-blue-600">
              Cost-Effective Solutions:
            </span>{" "}
            Unlock the power of cost-effectiveness with our outsourcing
            services. By partnering with us, you can significantly reduce
            overhead costs associated with hiring and training full-time
            employees, allowing your resources to be invested where they matter
            the most.
          </p>
          <p className="text-white mt-[2rem]">
            <span className="font-bold text-blue-600">
              Scalability at Your Fingertips:
            </span>{" "}
            Adaptability is key to success. Our flexible solutions empower you
            to easily scale your operations up or down based on your business
            needs, ensuring that you always have the optimal resources at your
            disposal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
