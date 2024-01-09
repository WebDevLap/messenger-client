import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useDialog, useInput, useMenu } from "@shared/hooks/functional";
import { SelectItem } from "./SelectItem";
import { SearchInput } from "./SearchInput";
import { ISearchUser, ISearchUserResponse } from "@entities/User";
import { SearchUser } from "./SearchUser";
import { useSearchUsers } from "@features/User";
import { homeAxios } from "@shared/api";
import { lazyPattern } from "../utils/lazyPattern";
import { NotFound } from "./NotFound";

const menuItems = [
  { name: "first_name", value: "first_name" },
  { name: "first_name (DESC)", value: "-first_name" },
  { name: "last_name", value: "last_name" },
  { name: "last_name (DESC)", value: "-last_name" },
];

export const SearchCard = () => {
  const dialog = useDialog();
  const menu = useMenu();
  const searchUser = useSearchUsers();
  const search = useInput("", {});
  const [users, setUsers] = React.useState<ISearchUser[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [query, setQuery] = React.useState<null | string>(null);

  React.useEffect(() => {
    setUsers([]);
    searchQuery();
    // Первый запрос поиска юзеров
  }, []);

  async function searchQuery() {
    const res = await searchUser(search.value, menuItems[menu.selected].value);
    setUsers((prev) => [...prev, ...res.data.results]);
    setQuery(res.data.next);
  }

  function onSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUsers([]);
    searchQuery();
  }
  React.useEffect(() => {
    document.addEventListener("scroll", searchScrollQuery);

    return () => {
      document.removeEventListener("scroll", searchScrollQuery);
    };
  });

  async function searchScrollQuery() {
    if (!query || !lazyPattern() || isLoading) return;
    setIsLoading(true);
    const res = await homeAxios.get<ISearchUserResponse>(query);
    setUsers((prev) => [...prev, ...res.data.results]);
    setQuery(res.data.next);
    setIsLoading(false);
  }

  return (
    <Container maxWidth="lg">
      <Paper sx={{ bgcolor: grey[800], borderRadius: "2em", p: 2 }}>
        <SearchInput
          onTuneClick={dialog.open}
          search={search}
          onSubmit={onSearchSubmit}
        />
        <Box sx={{ height: 20 }} />

        <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
          {users.map((item) => (
            <SearchUser
              avatar={item.avatar}
              firstName={item.firstName}
              lastName={item.lastName}
              nickname={item.nickname}
            />
          ))}
          {users.length < 1 && <NotFound />}
        </Box>
        <Box sx={{ height: 20 }} />
      </Paper>

      <Dialog
        open={dialog.isOpen}
        onClose={dialog.close}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Settings</DialogTitle>
        <DialogContent sx={{ pt: 0 }}>
          <DialogContentText paragraph>Settings for search</DialogContentText>
          <SelectItem menu={menu} menuItems={menuItems}>
            Sort By
          </SelectItem>
        </DialogContent>
      </Dialog>
    </Container>
  );
};
