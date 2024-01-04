import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export const useDrawerItems = () => {
  const navigate = useNavigate();

  function profile() {
    navigate("/profile");
  }
  return [
    {
      icon: AccountCircleIcon,
      text: "profile",
      func: profile,
    },
  ];
};
