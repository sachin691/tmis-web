import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Services", "Pricing", "About", ""];

  return (
    <Navbar
      className="h-[5rem] bg-slate-600"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start" className="gap-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden order-3 text-white"
        />

        <NavbarBrand className="order-1">
          <p className="font-bold text-inherit text-2xl text-white">TMIS</p>
        </NavbarBrand>

        <NavbarItem className="hidden md:block order-2">
          <Link to="/" className="px-[1rem] text-inherit text-xl text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block order-2">
          <Link
            to="../Services"
            className="px-[1rem] text-inherit text-xl text-white"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block order-2">
          <Link
            to="/Pricing"
            className="px-[1rem] text-inherit text-xl text-white"
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block order-2">
          <Link
            to="/About"
            className="px-[1rem] text-inherit text-xl text-white"
          >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className="sm:hidden order-4 "
        open={isMenuOpen}
        onHide={() => setIsMenuOpen(false)}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="mt-[1rem]">
            <Link
              to={`/${item}`}
              onClick={(e) => {
                setIsMenuOpen(false);
              }}
              className="w-full"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarItem className="px-[1rem] hidden md:block  order-5">
        <Link to="/ContactUs">
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
