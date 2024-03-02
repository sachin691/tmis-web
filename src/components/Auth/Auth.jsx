// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import AuthCard from "./SubComponent/AuthCard";
import UserAuth from "./SubComponent/UserAuth";

const Auth = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Auth"));

  return (
    <div
      className="flex h-screen justify-center lg:justify-between sm:px-[5rem] gap-[5rem] items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.3)),url(${"https://img.freepik.com/free-photo/modern-office-space-interior_158595-5206.jpg?w=740&t=st=1709381002~exp=1709381602~hmac=04c5dc10e5cd1aaa8a162c95e8bea88b5b8e32e2e32508bdfd8856da90a4be05"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <AuthCard className="hidden lg:flex" />
      <UserAuth />
    </div>
  );
};

export default Auth;
