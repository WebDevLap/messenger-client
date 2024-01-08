import { useLogout } from "@features/Auth";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IMenuItem } from "@entities/User";
import { useAppSelector } from "@app/store";
import { routes } from "@shared/config/routes";

export const useMenuItems = (): IMenuItem[] => {
  const navigate = useNavigate();
  const logount = useLogout();
  const user = useAppSelector((state) => state.user.user);
  function profile() {
    navigate(`${routes.user}/@${user?.nickname}`);
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
