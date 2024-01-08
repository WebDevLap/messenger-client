import { Paper, IconButton, InputBase, Divider, Box } from "@mui/material";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { Search } from "@mui/icons-material";
import { useInput } from "@shared/hooks/functional";

export const SearchInput = ({
  onTuneClick,
  search,
  onSubmit,
}: {
  onTuneClick: () => unknown;
  search: ReturnType<typeof useInput>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => unknown;
}) => {
  const [isDisabled, setIsDisabled] = React.useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    if (isDisabled) return;
    onSubmit(e);
    setIsDisabled(true);
  }

  React.useEffect(() => {
    if (isDisabled === true) {
      setTimeout(() => {
        setIsDisabled(false);
      }, 1000);
    }
  }, [isDisabled]);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: {
          sm: "80%",
          xs: "100%",
        },
      }}
      onSubmit={submit}
    >
      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        type="button"
        onClick={onTuneClick}
      >
        <TuneIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: 18 }}
        placeholder="Search..."
        value={search.value}
        {...search.handlers}
        disabled={isDisabled}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Box
        component="button"
        type="submit"
        sx={{ display: "inline-block", bgcolor: "transparent" }}
      >
        <IconButton>
          <Search />
        </IconButton>
      </Box>
    </Paper>
  );
};
