import { useLayoutEffect, useState, useEffect } from "react";
import Intro from "./Intro";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Skeleton } from "@nextui-org/react";
import axios from "axios";
import { scrollTop } from "../../../utils/methods";

const JobDescription = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const [jobType, setjobType] = useState("");
  const [Department, setDepartment] = useState("");
  const [Skill, setSkill] = useState([]);
  const [Description, setDescription] = useState("");
  const [Industry, setIndustry] = useState("");
  const [Edu, setEdu] = useState([]);
  const [Profile, setProfile] = useState([]);
  const [Role, setRole] = useState("");
  const [Category, setCategory] = useState("");
  const [jobExist, setJobExist] = useState(false);

  const navigate = useNavigate();
  const { name, id } = useParams();
  if (id === undefined) {
    navigate("/Careers");
  }

  useEffect(() => scrollTop(), []);

  useLayoutEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/careers/${id}`);
        if (!response.data.success || response.data.payload.jobDetails.length === 0) {
          navigate("/Careers");
        }
        const details = response.data.payload.jobDetails[0];
        setjobType((prev) => details.job_type);
        setDepartment((prev) => details.department);
        setEdu((prev) => JSON.parse(details.required_education).education);
        setDescription((prev) => details.description);
        setIndustry((prev) => details.industry);
        setSkill((prev) => JSON.parse(details.skills).skills);
        setProfile((prev) => JSON.parse(details.required_profile).profile);
        setRole((prev) => details.role);
        setCategory((prev) => details.role_category);
        setJobExist(true);
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
      {jobExist ? (
        <div className="flex">
          <div className="flex flex-col justify-center items-start md:p-[6rem] p-[2rem] ">
            <div className="py-[3rem]">
              <h1 className="text-4xl font-bold text-black">{name}</h1>
            </div>
            <div className="text-1xl py-[1rem]">
              <h3 className="text-2xl font-bold">Job Description</h3>
              <p className="pt-[1.5rem] max-w-[100rem] text-justify">{Description}</p>
            </div>

            <div className="py-[1rem]">
              <p className="text-black text-1xl">
                <span className="font-bold">Role:</span> {Role}
              </p>
              <p>
                <span className="font-bold">Industry Type:</span> {Industry}
              </p>
              <p>
                <span className="font-bold">Department:</span> {Department}
              </p>
              <p>
                <span className="font-bold">Employment Type:</span> {jobType}
              </p>
              <p>
                <span className="font-bold">Role Category:</span> {Category}
              </p>
            </div>

            <div className="py-[1rem]">
              <h3 className="text-2xl font-bold">Education</h3>
              <ul className="p-[1rem] list-disc">
                {Edu.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>

            <div className="py-[1rem]">
              <h3 className="text-2xl font-bold">Required Candidate profile</h3>
              <ul className="p-[1rem] list-disc">
                {Profile.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>

            <div className="py-[1rem]">
              <h3 className="font-bold">Key Skills</h3>
            </div>
            <div className="flex gap-3 flex-wrap">
              {Skill.map((data, index) => (
                <Button key={index} variant="ghost" color="primary" className="border-1 border-black text-black">
                  {data}
                </Button>
              ))}
            </div>

            <div className="py-[2rem]">
              <h2 className="text-2xl font-bold">About Company</h2>
              <p className="py-[1rem] text-1xl max-w-[100rem] text-justify">
                TMIS Solutions was crafted by a team of dedicated professionals who recognized a critical need in the
                business landscape. Similar to many other businesses, there was an initial apprehension about adopting a
                Team Member Information System (TMIS), but any concerns were swiftly dispelled as we witnessed the
                incredible advantages this model brought. Beyond the evident cost savings and the freedom to redirect
                our focus towards revenue generation, implementing our TMIS solutions provided a breath of fresh air.
              </p>
            </div>

            <div className="py-[0.5rem]">
              <Button
                size="lg"
                className="bg-blue-500 text-white font-semibold rounded-xl"
                onClick={() => navigate(`/Career/Applyjob/${id}`)}
              >
                Apply
              </Button>
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
      ) : (
        <div className="p-[1rem] sm:p-[3rem] md:p-[5rem] flex flex-col gap-[1rem]">
          <Skeleton className="rounded-lg md:w-3/5">
            <div className="h-24 rounded-lg bg-default-300 md:w-3/5"></div>
          </Skeleton>
          <Skeleton className="md:w-3/5 rounded-lg">
            <div className="h-10 md:w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="md:w-3/5 rounded-lg">
            <div className="h-5 md:w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="md:w-3/5 rounded-lg">
            <div className="h-10 md:w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="md:w-3/5 rounded-lg">
            <div className="h-5 md:w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="md:w-3/5 rounded-lg">
            <div className="h-5 md:w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="md:w-3/5 rounded-lg">
            <div className="h-10 md:w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="md:w-3/5 rounded-lg">
            <div className="h-5 md:w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="md:w-3/5 rounded-lg">
            <div className="h-10 md:w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="md:w-3/5 rounded-lg">
            <div className="h-5 md:w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      )}
    </>
  );
};

export default JobDescription;
