import React from "react";
import Intro from "./Intro";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";

const ApplyForm = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/paper-style-wavy-background_23-2149116133.jpg?w=996&t=st=1709490657~exp=1709491257~hmac=12bb40978de0c4c56b8832b669f4449829ef8a9e4c62cdc48ab6ada116438b72')",
      }}
    >
      <Intro />
      <div className="flex items-center justify-center p-[2rem] mt-[4rem]">
        <h1 className="text-3xl font-bold">Kindly Fill The Details</h1>
      </div>

      <form action="" className="flex flex-col  gap-[2rem] items-center grow">
        <div className="flex flex-col items-start bg-white p-[3rem] rounded-lg">
          <label htmlFor="" className="py-[0.5rem]">
            First Name <span className="text-red-800">*</span>
          </label>
          <div className=" sm:w-[30rem] md:w-[45rem] w-[19rem] ">
            <Input
              type="text"
              label=""
              name="First Name"
              id="First Name"
              size="xs"
              color="primary"
              className=""
              radius="none"
              variant="bordered"
            />
          </div>
          <label htmlFor="" className="py-[0.5rem]">
            Last Name <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="text"
              variant="bordered"
              label=""
              name="First Name"
              id="First Name"
              size="xs"
              className=""
              radius="none"
              color="primary"
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Email <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="email"
              label=""
              name="email"
              id="email"
              size="xs"
              className=""
              radius="none"
              color="primary"
              variant="bordered"
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Contact <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Phone"
              label=""
              name="phone"
              id="phone"
              size="xs"
              className=""
              radius="none"
              color="primary"
              variant="bordered"
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Year of Graduation <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Date"
              label=""
              name="First Name"
              id="First Name"
              size="xs"
              className=""
              radius="none"
              color="primary"
              variant="bordered"
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Gender <span className="text-red-800"></span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="text"
              label=""
              name="First Name"
              id="First Name"
              size="xs"
              className=""
              radius="none"
              color="primary"
              variant="bordered"
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Experience In Years <span className="text-red-800"></span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Number"
              label=""
              name="First Name"
              id="First Name"
              size="xs"
              className=""
              radius="none"
              color="primary"
              variant="bordered"
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Current Employer <span className="text-red-800"></span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="text"
              label=""
              name="First Name"
              id="First Name"
              className=""
              size="xs"
              radius="none"
              color="primary"
              variant="bordered"
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Current CTC(In Lakh per Annum) <span className="text-red-800"></span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Number"
              label=""
              name="First Name"
              id="First Name"
              size="xs"
              className=""
              radius="none"
              color="primary"
              variant="bordered"
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Expected CTC(In Lakh per Annum) <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Number"
              label=""
              name="First Name"
              id="First Name"
              size="xs"
              className=""
              radius="none"
              color="primary"
              variant="bordered"
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Notice Period(In Month) <span className="text-red-800"></span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="Number"
              label=""
              name="First Name"
              id="First Name"
              size="xs"
              className=""
              radius="none"
              color="primary"
              variant="bordered"
            />
          </div>

          <label htmlFor="" className="py-[0.5rem]">
            Current Location <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <Input
              type="text"
              label=""
              name="First Name"
              id="First Name"
              size="xs"
              className=""
              radius="none"
              color="primary"
              variant="bordered"
            />
          </div>

          

          <label htmlFor="" className="py-[0.5rem]">
            Upload Your Resume <span className="text-red-800">*</span>
          </label>
          <div className="sm:w-[30rem] md:w-[45rem] w-[19rem]">
            <input type="file" id="myFile" name="Resume" accept=".pdf, .docx" className="" />
          </div>
        </div>

        <Button
          className="w-[10rem] py-[1rem] px-[2rem] text-white bg-blue-500 mb-[3rem] mt-[2rem]"
          endContent={<IoSend className="mt-[0.2rem]" />}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ApplyForm;
