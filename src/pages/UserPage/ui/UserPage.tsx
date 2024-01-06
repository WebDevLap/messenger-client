import { useParams } from "react-router-dom";
import { UserProfileCard } from "@widgets/UserProfileCard";
import React from "react";
import AuthService from "@Services/AuthService";
import { ApiResStatusType } from "@shared/api";
import { IUserProfile } from "@entities/User/types";

export const UserPage = () => {
  const { id } = useParams();
  const [status, setStatus] = React.useState<ApiResStatusType>("pending");
  const [user, setUser] = React.useState<IUserProfile>();

  React.useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    if (typeof id !== "string") {
      setStatus("rejected");
      return;
    }
    try {
      const res = await AuthService.getUser(id);
      setUser(res.data);
      setStatus("fulfilled");
    } catch (er) {
      setStatus("rejected");
    }
  }

  if (status === "pending") return <div>Loading</div>;
  if (status === "rejected" || !user) return <div>Error</div>;

  return <UserProfileCard user={user} />;
};
