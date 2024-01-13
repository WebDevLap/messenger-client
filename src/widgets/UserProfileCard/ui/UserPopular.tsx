import { Box, Typography } from "@mui/material";
import React from "react";

export const UserPopular = () => {
  return (
    <Box sx={{ display: "flex", gap: {
      sm: 6,
      xs: 3
    } , mt: {
      xs: 0,
      sm: 5,
      md: 5,
    }}}>
      <Box>
        <Typography variant="h5" sx={{textAlign: 'center', fontWeight: 500}}>1,530</Typography>
        <Typography variant='body1' sx={{textAlign: 'center'}}>Posts</Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{textAlign: 'center', fontWeight: 500}}>66,8</Typography>
        <Typography variant='body1' sx={{textAlign: 'center'}}>Followers</Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{textAlign: 'center', fontWeight: 500}}>2,236</Typography>
        <Typography variant='body1' sx={{textAlign: 'center'}}>Following</Typography>
      </Box>
    </Box>
  );
};
