import { Box, Button } from "@mui/material";
import React from "react";

export const ActionBtns = ({
  onSubmit,
  onClose,
  isSubmitDisabled,
}: {
  onSubmit: () => void;
  onClose: () => void;
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
      <Button size="medium" variant="outlined" onClick={onClose}>
        cancel
      </Button>
    </Box>
  );
};
