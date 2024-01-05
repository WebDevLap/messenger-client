import AuthService from "@Services/AuthService";
import { useAppDispatch } from "@app/store";
import { setUser } from "@entities/User";
import { IAddUser } from "@entities/User/types";
import { snackError, snackSuccess } from "@widgets/Snackbar";

export function useRegister() {
  const dispatch = useAppDispatch();

  return async (user: IAddUser) => {
    try {
      const registerRes = await AuthService.register(user);
      localStorage.setItem("token", registerRes.data.access);
      localStorage.setItem("refresh", registerRes.data.refresh);

      const userRes = await AuthService.authMe();

      dispatch(setUser(userRes.data));
      dispatch(snackSuccess("Вы успешно зарегистрировались!"));
    } catch (err) {
      dispatch(snackError("Не удалось зарегистрироваться!"));
      throw new Error("Query error");
    }
  };
}
