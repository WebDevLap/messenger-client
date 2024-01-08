import UserService from "@Services/UserService";
import { useAppDispatch } from "@app/store";
import { initial as userProfileInitial } from "@entities/UserProfile/model/userProfileSlice";

export const useGetUser = () => {
  const dispatch = useAppDispatch();

  return async (idOrNick: string | undefined) => {
    if (typeof idOrNick !== "string") {
      throw new Error("");
    }
    const res = await UserService.getUser(idOrNick);
    dispatch(userProfileInitial(res.data));
  };
};
