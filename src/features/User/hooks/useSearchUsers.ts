import UserService from '@Services/UserService'
import { ISearchUser } from '@entities/User';

export const useSearchUsers = () => {
  

  return async (name: string) => {
    return await UserService.searchUsers(name);
  }
}
