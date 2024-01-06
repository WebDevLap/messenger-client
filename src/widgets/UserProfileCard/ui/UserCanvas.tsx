import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

export const UserCanvas = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        bgcolor: grey[800],
        pl: 2,
        "&:before": {
          borderRadius: "2em 2em 0em 0em",
          position: "absolute",
          height: 20,
          content: "''",
          display: "block",
          bgcolor: "inherit",
          width: "100%",
          left: 0,
          top: -19,
        },
      }}
    >
      {children}
    </Box>
  );
};
