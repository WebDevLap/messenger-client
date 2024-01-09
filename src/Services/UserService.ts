import { ISearchUserResponse, IUserProfile } from "@entities/User";
import { homeAxios } from "@shared/api";

export default class UserService {
  static async getUser(idOrNick: string) {
    return await homeAxios.get<IUserProfile>(`/api/users/${idOrNick}`);
  }
  static async patchUser(param: FormData) {
    return await homeAxios.patch<IUserProfile>("/api/users/me/", param, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static async searchUsers(name: string, sortBy: string) {
    return await homeAxios.get<ISearchUserResponse>("/api/users/", {
      params: {
        offset: 0,
        limit: 15,
        name,
        order: sortBy,
      },
    });
  }
}
