import { Box, Button } from "@mui/material";
import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const sx = {
  fontSize: {
    lg: 18,
    md: 15,
    sm: 13,
    xs: 10,
  },
};

const iconSx = {
  fontSize: {
    lg: 20,
    md: 18,
    sm: 15,
    xs: 13,
  },
};

export const UserActions = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      <Button variant="contained" color="pink" sx={sx}>
        Follow
      </Button>
      <Button variant="contained" color="white" disableElevation sx={sx}>
        Message
      </Button>
      <Button variant="contained" color="white" disableElevation sx={sx}>
        Contact
      </Button>
      <Button variant="contained" color="white" disableElevation sx={sx}>
        <PersonAddIcon sx={iconSx} />
      </Button>
    </Box>
  );
};
