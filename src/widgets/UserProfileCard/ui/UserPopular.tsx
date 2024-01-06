import { Box, Typography } from "@mui/material";
import React from "react";

export const UserPopular = () => {
  return (
    <Box sx={{ display: "flex", gap: 6, mt: 2 }}>
      <Box>
        <Typography variant="h5" sx={{textAlign: 'center'}}>1,530</Typography>
        <Typography variant='body1' sx={{textAlign: 'center'}}>Posts</Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{textAlign: 'center'}}>66,8</Typography>
        <Typography variant='body1' sx={{textAlign: 'center'}}>Followers</Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{textAlign: 'center'}}>2,236</Typography>
        <Typography variant='body1' sx={{textAlign: 'center'}}>Following</Typography>
      </Box>
    </Box>
  );
};
