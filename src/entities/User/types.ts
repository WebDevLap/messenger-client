export interface IUser {
  id: string;
  nickname: string;
  avatar: string;
}


export interface IAddUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nickname: string;
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

