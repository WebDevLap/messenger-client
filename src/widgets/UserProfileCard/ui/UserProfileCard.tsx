import { useAppSelector } from "@app/store";
import { Container, Box, Typography } from "@mui/material";
import { UserAvatar } from "./UserAvatar";
import { UserCanvas } from "./UserCanvas";
import { UserBgImg } from "./UserBgImg";
import { UserCard } from "./UserCard";
import { UserPopular } from "./UserPopular";
import { UserActions } from "./UserActions";
import { IUserProfile } from "@entities/User";

export const UserProfileCard = ({ user }: { user: IUserProfile }) => {
  


  const selfUser = useAppSelector((state) => state.user.user);
  const isSelfProfile = user.id === selfUser?.id;
  return (
    <Container maxWidth="lg" sx={{ mb: 2, p: 0 }}>
      <UserCard>
        <UserBgImg src={user.backgroundImage} isSelfProfile={isSelfProfile}/>
        <UserCanvas>
          <Box sx={{ transform: "translate(0, -66px)" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <UserAvatar src={user.avatar} isSelfProfile={isSelfProfile}/>
              <UserPopular />
            </Box>
            <Typography variant="h5">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {user.about ? user.about : "No description"}
            </Typography>
            {!isSelfProfile && <UserActions />}
          </Box>
        </UserCanvas>
      </UserCard>
    </Container>
  );
};
