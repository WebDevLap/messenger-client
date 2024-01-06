import { IUserProfile } from "@entities/User/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserProfile = {
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
      state = action.payload;
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
