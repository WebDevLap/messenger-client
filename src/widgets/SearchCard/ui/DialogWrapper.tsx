import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDialog } from "@shared/hooks/functional";
import React from "react";

export const DialogWrapper = ({
  children,
  dialog,
  onReset,
  onApply,
}: {
  children: React.ReactNode | React.ReactNode[];
  dialog: ReturnType<typeof useDialog>;
  onReset: () => unknown;
  onApply: () => unknown;
}) => {
  return (
    <Dialog open={dialog.isOpen} onClose={dialog.close} maxWidth="xs" fullWidth>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent sx={{ pt: 0 }}>
        <DialogContentText paragraph>Settings for search</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onReset}>
          reset
        </Button>
        <Button variant="contained" onClick={onApply}>
          apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};
