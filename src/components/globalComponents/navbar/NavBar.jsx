import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNavStatus } from "../../../store/navOpenStatusSlice";
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
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const curTab = useSelector((state) => state.curTab.value);
  const navOpenStatus = useSelector((state) => state.navOpenStatus.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItems = ["Home", "Services", "Pricing", "About", ""];
  const handleContactUs = () => {
    navigate("/ContactUs");
  };
  return (
    <Navbar
      isMenuOpen={navOpenStatus}
      className="h-[5rem] bg-slate-600"
      shouldHideOnScroll
      onMenuOpenChange={() => {
        dispatch(updateNavStatus(!navOpenStatus));
      }}
    >
      <NavbarContent justify="start" className="gap-0">
        <NavbarMenuToggle
          aria-label={navOpenStatus ? "Close menu" : "Open menu"}
          className="sm:hidden order-3 text-white"
        />

        <NavbarBrand className="order-1">
          <p className="font-bold text-inherit text-2xl text-white">TMIS</p>
        </NavbarBrand>

        <NavbarItem className="hidden md:block order-2">
          <Link
            to="/"
            className={
              curTab === "Home"
                ? "active navActive flex flex-col px-[1rem] text-inherit text-xl text-white"
                : "notActive px-[1rem] text-inherit text-xl text-white"
            }
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block order-2">
          <Link
            to="../Services"
            className={
              curTab === "Services"
                ? "active navActive flex flex-col px-[1rem] text-inherit text-xl text-white"
                : "notActive px-[1rem] text-inherit text-xl text-white"
            }
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block order-2">
          <Link
            to="/Pricing"
            className={
              curTab === "Pricing"
                ? "active navActive flex flex-col px-[1rem] text-inherit text-xl text-white"
                : "notActive px-[1rem] text-inherit text-xl text-white"
            }
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block order-2">
          <Link
            to="/About"
            className={
              curTab === "About"
                ? "active navActive flex flex-col px-[1rem] text-inherit text-xl text-white"
                : "notActive px-[1rem] text-inherit text-xl text-white"
            }
          >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="sm:hidden order-4 mt-[1rem] bg-[rgba(0,0,0,0.4)]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to={`/${item}`}
              onClick={() => {
                dispatch(updateNavStatus(!navOpenStatus));
              }}
              className={curTab === item ? "active" : "notActive"}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarItem className="px-[1rem] hidden md:block  order-5">
        <Button
          variant="solid"
          className="p-[20px] bg-[#f5a524] text-white "
          onClick={handleContactUs}
        >
          Contact Us
        </Button>
      </NavbarItem>
    </Navbar>
  );
};

export default NavBar;
