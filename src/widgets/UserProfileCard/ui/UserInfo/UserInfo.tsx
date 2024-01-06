import { UserAbout } from "./UserAbout";
import { UserId } from "./UserId";
import { UserNames } from "./UserNames";
import { UserNickname } from "./UserNickname";

export const UserInfo = () => {
  return (
    <>
      <UserId />
      <UserNames />
      <UserNickname />
      <UserAbout />
    </>
  );
};
