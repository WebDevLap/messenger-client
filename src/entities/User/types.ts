export interface IUser {
  id: string;
  nickname: string;
  avatar: string;
}

export interface IUserProfile {
  quantity_posts: string;
  quantity_followers: string;
  quantity_following: string;
  createdAt: string;
  description: string;
  email: string;
  bg_image: string;
  firstName: string;
  lastName: string;
}

export interface IAddUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  nickname: string,
}
export interface ITokens {
  access: string;
  refresh: string;
}

export interface ILogin {
  nickname?: string;
  email?: string;
  password: string;
}