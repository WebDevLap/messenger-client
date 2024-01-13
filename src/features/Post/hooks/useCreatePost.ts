import PostService from "@Services/PostService";
import { useAppDispatch } from "@app/store";
import { clear as createPostClear } from "@entities/CreatePost";
import { snackError, snackSuccess } from "@widgets/Snackbar";
import { useNavigate } from "react-router-dom";

export const useCreatePost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return async (post: FormData) => {

    try {
      const res = await PostService.create(post);
      dispatch(snackSuccess("Post created successfully"));
      dispatch(createPostClear());
      navigate("/");
    } catch (err) {
      dispatch(snackError("Failed to create post"));
    }
  };
};
