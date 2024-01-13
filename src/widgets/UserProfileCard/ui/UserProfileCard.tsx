import { useAppSelector } from "@app/store";
import { Container, Box, Button } from "@mui/material";
import { UserAvatar } from "./UserAvatar";
import { UserCanvas } from "./UserCanvas";
import { UserBgImg } from "./UserBgImg";
import { UserCard } from "./UserCard";
import { UserPopular } from "./UserPopular";
import { UserActions } from "./UserActions";
import { UserInfo } from "./UserInfo/UserInfo";
import { IUserProfile } from "@entities/UserProfile";
import { useNavigate } from "react-router-dom";
import { routes } from "@shared/config/routes";

export const UserProfileCard = ({ user }: { user: IUserProfile }) => {
  const selfUser = useAppSelector((state) => state.user.user);
  const isSelfProfile = user.id === selfUser?.id;
  const navigate = useNavigate();

  function onCreateClick() {
    navigate(routes.create);
  }

  return (
    <Container maxWidth="lg" sx={{ mb: 2, p: 0 }}>
      <UserCard>
        <UserBgImg isSelfProfile={isSelfProfile} />
        <UserCanvas>
          <Box
            sx={{
              transform: {
                sm: "translate(0, -66px)",
                xs: "translate(0, -36px)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: {
                  xs: 1,
                  sm: 4,
                },
                mb: 1,
                flexWrap: "wrap",
              }}
            >
              <UserAvatar isSelfProfile={isSelfProfile} />
              <UserPopular />
            </Box>
          </Box>
          <Box sx={{ mt: { sm: "-50px", xs: "-30px" } }}>
            <Box>
              <UserInfo />
            </Box>
            {!isSelfProfile && <UserActions />}
            {isSelfProfile && (
              <Button onClick={onCreateClick}>Create post</Button>
            )}
          </Box>
        </UserCanvas>
      </UserCard>
    </Container>
  );
};
