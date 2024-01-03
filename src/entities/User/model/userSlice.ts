import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '@shared/api';

interface IState {
  user: IUser | null;
}

const initialState: IState = {
  user: null,
};

const getUser = createAsyncThunk('user/getUser', async function () {});

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
