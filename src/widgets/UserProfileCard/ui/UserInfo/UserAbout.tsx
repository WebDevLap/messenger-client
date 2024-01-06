import { useAppSelector } from "@app/store";
import { Typography } from "@mui/material";
import React from "react";

export const UserAbout = () => {
  const user = useAppSelector((state) => state.userProfile);
  return (
    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
      {user.about ? user.about : "No description"}
    </Typography>
  );
};
