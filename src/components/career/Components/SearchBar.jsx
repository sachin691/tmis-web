import React from "react";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center lg:gap-1 gap-3 bg-white text-black xl:p-[2rem] p-[1rem]">
      <div>
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button
              variant="bordered"
              radius="none"
              className="font-semibold"
              endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
            >
              Department
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="IT">IT</DropdownItem>
            <DropdownItem key="Sales">Sales</DropdownItem>
            <DropdownItem key="Marketing">Marketing</DropdownItem>
            <DropdownItem key="Human Reasource">Human Reasource</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div>
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button
              variant="bordered"
              radius="none"
              className="font-semibold"
              endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
            >
              Job Type
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="Full Time">Full Time</DropdownItem>
            <DropdownItem key="Part Time">Part Time</DropdownItem>
            <DropdownItem key="Hybrid">Hybrid</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div>
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button
              variant="bordered"
              radius="none"
              className="font-semibold"
              endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
            >
              Location
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="IT">Remote</DropdownItem>
            <DropdownItem key="Sales">In-Office</DropdownItem>
            <DropdownItem key="Marketing">Hybrid</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div>
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button
              variant="bordered"
              radius="none"
              className="font-semibold"
              endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
            >
              Experience
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem key="IT">Fresher</DropdownItem>
            <DropdownItem key="Sales">Mid-Level</DropdownItem>
            <DropdownItem key="Marketing">Senior-Level</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <button className=" w-44 bg-blue-500 text-white font-bold py-2 rounded-md">Search</button>
    </div>
  );
};

export default SearchBar;
