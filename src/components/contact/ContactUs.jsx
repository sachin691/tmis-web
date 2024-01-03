import React from "react";
import "./Contact.css";
import { Input, Button } from "@nextui-org/react";
const ContactUs = () => {
  return (
    <div className="h-[70rem] ContactUs">
      <div className="flex flex-col w-[80rem] px-[10rem] py-[6rem] ">
        <h1 className="py-[1rem] font-['rubik_doodle_shadow']  text-white font-bold text-7xl">
          Contact Us
        </h1>
        <div className="w-[30rem] py-[2rem] flex-wrap md:flex-nowrap">
          <Input type="email" label="Email" className="py-[1rem]" />
          <Input type="email" label="First Name" className="py-[1rem]" />
          <Input type="email" label="Last Name" className="py-[1rem]" />
          <Input type="email" label="Company Name" className="py-[1rem]" />
          <Input type="email" label="Phone Number" className="py-[1rem]" />
          <Input type="email" label="Monthly Budget" className="py-[1rem]" />
        </div>
        <Button
          size="lg"
          className="w-[30rem] "
          variant="bordered"
          color="primary"
          radius="none"
        >
          <span>Send Message</span>
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
