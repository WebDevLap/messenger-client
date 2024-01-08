import { useParams } from "react-router-dom";
import { UserCardLoading, UserProfileCard } from "@widgets/UserProfileCard";
import React from "react";
import { ApiResStatusType } from "@shared/api";
import { useAppSelector } from "@app/store";
import { useGetUser } from "@features/User";

export const UserPage = () => {
  const { id } = useParams();
  const [status, setStatus] = React.useState<ApiResStatusType>("pending");
  const user = useAppSelector((state) => state.userProfile);
  const getUser = useGetUser();

  React.useEffect(() => {
    (async () => {
      setStatus("pending");
      try {
        const res = await getUser(id);
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
