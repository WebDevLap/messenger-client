import { Box, Button } from "@mui/material";
import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
export const UserActions = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap' }}>
      <Button variant="contained" color="pink" size="large">
        Follow
      </Button>
      <Button variant="contained" color="white" disableElevation size="large">
        Message
      </Button>
      <Button variant="contained" color="white" disableElevation size="large">
        Contact
      </Button>
      <Button variant="contained" color="white" disableElevation size="large">
        <PersonAddIcon />
      </Button>
    </Box>
  );
};
