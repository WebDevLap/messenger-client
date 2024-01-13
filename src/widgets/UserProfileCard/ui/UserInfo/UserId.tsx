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
          cursor: "pointer",
          display: "inline-block",
          wordBreak: "break-all",
        }}
      >
        id="{user.id}"
      </Typography>
    </Box>
  );
};
