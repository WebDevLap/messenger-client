import { Box, TextField } from "@mui/material";
import { useInput } from "@shared/hooks/functional";
import React from "react";

export const TitleInput = ({
  input,
}: {
  input: ReturnType<typeof useInput>;
}) => {
  return (
    <Box>
      <TextField
        variant="standard"
        value={input.value}
        {...input.handlers}
        error={input.isShowError}
        placeholder="Post header..."
        fullWidth
        helperText={<div style={{ minHeight: 25 }}>{input.errorText}</div>}
        sx={{ "&>*": {fontSize: 40} }}
      />
    </Box>
  );
};
