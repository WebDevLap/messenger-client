import { Box, TextField } from "@mui/material";
import { useInput } from "@shared/hooks/functional";
import React from "react";

export const TagsInput = ({
  input,
}: {
  input: ReturnType<typeof useInput>;
}) => {
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        variant="standard"
        label="Теги"
        fullWidth
        value={input.value}
        {...input.handlers}
        error={input.isShowError}
        helperText={<div style={{ minHeight: 25 }}>{input.errorText}</div>}
      />
    </Box>
  );
};
