import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <NavLink to="/">
      <Button
        startIcon={<CommentTwoToneIcon fontSize="large" />}
        color="inherit"
      >
        <Typography variant="h6">Messenger</Typography>
      </Button>
    </NavLink>
  );
};
