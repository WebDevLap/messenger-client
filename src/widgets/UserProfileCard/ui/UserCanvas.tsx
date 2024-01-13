import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useIsDark } from "@shared/hooks/functional";
import React from "react";

export const UserCanvas = ({ children }: { children: React.ReactNode }) => {
  const isDark = useIsDark();
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        bgcolor: isDark() ? grey[800] : grey[300],
        pl: 2,
        pr: 2,
        pb: 2,
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
