import UserService from '@Services/UserService'

export const usePatchUser = () => {
  
  return async (param: FormData) => {
    return await UserService.patchUser(param)
  }
}
