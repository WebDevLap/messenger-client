import UserService from '@Services/UserService'

export const useSearchUsers = () => {
  

  return async (name: string, sortBy: string) => {
    return await UserService.searchUsers(name, sortBy);
  }
}
