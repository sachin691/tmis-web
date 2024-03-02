import React from "react";
import Intro from "./Intro";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@nextui-org/react";

const JobDescription = () => {
  const { name } = useParams();

  const location = useLocation();
  console.log("location", location);
  return (
    <>
      <Intro />
      <div className="flex">
        <div className="flex flex-col justify-center items-start md:p-[6rem] p-[2rem] ">
          <div className="py-[3rem]">
            <h1 className="text-4xl font-bold text-black">{name}</h1>
          </div>
          <div className="text-1xl py-[1rem]">
            <h3 className="text-2xl font-bold">Job Description</h3>
            <p className="pt-[1.5rem] text-start">
              Expert web frontend developer needed having vast experience in HTML/CSS, CESS/LESS. Mandatory prior
              experience with ReactJS, Redux/Mobx, FluentUI Experience with typescript and Javascript. Prior experience
              with npm and react scripts is mandatory.
            </p>
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
            <h3 className="text-2xl font-bold">Education</h3>
            <ul className="p-[1rem] list-disc">
              <li>Strong HTML5/CSS3 experience.</li>
              <li> Git management</li>
              <li>Able to speak english fluently.</li>
            </ul>
          </div>

          <div className="py-[1rem]">
            <h3 className="text-2xl font-bold">Required Candidate profile</h3>
            <ul className="p-[1rem] list-disc">
              <li>Strong HTML5/CSS3 experience.</li>
              <li>Prior experience with ReactJS, Redux, typescript, and Javascript.</li>
              <li>Prior experience with npm and react scripts</li>
              <li> Git management</li>
              <li>Able to speak english fluently.</li>
            </ul>
          </div>

          <div className="py-[1rem]">
            <h3 className="font-bold">Key Skills</h3>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button variant="ghost" color="primary" className="border-1 border-black text-black">
              HTML5
            </Button>
            <Button variant="ghost" color="primary" className="border-1 border-black text-black">
              javscript
            </Button>
            <Button variant="ghost" color="primary" className="border-1 border-black text-black">
              css
            </Button>
            <Button variant="ghost" color="primary" className="border-1 border-black text-black">
              redux
            </Button>
            <Button variant="ghost" color="primary" className="border-1 border-black text-black">
              react js
            </Button>
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
            <Link to="/Career/Applyjob">
              <Button size="lg" className="bg-blue-500 text-white font-semibold rounded-xl">
                Apply
              </Button>
            </Link>
          </div>
        </div>
        <div
          className="w-[75%] h-inherit bg-no-repeat bg-center bg-cover hidden lg:flex"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1585675705484-c2239e62a395?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>
    </>
  );
};

export default JobDescription;
