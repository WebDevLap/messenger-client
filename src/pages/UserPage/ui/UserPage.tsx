import { useParams } from "react-router-dom";
import { UserProfileCard, initial as userProfileInitial } from "@widgets/UserProfileCard";
import React from "react";
import AuthService from "@Services/AuthService";
import { ApiResStatusType } from "@shared/api";
import { useAppDispatch, useAppSelector } from "@app/store";

export const UserPage = () => {
  const { id } = useParams();
  const [status, setStatus] = React.useState<ApiResStatusType>("pending");
  const user = useAppSelector(state => state.userProfile)
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    getUser();
  }, [id]);

  async function getUser() {
    if (typeof id !== "string") {
      setStatus("rejected");
      return;
    }
    try {
      const res = await AuthService.getUser(id);
      dispatch(userProfileInitial(res.data))
      setStatus("fulfilled");
    } catch (er) {
      setStatus("rejected");
    }
  }

  if (status === "pending") return <div>Loading</div>;
  if (status === "rejected" || !user) return <div>Error</div>;

  return <UserProfileCard user={user} />;
};
