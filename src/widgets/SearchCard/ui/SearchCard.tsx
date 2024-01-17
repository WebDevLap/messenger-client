import { Box, Container, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import {
  useDialog,
  useInput,
  useIsDark,
  useMenu,
} from "@shared/hooks/functional";
import { SelectItem } from "./SelectItem";
import { SearchInput } from "./SearchInput";
import { ISearchUser, ISearchUserResponse } from "../types";
import { homeAxios } from "@shared/api";
import { lazyPattern } from "../utils/lazyPattern";
import { DialogWrapper } from "./DialogWrapper";
import { UserCards } from "./UserCards";
import UserService from "@Services/UserService";

const menuItems = [
  { name: "all", value: "" },
  { name: "first_name", value: "first_name" },
  { name: "first_name (DESC)", value: "-first_name" },
  { name: "last_name", value: "last_name" },
  { name: "last_name (DESC)", value: "-last_name" },
];

export const SearchCard = () => {
  const dialog = useDialog();
  const sortBy = useMenu();
  const search = useInput("", {});
  const [users, setUsers] = React.useState<ISearchUser[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [query, setQuery] = React.useState<null | string>(null);
  const isDark = useIsDark();

  React.useEffect(() => {
    setUsers([]);
    searchQuery();
    // Первый запрос поиска юзеров
  }, []);

  // сам запрос для посика юзеров
  async function searchQuery() {
    const res = await UserService.searchUsers(
      search.value,
      menuItems[sortBy.selected].value
    );
    setUsers((prev) => [...prev, ...res.data.results]);
    setQuery(res.data.next);
  }

  // обычный сабмит
  function onSearchSubmit() {
    setUsers([]);
    searchQuery();
  }

  // сабмит для формы
  function onSearchSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearchSubmit();
  }

  // lazy loading при скролле
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

  function onDialogReset() {
    sortBy.reset();
  }
  function onDialogApply() {
    onSearchSubmit();
    dialog.close();
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ p: 0 }}>
        <Paper
          sx={{
            bgcolor: isDark() ? grey[800] : grey[300],
            borderRadius: "2em",
            p: 2,
          }}
        >
          <SearchInput
            onTuneClick={dialog.open}
            search={search}
            onSubmit={onSearchSubmitForm}
          />
          <Box sx={{ height: 20 }} />

          <UserCards users={users} />
        </Paper>
      </Container>

      <DialogWrapper
        dialog={dialog}
        onReset={onDialogReset}
        onApply={onDialogApply}
      >
        <SelectItem menu={sortBy} menuItems={menuItems}>
          Sort By
        </SelectItem>
      </DialogWrapper>
    </>
  );
};
