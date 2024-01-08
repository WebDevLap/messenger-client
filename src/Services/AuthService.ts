import {
  IAddUser,
  ITokens,
  ILogin,
  IUser,
} from "@entities/User/types";
import { homeAxios } from "@shared/api";
import axios, { AxiosResponse } from "axios";

export default class AuthService {
  static async authMe(): Promise<AxiosResponse<IUser>> {
    return await homeAxios.get<IUser>("/api/users/me/");
  }
  static async register(props: IAddUser): Promise<AxiosResponse<ITokens>> {
    return await homeAxios.post<ITokens>("/api/users/register/", props);
  }

  static async getToken(): Promise<AxiosResponse<ITokens>> {
    return await axios.post<ITokens>(
      `${import.meta.env.VITE_API_URL}/api/users/token_refresh/`,
      { refresh: `${localStorage.getItem("refresh")}` }
    );
  }
  static async login(props: ILogin): Promise<AxiosResponse<ITokens>> {
    return await homeAxios.post<ITokens>("/api/users/token/", props);
  }
}
