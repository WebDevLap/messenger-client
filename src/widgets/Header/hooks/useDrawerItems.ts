import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { IDrawerItem } from "../types";
import { useAppSelector } from "@app/store";
import HomeIcon from "@mui/icons-material/Home";

export const useDrawerItems = (): IDrawerItem[] => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  function profile() {
    navigate("/profile");
  }

  function home() {
    navigate("/");
  }

  return [
    {
      icon: AccountCircleIcon,
      text: "profile",
      func: profile,
      hideExpr: !user,
    },
    {
      icon: HomeIcon,
      text: "home",
      func: home,
    },
  ];
};
