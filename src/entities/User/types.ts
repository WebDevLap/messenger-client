export interface IUser {
  id: string;
  nickname: string;
  avatar: string;
}

export interface IUserProfile {
  // quantity_posts: string;
  // quantity_followers: string;
  // quantity_following: string;

  about: string;
  avatar: string;
  backgroundImage: string;
  dateJoined: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  nickname: string;
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