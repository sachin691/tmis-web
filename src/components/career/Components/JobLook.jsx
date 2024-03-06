import { useState, useLayoutEffect, useEffect } from "react";
import JobCards from "./JobCards";
import { Pagination, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { scrollTop } from "../../../utils/methods";

const pageSize = 8;

const JobLook = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const [jobCount, setJobCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [department, setDepartment] = useState(new Set(["All"]));
  const [jobType, setJobType] = useState(new Set(["All"]));
  const [location, setLocation] = useState(new Set(["All"]));
  const [experience, setExperience] = useState(new Set(["All"]));

  const [jobsData, setJobsData] = useState([{ job_id: "", title: "", job_type: "", experience_level: "", skills: [] }]);

  useEffect(() => scrollTop(), []);

  useLayoutEffect(() => {
    const getJobs = async () => {
      try {
        const start = (currentPage - 1) * pageSize;
        const end = currentPage * pageSize;
        const response = await axios.get(`${apiUrl}/careers/activeJobs`, {
          params: {
            start,
            end,
            department: Array.from(department)[0],
            jobType: Array.from(jobType)[0],
            location: Array.from(location)[0],
            experience: Array.from(experience)[0],
          },
        });

        console.log(response);

        setJobsData(response.data.payload.jobs);
        setJobCount(response.data.payload.total);
      } catch (error) {
        console.log("Error fetching Jobs:", error);
        setJobCount(0);
      }
    };

    getJobs();
  }, [apiUrl, currentPage, department, jobType, location, experience]);

  return (
    <>
      <div className="bg-white text-black px-[3rem] md:px-[5rem] grid grid-cols-2 lg:grid-cols-4 gap-[1rem]">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              radius="none"
              className="font-semibold py-[1.2rem] px-[2.5rem]"
              endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
            >
              Department
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Department"
            selectionMode="single"
            selectedKeys={department}
            onSelectionChange={setDepartment}
          >
            <DropdownItem key="All">All</DropdownItem>
            <DropdownItem key="IT">IT</DropdownItem>
            <DropdownItem key="Sales">Sales</DropdownItem>
            <DropdownItem key="Marketing">Marketing</DropdownItem>
            <DropdownItem key="HR">Human Reasource</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              radius="none"
              className="font-semibold py-[1.2rem] px-[2.5rem]"
              endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
            >
              Job Type
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="JobType"
            selectionMode="single"
            selectedKeys={jobType}
            onSelectionChange={setJobType}
          >
            <DropdownItem key="All">All</DropdownItem>
            <DropdownItem key="Full-time">Full-Time</DropdownItem>
            <DropdownItem key="Part-time">Part Time</DropdownItem>
            <DropdownItem key="Contractual">Contractual</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              radius="none"
              className="font-semibold py-[1.2rem] px-[2.5rem]"
              endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
            >
              Location
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Location"
            selectionMode="single"
            selectedKeys={location}
            onSelectionChange={setLocation}
          >
            <DropdownItem key="All">All</DropdownItem>
            <DropdownItem key="Remote">Remote</DropdownItem>
            <DropdownItem key="In-office">In-Office</DropdownItem>
            <DropdownItem key="Hybrid">Hybrid</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              radius="none"
              className="font-semibold py-[1.2rem] px-[2.5rem]"
              endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
            >
              Experience
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Experience"
            selectionMode="single"
            selectedKeys={experience}
            onSelectionChange={setExperience}
          >
            <DropdownItem key="All">All</DropdownItem>
            <DropdownItem key="Entry-level">Entry Level</DropdownItem>
            <DropdownItem key="Mid-level">Mid Level</DropdownItem>
            <DropdownItem key="Senior">Senior</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      {jobCount ? (
        <div className="flex flex-col gap-3 items-center justify-center md:p-[4rem] p-[1rem]">
          {jobsData.map((job, ind) => (
            <JobCards
              title={job.title}
              location={job.location}
              type={job.job_type}
              experience={job.experience_level}
              skill={job.skills.skills}
              id={job.job_id}
              date={job.creation_date}
              key={ind}
            />
          ))}
          <div className="py-[2rem]">
            <Pagination
              loop
              showControls
              color="primary"
              variant="light"
              onChange={(pageNumber) => setCurrentPage(pageNumber)}
              total={jobCount ? Math.ceil(jobCount / pageSize) : 0}
              initialPage={1}
            />
          </div>
        </div>
      ) : (
        <div className="min-h-[40rem] flex justify-center items-center font-bold text-2xl text-default-500">
          <p>No Jobs Available</p>
        </div>
      )}
    </>
  );
};

export default JobLook;
