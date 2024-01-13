import { useAppDispatch } from "@app/store";
import { setUser } from "@entities/User";
import { snackError, snackSuccess } from "@widgets/Snackbar";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return () => {
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
  };
};
