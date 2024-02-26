import React from "react";
import Intro from "./Intro";
import { useLocation, useParams } from "react-router-dom";

const JobDescription = () => {
  const params = useParams()
  console.log(params)
  const location  = useLocation()
  console.log("location",location)
  return (
    <>
      <Intro />
      <div className="flex flex-col justify-center items-start md:p-[6rem] p-[2rem] ">
        <div className="py-[3rem]">
          <h1 className="text-4xl font-bold text-black">Job Description</h1>
        </div>
        <div className="text-1xl py-[1rem]">
          <p className="text-start">
            Expert web frontend developer needed having vast experience in HTML/CSS, CESS/LESS. Mandatory prior
            experience with ReactJS, Redux/Mobx, FluentUI Experience with typescript and Javascript. Prior experience
            with npm and react scripts is mandatory.
          </p>
        </div>
        <div className="py-[1rem]">
          <h3 className="text-2xl font-bold">Required Candidate profile</h3>
          <ul className="p-[1.5rem] list-disc">
            <li>Strong HTML5/CSS3 experience.</li>
            <li>Prior experience with ReactJS, Redux, typescript, and Javascript.</li>
            <li>Prior experience with npm and react scripts</li>
            <li> Git management</li>
            <li>Able to speak english fluently.</li>
          </ul>
        </div>

        <div className="py-[1rem]">
          <p className="text-black text-1xl">
            <span className="font-bold">Role:</span> Front End Developer
          </p>
          <p>
            <span className="font-bold">Industry Type:</span> Front End Developer
          </p>
          <p>
            <span className="font-bold">Department:</span> Front End Developer
          </p>
          <p>
            <span className="font-bold">Employment Type:</span> Front End Developer
          </p>
          <p>
            <span className="font-bold">Role Category:</span> Software Development
          </p>
        </div>

        <div className="py-[1rem]">
          <h3 className="font-bold ">Education</h3>
          <p className="py-[0.5rem]">
            <span className="font-bold">UG:</span> Front End Developer
          </p>
          <p className="py-[0rem]">
            <span className="font-bold">PG:</span> Front End Developer
          </p>
        </div>

        <div className="py-[1rem]">
          <h3 className="font-bold">Key Skills</h3>
        </div>
        <div className="flex  md:grid md:grid-cols-3 flex-col gap-3">
          <div className="py-[0.5rem] px-[1.5rem] rounded-xl border-1 border-black text-black">HTML5</div>
          <div className="py-[0.5rem] px-[1.5rem] rounded-xl border-1 border-black text-black">javscript</div>
          <div className="py-[0.5rem] px-[1.5rem] rounded-xl border-1 border-black text-black">css</div>
          <div className="py-[0.5rem] px-[1.5rem] rounded-xl border-1 border-black text-black">redux</div>
          <div className="py-[0.5rem] px-[1.5rem] rounded-xl border-1 border-black text-black">react js</div>
        </div>

        <div className="py-[2rem]">
          <h2 className="text-2xl font-bold">About Company</h2>
          <p className="py-[1rem] text-1xl">
            Founded in 2005, our commitment to excellence distinguishes us. We recruit and maintain top-tier talent
            aligned with our client-centric ethos and principles. Our remarkable retention rate underscores our
            narrative of success.
          </p>
        </div>

        <div className="py-[0.5rem]">
            <button className="py-[1rem] px-[2rem] bg-blue-500 text-white font-semibold rounded-xl">Apply</button>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
