import React from "react";
import Intro from "./Intro";
import { Input } from "@nextui-org/react";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSend } from "react-icons/io5";

const ApplyForm = () => {
  return (
    <>
      <Intro />
      <div className="flex items-center justify-center p-[3rem]">
        <h1 className="text-3xl font-bold">Kindly Fill The Details</h1>
      </div>

      <div className="bg-slate-600 h-auto p-[3rem]">
        <form action="" className="flex flex-col gap-[2rem] items-center grow ">
          <div className="flex md:flex-row flex-col gap-[1rem] lg:w-[60rem] md:w-[40rem] w-[20rem]">
            <Input type="text" label="First Name" name="First Name" id="First Name" className="" />
            <Input type="text" label="Last Name" name="Last Name" id="Last Name" />
          </div>

          <div className="flex md:flex-row flex-col gap-[1rem] lg:w-[60rem] md:w-[40rem]  w-[20rem]">
            <Input type="number" label="Contact Number" name="Contact Number" id="Contact Number" />
            <Input type="email" label="Email" name="email" id="email" />
          </div>

          <div className="flex md:flex-row flex-col gap-[1rem] lg:w-[60rem] md:w-[40rem]  w-[20rem]">
            <Input type="text" label="Current Address" name="Address" id="Address" />
            <Input type="text" label="Current City" name="City" id="City" />
          </div>
          <div className="flex md:flex-row flex-col gap-[1rem] lg:w-[60rem]  md:w-[40rem]  w-[20rem]">
            <Input type="text" label="State" name="State" id="State" />
            <Input type="number" label="Pincode" name="Pincode" id="Pincode" />
          </div>

          <div className="flex md:flex-row flex-col item-center justify-center lg:w-[60rem] w-auto gap-[1rem] lg:gap-[3rem]">
            <input
              type="file"
              id="myFile"
              name="Resume"
              accept=".pdf"
              className="py-[0.5rem] px-[0.3rem] bg-[#E4E4E7] rounded-xl"
            />
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="font-semibold lg:px-[4rem] px-[1rem] py-[1rem] text-white"
                  endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
                >
                  Choose Department
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="IT">IT</DropdownItem>
                <DropdownItem key="Sales">Sales</DropdownItem>
                <DropdownItem key="Marketing">Marketing</DropdownItem>
                <DropdownItem key="Human Reasource">Human Reasource</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="font-semibold  lg:px-[4rem] px-[1rem] py-[1rem] text-white"
                  endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
                >
                  Choose Profile
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="IT">Frontend </DropdownItem>
                <DropdownItem key="Sales">Backend</DropdownItem>
                <DropdownItem key="Marketing">IT Sales</DropdownItem>
                <DropdownItem key="Human Reasource">HR</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Button
            variant="shadow"
            className="w-[10rem] py-[1rem] px-[2rem] text-white bg-[#EAA028]"
            endContent={<IoSend className="mt-[0.2rem]" />}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default ApplyForm;
