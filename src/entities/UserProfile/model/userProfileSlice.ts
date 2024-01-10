import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserProfile } from "../types";

const initialState: IUserProfile | null = {
  about: "",
  avatar: "",
  backgroundImage: "",
  dateJoined: "",
  email: "",
  firstName: "",
  id: "",
  lastName: "",
  nickname: "",
};

const UserProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    initial: (state, action: PayloadAction<IUserProfile>) => {
      state.about = action.payload.about;
      state.avatar = action.payload.avatar;
      state.backgroundImage = action.payload.backgroundImage;
      state.dateJoined = action.payload.dateJoined;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.id = action.payload.id;
      state.lastName = action.payload.lastName;
      state.nickname = action.payload.nickname;
    },
    setAbout: (state, action: PayloadAction<string>) => {
      state.about = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setBgImg: (state, action: PayloadAction<string>) => {
      state.backgroundImage = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
  },
});

export const {
  initial,
  setAbout,
  setAvatar,
  setBgImg,
  setEmail,
  setFirstName,
  setLastName,
  setNickname,
} = UserProfileSlice.actions;

export const userProfileSlice = UserProfileSlice.reducer;
