import { useAppSelector } from "@app/store";
import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

export const UserId = () => {
  const user = useAppSelector((state) => state.userProfile);

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          color: blue[100],
          cursor: "pointer",
          display: "inline-block",
        }}
      >
        id="{user.id}"
      </Typography>
    </Box>
  );
};