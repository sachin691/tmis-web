import React, { useLayoutEffect, useState } from "react";
import Intro from "./Intro";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@nextui-org/react";
import axios from "axios";

const JobDescription = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const [jobDetails, setJobDetails] = useState({
    job_id: "",
    title: "",
    job_type: "",
    experience_level: "",
    department: "",
    skills: {skills: []},
    description: "",
    industry: "",
    location: "",
    required_education: {education: []},
    required_profile: {profile: []},
    role: "",
    role_category: ""
  });
  const navigate = useNavigate();
  const { name, id } = useParams();
  if (id === undefined) {
    navigate("/Careers");
  }

  useLayoutEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/careers/${id}`);
        if (!response.data.success || response.data.payload.jobDetails.length === 0) {
          navigate("/Careers");
        }
        setJobDetails(response.data.payload.jobDetails[0]);
      } catch (error) {
        console.log("Error fetching Jobs:", error);
        navigate("/Careers");
      }
    };

    getJobs();
  }, [apiUrl, id]);

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
            <p className="pt-[1.5rem] text-start">{jobDetails.description}</p>
          </div>

          <div className="py-[1rem]">
            <p className="text-black text-1xl">
              <span className="font-bold">Role:</span> {jobDetails.role}
            </p>
            <p>
              <span className="font-bold">Industry Type:</span> {jobDetails.industry}
            </p>
            <p>
              <span className="font-bold">Department:</span> {jobDetails.department}
            </p>
            <p>
              <span className="font-bold">Employment Type:</span> {jobDetails.job_type}
            </p>
            <p>
              <span className="font-bold">Role Category:</span> {jobDetails.role_category}
            </p>
          </div>

          <div className="py-[1rem]">
            <h3 className="text-2xl font-bold">Education</h3>
            <ul className="p-[1rem] list-disc">
              {jobDetails.required_education.education.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>

          <div className="py-[1rem]">
            <h3 className="text-2xl font-bold">Required Candidate profile</h3>
            <ul className="p-[1rem] list-disc">
              {jobDetails.required_profile.profile.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>

          <div className="py-[1rem]">
            <h3 className="font-bold">Key Skills</h3>
          </div>
          <div className="flex gap-3 flex-wrap">
            {jobDetails.skills.skills.map((data, index) => (
              <Button key={index} variant="ghost" color="primary" className="border-1 border-black text-black">
                {data}
              </Button>
            ))}
          </div>

          <div className="py-[2rem]">
            <h2 className="text-2xl font-bold">About Company</h2>
            <p className="py-[1rem] text-1xl">
              TMIS Solutions was crafted by a team of dedicated professionals who recognized a critical need in the
              business landscape. Similar to many other businesses, there was an initial apprehension about adopting a
              Team Member Information System (TMIS), but any concerns were swiftly dispelled as we witnessed the
              incredible advantages this model brought. Beyond the evident cost savings and the freedom to redirect our
              focus towards revenue generation, implementing our TMIS solutions provided a breath of fresh air.
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
