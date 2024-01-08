import { useAppSelector } from "@app/store";
import { UserAbout } from "./UserAbout";
import { UserId } from "./UserId";
import { UserNames } from "./UserNames";
import { UserNickname } from "./UserNickname";

export const UserInfo = () => {
  const user = useAppSelector((state) => state.user.user);
  const profileUser = useAppSelector((state) => state.userProfile);
  const isSelfProfile = profileUser.id === user?.id;
  return (
    <>
      <UserId />
      <UserNames isSelfProfile={isSelfProfile}/>
      <UserNickname isSelfProfile={isSelfProfile}/>
      <UserAbout isSelfProfile={isSelfProfile}/>
    </>
  );
};
