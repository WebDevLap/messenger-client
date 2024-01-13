import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

export const UserCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? grey[700] : grey[300],
        borderRadius: "2em",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        mb: 20,
        borderTopLeftRadius: {
          sm: "2em",
          xs: "0",
        },
        borderTopRightRadius: {
          sm: "2em",
          xs: "0",
        },
      }}
    >
      {children}
    </Box>
  );
};
