import { useLogout } from "@features/Auth";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const useMenuItems = () => {
  const navigate = useNavigate();
  const logount = useLogout();
  function profile() {
    navigate("/profile");
  }
  return [
    {
      icon: LogoutIcon,
      text: "log out",
      func: logount,
    },
    {
      icon: AccountCircleIcon,
      text: "profile",
      func: profile,
    },
  ];
};
