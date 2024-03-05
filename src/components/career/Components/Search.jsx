import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Pagination, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";

const Search = () => {
  return (
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
  );
};

export default Search;
