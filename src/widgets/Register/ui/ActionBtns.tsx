import { Button } from "@mui/material";
import React from "react";

export const ActionBtns = ({
  onClose,
  disabled,
}: {
  onClose: () => unknown;
  disabled: boolean;
}) => {
  return (
    <>
      <Button variant="outlined" onClick={onClose}>
        close
      </Button>
      <Button
        variant="contained"
        color="pink"
        type="submit"
        disabled={disabled}
      >
        submit
      </Button>
    </>
  );
};
