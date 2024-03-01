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
      <div className="flex items-center justify-center p-[2rem]">
        <h1 className="text-3xl font-bold">Kindly Fill The Details</h1>
      </div>

      <div className=" h-auto p-[1rem]">
        <form action="" className="flex flex-col  gap-[2rem] items-center grow ">
          <div className="flex flex-col items-start">
            <label htmlFor="" className="py-[0.2rem]">
              First Name <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>
            <label htmlFor="" className="py-[0.2rem]">
              Last Name <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Email <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Contact <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Year of Graduation <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Gender <span className="text-red-800"></span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Experience In Years <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Current Employer <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" className="" size="xs" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Current CTC(In Lakh per Annum) <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Expected CTC(In Lakh per Annum) <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Notice Period(In Month) <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Current Location <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Preferred Location <span className="text-red-800">*</span>
            </label>
            <div className="border-2 border-gray-400 md:w-[45rem] w-[20rem]">
              <Input type="text" label="" name="First Name" id="First Name" size="xs" className="" radius="none" />
            </div>

            <label htmlFor="" className="py-[0.2rem]">
              Upload Your Resume <span className="text-red-800">*</span>
            </label>
            <input
              type="file"
              id="myFile"
              name="Resume"
              accept=".pdf, .docx"
              className="py-[0.5rem] px-[0.3rem] bg-[#E4E4E7] rounded-xl"
            />
          </div>

          
          <Button
            variant="shadow"
            className="w-[10rem] py-[1rem] px-[2rem] text-white bg-blue-500"
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
