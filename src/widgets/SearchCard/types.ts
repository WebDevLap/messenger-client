export interface ISearchUserResponse {
  count: number;
  next: string;
  previous: string;
  results: ISearchUser[];
}
export interface ISearchUser {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  avatar: string;
}
