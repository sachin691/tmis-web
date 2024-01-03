import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
} from "@nextui-org/react";
import { SearchIcon } from "../../globalSubComponents/SearchIcon";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Navbar className="h-[5rem] bg-slate-600 " shouldHideOnScroll>
      <NavbarContent justify="start" className="gap-0">
        <NavbarBrand>
          <p className="font-bold text-inherit text-2xl text-white">TMIS</p>
        </NavbarBrand>
        <NavbarItem>
          <Link to="/" className="px-[1rem] text-inherit text-xl text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/Services"
            className="px-[1rem] text-inherit text-xl text-white"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/Pricing"
            className="px-[1rem] text-inherit text-xl text-white"
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/About"
            className="px-[1rem] text-inherit text-xl text-white"
          >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem className="px-[1rem]">
        <Link to="./ContactUs">
          <Button
            radius="full"
            variant="solid"
            color="warning"
            className="p-[20px]"
          >
            Contact Us
          </Button>
        </Link>
      </NavbarItem>
    </Navbar>
  );
};

export default NavBar;
