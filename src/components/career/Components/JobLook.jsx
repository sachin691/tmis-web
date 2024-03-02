import { useMemo, useState } from "react";
import JobCards from "./JobCards";
import data from "./data";
import { Pagination, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const JobLook = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 9;

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data]);

  return (
    <>
      <div className="bg-white text-black px-[3rem] md:px-[5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1rem]">
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
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="All">All</DropdownItem>
            <DropdownItem key="IT">IT</DropdownItem>
            <DropdownItem key="Sales">Sales</DropdownItem>
            <DropdownItem key="Marketing">Marketing</DropdownItem>
            <DropdownItem key="Human Reasource">Human Reasource</DropdownItem>
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
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="All">All</DropdownItem>
            <DropdownItem key="Full Time">Full Time</DropdownItem>
            <DropdownItem key="Part Time">Part Time</DropdownItem>
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
              Location
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="All">All</DropdownItem>
            <DropdownItem key="IT">Remote</DropdownItem>
            <DropdownItem key="Sales">In-Office</DropdownItem>
            <DropdownItem key="Marketing">Hybrid</DropdownItem>
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
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="All">All</DropdownItem>
            <DropdownItem key="IT">Fresher</DropdownItem>
            <DropdownItem key="Sales">Mid-Level</DropdownItem>
            <DropdownItem key="Marketing">Senior-Level</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Button
          className=" bg-blue-500 text-white font-bold py-2 rounded-md "
          endContent={<IoSearch className="mt-[0.2rem]" />}
        >
          Search
        </Button>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center md:p-[4rem] p-[1rem]">
        {items.map((job, ind) => (
          <JobCards
            title={job.title}
            location={job.location}
            type={job.type}
            experience={job.experience}
            skill={job.skills}
            i={job.ind}
          />
        ))}
        <div className="py-[2rem]">
          <Pagination
            loop
            showControls
            color="primary"
            variant="light"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export default JobLook;
