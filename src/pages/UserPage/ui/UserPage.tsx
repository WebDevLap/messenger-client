import { useParams } from "react-router-dom";
import { UserCardLoading, UserProfileCard } from "@widgets/UserProfileCard";
import React from "react";
import { ApiResStatusType } from "@shared/api";
import { useAppDispatch, useAppSelector } from "@app/store";
import { initial as userProfileInitial } from "@entities/UserProfile";
import UserService from "@Services/UserService";

export const UserPage = () => {
  const { id } = useParams();
  const [status, setStatus] = React.useState<ApiResStatusType>("pending");
  const user = useAppSelector((state) => state.userProfile);
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    (async () => {
      setStatus("pending");
      try {
        if (typeof id !== "string") {
          throw new Error("");
        }
        const res = await UserService.getUser(id);
        dispatch(userProfileInitial(res.data));
        setStatus("fulfilled");
      } catch (err) {
        setStatus("rejected");
      }
    })();
  }, [id]);

  if (status === "pending") return <UserCardLoading />;
  if (status === "rejected" || !user) return <div>Error</div>;

  return (
    <>
      <UserProfileCard user={user} />
    </>
  );
};
