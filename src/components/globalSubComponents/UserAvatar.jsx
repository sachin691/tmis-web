// Dependencies
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateToLoginStatus } from "../../store/toLoginSlice";
import { useDispatch } from "react-redux";
import { removeCookie } from "../../utils/cookies";
// Local Files
import profilepic from "../../globalAssets/aboutUsMan (1).jpg";

const UserAvatar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }


  const handleLogout = () => {
    removeCookie("token");

    dispatch(updateToLoginStatus(true));
    navigate("/Auth");
  };

  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar isBordered as="button" className="transition-transform" src="" color="danger" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="privacy" className="p-0" textValue="privacy">
            <Link to="/Career/Create" style={{ display: "block", padding: "6px 8px" }}>
              Create Job
            </Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout} textValue="logout">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default UserAvatar;
