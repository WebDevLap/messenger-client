import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  description: string;
  image: File | null;
  titleInput: string;
  tagsInput: string;
}

const initialState: IState = {
  description: "",
  image: null,
  // eslint-disable-next-line react-hooks/rules-of-hooks
  titleInput: "",
  // eslint-disable-next-line react-hooks/rules-of-hooks
  tagsInput: "",
};

const CreatePostSlice = createSlice({
  name: "createPost",
  initialState,
  reducers: {
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setImage: (state, action: PayloadAction<File | null>) => {
      state.image = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.titleInput = action.payload;
    },
    setTags: (state, action) => {
      state.tagsInput = action.payload;
    },
    clear: (state) => {
      state.description = '';
      state.image = null;
      state.titleInput = '';
      state.tagsInput = '';
    }
  },
});

export const { setDescription, setImage, setTitle, setTags, clear } =
  CreatePostSlice.actions;
export const createPostSlice = CreatePostSlice.reducer;
