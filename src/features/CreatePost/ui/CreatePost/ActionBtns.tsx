import { Box, Button } from "@mui/material";
import React from "react";

export const ActionBtns = ({
  onSubmit,
  onCancel,
  isSubmitDisabled,
}: {
  onSubmit: () => void;
  onCancel: () => void;
  isSubmitDisabled: boolean;
}) => {
  return (
    <Box sx={{ p: 2, display: "flex", gap: 1, alignItems: "center" }}>
      <Button
        size="large"
        variant="contained"
        onClick={onSubmit}
        disabled={isSubmitDisabled}
      >
        Publish
      </Button>
      <Button size="medium" variant="outlined" onClick={onCancel}>
        cancel
      </Button>
    </Box>
  );
};
