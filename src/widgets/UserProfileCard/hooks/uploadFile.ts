import UserService from "@Services/UserService";
import { IUserProfile } from "@entities/UserProfile";
import { AxiosResponse } from "axios";
import { ChangeEvent } from "react";

export async function uploadFile(
  e: ChangeEvent<HTMLInputElement>,
  propName: string
): Promise<AxiosResponse<IUserProfile>> {
  const files = (e.target as HTMLInputElement).files;
  if (!files || !files[0]) throw new Error('not found the file')
  const formData = new FormData();
  formData.append(propName, files[0]);
  return await UserService.patchUser(formData);
}
