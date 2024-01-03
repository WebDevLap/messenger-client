import React from 'react';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import { Button, Typography } from '@mui/material';

export const Logo = () => {
  return (
    <Button startIcon={<CommentTwoToneIcon fontSize="large" />} color="inherit">
      <Typography variant="h6">Messenger</Typography>
    </Button>
  );
};
