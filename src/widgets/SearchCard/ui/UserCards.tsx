import { Box } from "@mui/material";
import React from "react";
import { NotFound } from "./NotFound";
import { SearchUser } from "./SearchUser";
import { ISearchUser } from "../types";

export const UserCards = ({users}: {users: ISearchUser[]}) => {
  return (
    <Box sx={{ display: "flex", gap: 2, flexDirection: "column", mb: 5 }}>
      {users.map((item) => (
        <SearchUser
          key={item.id}
          avatar={item.avatar}
          firstName={item.firstName}
          lastName={item.lastName}
          nickname={item.nickname}
        />
      ))}
      {users.length < 1 && <NotFound />}
    </Box>
  );
};
