import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Divider, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

// Local Files
import logo from "../../../globalAssets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-slate-50 px-[3rem] md:px-[5rem] py-[5rem] pb-0">
      <div className="flex flex-col lg:flex-row gap-[4rem]">
        <div className="flex flex-col gap-[2rem]">
          <Image width={300} alt="TMIS Image" src={logo} radius="none" />
          <p className="max-w-[25rem]">
            TMIS stands as a beacon of excellence in the industry, dedicated to embodying the highest values in serving
            the global community.
          </p>
          <div className="flex flex-col">
            <Link to="/Privacy&Policy" className="text-blue-500">
              Privacy & Policy
            </Link>
            <Link to="/Refund" className="text-blue-500">
              Refund & Cancellation Policy
            </Link>
            <Link to="/T&C" className="text-blue-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center">
          <Link to="../Services">
            <p className="p-[0.5rem] font-semibold text-[16px]">Services</p>
          </Link>
          <Link to="../About">
            <p className="p-[0.5rem] font-semibold text-[16px]">About</p>
          </Link>
          <Link to="../ContactUs">
            <p className="p-[0.5rem] font-semibold text-[16px]">Contact</p>
          </Link>
          <Link to="../Pricing">
            <p className="p-[0.5rem] font-semibold text-[16px]">Pricing</p>
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-[1rem]">
          <div className="flex flex-col md:flex-row gap-[1rem] md:gap-0 justify-evenly items-center">
            <div className="flex">
              <MdEmail className="w-[1.5rem] h-[1.5rem]" />
              <span className="mx-[1rem]">admin@tmissolutions.com </span>
            </div>
            <div className="flex">
              <FaPhone className="w-[1.3rem] h-[1.3rem]" />
              <span className="mx-[1rem]">+91 9205453309</span>
            </div>
          </div>
          <Divider />
          <div className="flex md:flex-col items-center">
            <div className="grid grid-cols-1 md:flex gap-[1rem] lg:flex-row">
              <span className="flex flex-col min-w-[20rem] md:min-w-[8rem] text-xs">
                <span className="font-bold text-base">Main Office</span>
                <span>Building : House No 2068</span>
                <span>Location : Sector 57, Sadar Bazar</span>
                <span>City : Gurugram, 122001</span>
                <span>State : Haryana</span>
                <span>Country : India</span>
              </span>
              <span className="flex flex-col sm:min-w-[20rem] md:min-w-[8rem] text-xs">
                <span className="font-bold text-base">Dehradun Address</span>
                <span>Building : Unit-181</span>
                <span>Location : Rajpur Road</span>
                <span>City : Dehradun</span>
                <span>State : Uttarakhand</span>
                <span>Country : India</span>
              </span>
              <span className="flex flex-col sm:min-w-[20rem] md:min-w-[8rem] text-xs">
                <span className="font-bold text-base">Lucknow Address</span>
                <span>Building : Unit-311/15</span>
                <span>Location : Hazrat Ganj, Above State Bank</span>
                <span>City : Luckhnow</span>
                <span>State : UttarPradesh</span>
                <span>Country : India</span>
              </span>
              <span className="flex flex-col sm:min-w-[20rem] md:min-w-[8rem] text-xs">
                <span className="font-bold text-base">US Address</span>
                <span>Building : Unit-544</span>
                <span>Location : McCabe Street</span>
                <span>City : Port Charlotte</span>
                <span>State : Florida</span>
                <span>Country : USA</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-700 font-bold text-md md:text-xl mt-[3rem] py-[1rem] border-t-[0.1rem]">
        © 2024 TRAVELMAGNET INFOTECH PRIVATE LIMITED • All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
