import React from "react";
import "./Contact.css";
import { Input, Button } from "@nextui-org/react";
const ContactUs = () => {
  return (
    <div className="ContactUs flex py-[6rem] justify-evenly items-center">
      <div className="flex flex-col ">
        <h1 className="py-[1rem] font-['rubik_doodle_shadow']  text-white font-bold text-7xl">
          Contact Us
        </h1>
        <div className="w-[30rem] py-[2rem] flex-wrap md:flex-nowrap flex flex-col gap-[1rem]">
          <Input type="email" label="Email" />
          <Input type="text" label="Full Name" />
          <Input type="text" label="Company Name" />
          <Input type="text" label="Phone Number" />
          <Input type="text" label="Monthly Budget" />
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
      <div className="text-white max-w-[30rem] flex-col gap-[2rem] hidden lg:flex">
        <h1 className="font-bold text-[3rem] leading-[3rem]">TMIS Solutions</h1>
        <p>
          We're eager to hear from you! Whether you have inquiries about our
          international customer service solutions, are interested in exploring
          partnership opportunities, or simply want to learn more about how TMIS
          can elevate your business, fill out the form below. Our team is ready
          to connect with you and provide tailored solutions to meet your unique
          needs. Let's start a conversation and embark on a journey towards
          unparalleled success together. Your satisfaction is our priority, and
          we look forward to being your trusted partner in international
          customer service excellence.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
