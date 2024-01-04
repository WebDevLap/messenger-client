import { useAppDispatch } from "@app/store";
import { setUser } from "@entities/User";
import { snackError, snackSuccess } from "@widgets/Snackbar";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  return () => {
    try {
      dispatch(setUser(null));
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      dispatch(snackSuccess("Вы успешно вышли с аккаунта"));
    } catch (err) {
      dispatch(snackError("Не удалось выйти с аккаунта"));
    }
  };
};
