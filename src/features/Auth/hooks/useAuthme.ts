import AuthService from "@Services/AuthService";
import { useAppDispatch } from "@app/store";
import { setUser } from "@entities/User";

export const useAuthme = () => {
  const dispatch = useAppDispatch();

  return async () => {
    const res = await AuthService.authMe();
    dispatch(setUser(res.data))
  };
};
