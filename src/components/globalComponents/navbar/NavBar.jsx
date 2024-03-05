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
import { getCookie } from "../../../utils/cookies";
import UserAvatar from "../../globalSubComponents/UserAvatar";

const NavBar = () => {
  const isLoggedIn = getCookie("token") ? true : false;
  const curTab = useSelector((state) => state.curTab.value);
  const navOpenStatus = useSelector((state) => state.navOpenStatus.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuItems = ["Home", "Services", "Pricing", "About", "Career", "Contact Us", "Login"];
  const handleLogin = () => {
    navigate("/Auth");
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
          className="md:hidden order-3 text-white"
        />

        <NavbarBrand className="order-1">
          <Link to="/" className="font-bold text-inherit text-2xl text-white">
            TMIS Solutions
          </Link>
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
        <NavbarItem className="hidden md:block order-2">
          <Link
            to="/Career"
            className={
              curTab === "Career"
                ? "active navActive flex flex-col px-[1rem] text-inherit text-xl text-white"
                : "notActive px-[1rem] text-inherit text-xl text-white"
            }
          >
            Career
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block order-2">
          <Link
            to="/ContactUs"
            className={
              curTab === "Contact Us"
                ? "active navActive flex flex-col px-[1rem] text-inherit text-xl text-white"
                : "notActive px-[1rem] text-inherit text-xl text-white"
            }
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="sm:hidden order-4 mt-[1rem] bg-[rgba(0,0,0,0.4)]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to={index === 5 ? "/ContactUs" : index === 6 ? "/Auth" : `/${item}`}
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
        {isLoggedIn ? (
          <NavbarContent justify="end">
            <NavbarItem>
              <UserAvatar />
            </NavbarItem>
          </NavbarContent>
        ) : (
          <Button variant="solid" className="p-[20px] bg-[#f5a524] text-white " onClick={handleLogin}>
            Login
          </Button>
        )}
      </NavbarItem>
    </Navbar>
  );
};

export default NavBar;
