import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useInput, useIsDark } from "@shared/hooks/functional";
import React from "react";
import { TipTap } from "..";
import { AddPreview } from "./AddPreview";
import { ActionBtns } from "./ActionBtns";
import { TagsInput } from "./TagsInput";
import { TitleInput } from "./TitleInput";
import { useAppDispatch, useAppSelector } from "@app/store";
import {
  setDescription as setCreatePostDescription,
  setImage as setCreatePostImage,
  setTitle as setCreatePostTitle,
  setTags as setCreatePostTags,
} from "@entities/CreatePost";
import { useCreatePost } from "@features/Post";

export const CreatePost = () => {
  const isDark = useIsDark();
  const dispatch = useAppDispatch();
  const [description, setDescription] = React.useState(
    useAppSelector((state) => state.createPost.description)
  );
  const [idDisabled, setIsDisabled] = React.useState(true);
  const [image, setImage] = React.useState<File | null>(
    useAppSelector((state) => state.createPost.image)
  );
  const createPost = useCreatePost();
  const createPostModel = useAppSelector((state) => state.createPost);
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
    formData.append("content", description);
    createPost(formData);
  }

  function onClose() {}
  // writing value from store on first render
  React.useEffect(() => {
    titleInput.setValue(createPostModel.titleInput);
    tagsInput.setValue(createPostModel.tagsInput);
  }, []);
  // end

  // write values to store
  React.useEffect(() => {
    dispatch(setCreatePostDescription(description));
  }, [description]);
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
    if (titleInput.isValid && tagsInput.isValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [titleInput.isValid, tagsInput.isValid]);
  // end

  return (
    <Box sx={{ bgcolor: grey[100], borderRadius: 1 }}>
      <Box sx={{ p: 2 }}>
        <AddPreview setImage={setImage} />
        <TitleInput input={titleInput} />
        <TagsInput input={tagsInput} />
        <Box></Box>
      </Box>
      <TipTap setDescription={setDescription} description={description} />
      <ActionBtns
        onSubmit={onSubmit}
        onClose={onClose}
        isSubmitDisabled={idDisabled}
      />
    </Box>
  );
};
