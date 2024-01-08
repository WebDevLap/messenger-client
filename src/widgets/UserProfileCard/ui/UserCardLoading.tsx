import { Container, Box, Skeleton } from "@mui/material";
import { UserAvatar } from "./UserAvatar";
import { UserBgImg } from "./UserBgImg";
import { UserCanvas } from "./UserCanvas";
import { UserCard } from "./UserCard";

export const UserCardLoading = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 2, p: 0 }}>
      <UserCard>
        <Skeleton width={"100%"} height={"250px"} variant="rectangular">
          <UserBgImg isSelfProfile={false} />
        </Skeleton>
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
              <Skeleton variant="circular" animation="wave">
                <UserAvatar isSelfProfile={false} />
              </Skeleton>
              <Skeleton
                animation="wave"
                width="300px"
                height="100px"
                sx={{
                  mt: {
                    xs: 0,
                    sm: 5,
                    md: 5,
                  },
                }}
              ></Skeleton>
            </Box>
            <Skeleton animation="wave" width="80%" height="170px"></Skeleton>
          </Box>
        </UserCanvas>
      </UserCard>
    </Container>
  );
};
