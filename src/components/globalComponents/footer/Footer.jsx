import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Divider, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

// Local Files
import logo from "../../../globalAssets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-slate-50 px-[3rem] md:px-[5rem] py-[5rem]">
      <div className="flex flex-col lg:flex-row gap-[4rem]">
        <div className="flex flex-col gap-[2rem]">
          <Image width={300} alt="TMIS Image" src={logo} radius="none" />
          <p className="max-w-[25rem]">
            TMIS stands as a beacon of excellence in the industry, dedicated to embodying the highest values in serving
            the global community.
          </p>
          <Link to="/Privacy&Policy" className="text-blue-500">
            Privacy & Policy
          </Link>
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
                <span>Building : Unit-912 & 913, Tower-B</span>
                <span>Location : Spaze Itech Park</span>
                <span>City : Gurgoun</span>
                <span>State : Haryana</span>
                <span>Country : India</span>
              </span>
              <span className="flex flex-col sm:min-w-[20rem] md:min-w-[8rem] text-xs">
                <span className="font-bold text-base">Dehradun Office</span>
                <span>Building : Unit-181</span>
                <span>Location : Rajpur Road</span>
                <span>City : Dehradun</span>
                <span>State : Uttarakhand</span>
                <span>Country : India</span>
              </span>
              <span className="flex flex-col sm:min-w-[20rem] md:min-w-[8rem] text-xs">
                <span className="font-bold text-base">Luckhnow Office</span>
                <span>Building : Unit-311/15</span>
                <span>Location : Hazrat Ganj, Above State Bank</span>
                <span>City : Luckhnow</span>
                <span>State : UttarPradesh</span>
                <span>Country : India</span>
              </span>
              <span className="flex flex-col sm:min-w-[20rem] md:min-w-[8rem] text-xs">
                <span className="font-bold text-base">US Office</span>
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
    </div>
  );
};

export default Footer;
