import { UserInfo } from "@entities/User";
import { Box } from "@mui/material";
import React from "react";
import { AuthBtns } from "./AuthBtns";
import { useMenuItems } from "../hooks/useMenuItems";

export const UserBlock = () => {
  const menuItems = useMenuItems();
  // const user = useAppSelector((state) => state.user.user);
  const user = null;

  return (
    <Box
      sx={{
        py: 1,
        flexGrow: {
          sm: 0,
          xs: 1,
        },
      }}
    >
      {!user ? <AuthBtns /> : <UserInfo menuItems={menuItems} />}
    </Box>
  );
};
