import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IMenuItem, setUser } from "@entities/User";
import { useAppDispatch, useAppSelector } from "@app/store";
import { routes } from "@shared/config/routes";
import { snackSuccess, snackError } from "@widgets/Snackbar";

export const useMenuItems = (): IMenuItem[] => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const user = useAppSelector((state) => state);
  const user = null;
  console.log(user)
  function profile() {
    navigate(`${routes.user}/@${user?.nickname}`);
  }
  return [
    {
      icon: LogoutIcon,
      text: "log out",
      func: () => {
        try {
          dispatch(setUser(null));
          localStorage.removeItem("token");
          localStorage.removeItem("refresh");
          dispatch(snackSuccess("Вы успешно вышли с аккаунта"));
          navigate("/");
        } catch (err) {
          dispatch(snackError("Не удалось выйти с аккаунта"));
          throw new Error("Query error");
        }
      },
    },
    {
      icon: AccountCircleIcon,
      text: "profile",
      func: profile,
    },
  ];
};
