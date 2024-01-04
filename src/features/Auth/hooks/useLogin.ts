import AuthService from "@Services/AuthService";
import { useAppDispatch } from "@app/store";
import { setUser } from "@entities/User";
import { ILogin } from "@entities/User/types";
import { snackError, snackSuccess } from "@widgets/Snackbar";

export const useLogin = () => {
  const dispatch = useAppDispatch();

  return async (props: ILogin) => {
    try {
      const res = await AuthService.login(props);
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      const user = await AuthService.authMe();
      dispatch(snackSuccess("Успешный вход"));
      dispatch(setUser(user.data));
    } catch (err) {
      dispatch(snackError("Не удалось войти в аккаунт"));
    }
  };
};
