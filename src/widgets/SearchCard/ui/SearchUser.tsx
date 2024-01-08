import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const SearchUser = ({
  avatar,
  firstName,
  lastName,
  nickname,
}: {
  avatar: string;
  firstName: string;
  lastName: string;
  nickname: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <NavLink to={`/user/@${nickname}`}>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: { sm: 2, xs: 1 } }}
        >
          <Avatar
            src={avatar}
            sx={{
              height: { lg: "70px", md: 60, sm: 50, xs: 50 },
              width: { lg: "70px", md: 60, sm: 50, xs: 50 },
            }}
          />
          <Box>
            <Typography variant="body1">
              {firstName} {lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @{nickname}
            </Typography>
          </Box>
        </Box>
      </NavLink>

      <Box>
        <Button variant="contained">Follow</Button>
      </Box>
    </Box>
  );
};
