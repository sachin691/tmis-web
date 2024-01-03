import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-50 px-[3rem] md:px-[5rem] py-[5rem]">
      <div className="flex flex-col lg:flex-row gap-[4rem]">
        <div>
          <p className="font-bold text-xl">TMIS SOLUTIONS CO. LTD</p>
          <p className="mt-[1rem]">
            As a leading provider in the industry, TMIS is dedicated to serving international customers with utmost
            values.
          </p>
        </div>
        <div className="hidden lg:block">
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
        <div className="flex flex-col gap-[1rem]">
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
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-[1rem] md:gap-0 md:flex-row">
              <span className="mx-[1rem]">
                <span className="font-bold">Main Office</span> : Unit-912 & 913 ,tower-B Spaze Itech Park , Gurgoun,
                India
              </span>
              <span className="mx-[1rem]">
                <span className="font-bold">Dehradun office</span> : 181 ,Rajpur Road, Dehradun, uk-248001
              </span>
              <span className="mx-[1rem]">
                <span className="font-bold">Luckhnow Office</span> : 311/15 hazrat ganj, Above State Bank, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
