import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useInput, useIsDark } from "@shared/hooks/functional";
import React from "react";
import { AddPreview } from "./AddPreview";
import { ActionBtns } from "./ActionBtns";
import { TagsInput } from "./TagsInput";
import { TitleInput } from "./TitleInput";
import {
  setDescription as setCreatePostDescription,
  setImage as setCreatePostImage,
  setTitle as setCreatePostTitle,
  setTags as setCreatePostTags,
} from "../../model/createPostSlice";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/config/routes";
import { snackError, snackSuccess } from "@widgets/Snackbar";
import { clear as createPostClear } from "../../model/createPostSlice";
import PostService from "@Services/PostService";
import { Provider } from "react-redux";
import { store, useLocalDispatch, useLocalSelector } from "../../model/store";
import { TipTap } from "./TipTap";

export const CreatePost = () => {
  const isDark = useIsDark();
  const dispatch = useLocalDispatch();
  const navigate = useNavigate();
  const description = useInput(
    useLocalSelector((state) => state.createPost.description),
    {
      minWidth: 20,
    }
  );

  const [idDisabled, setIsDisabled] = React.useState(true);
  const [image, setImage] = React.useState<File | null>(
    useLocalSelector((state) => state.createPost.image)
  );
  const createPostModel = useLocalSelector((state) => state.createPost);
  const titleInput = useInput("", {
    maxWidth: 225,
    minWidth: 5,
  });
  const tagsInput = useInput("", {
    noSpacing: true,
    specialChars: ",",
  });

  async function onSubmit() {
    if (idDisabled) return;
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("title", titleInput.value);
    formData.append("content", description.value);
    try {
      const res = await PostService.create(formData);
      dispatch(snackSuccess("Post created successfully"));
      dispatch(createPostClear());
      navigate("/");
    } catch (err) {
      dispatch(snackError("Failed to create post"));
    }
  }

  function onCancel() {
    dispatch(setCreatePostDescription(""));
    dispatch(setCreatePostImage(null));
    dispatch(setCreatePostTitle(""));
    dispatch(setCreatePostTags(""));
    navigate(routes.main);
  }
  // writing value from store on first render
  React.useEffect(() => {
    titleInput.setValue(createPostModel.titleInput);
    tagsInput.setValue(createPostModel.tagsInput);
  }, []);
  // end

  // write values to store
  React.useEffect(() => {
    dispatch(setCreatePostDescription(description.value));
  }, [description.value]);
  React.useEffect(() => {
    dispatch(setCreatePostImage(image));
  }, [image]);
  React.useEffect(() => {
    dispatch(setCreatePostTitle(titleInput.value));
  }, [titleInput.value]);
  React.useEffect(() => {
    dispatch(setCreatePostTags(tagsInput.value));
  }, [tagsInput.value]);
  // end

  // check for validate
  React.useEffect(() => {
    if (titleInput.isValid && tagsInput.isValid && description.isValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [titleInput.isValid, tagsInput.isValid, description.isValid]);
  // end

  return (
    <Provider store={store}>
      <Box sx={{ bgcolor: isDark() ? grey[800] : grey[100], borderRadius: 1 }}>
        <Box sx={{ p: 2 }}>
          <AddPreview setImage={setImage} />
          <TitleInput input={titleInput} />
          <TagsInput input={tagsInput} />
          <Box></Box>
        </Box>
        <TipTap description={description} />
        <ActionBtns
          onSubmit={onSubmit}
          onCancel={onCancel}
          isSubmitDisabled={idDisabled}
        />
      </Box>
    </Provider>
  );
};
