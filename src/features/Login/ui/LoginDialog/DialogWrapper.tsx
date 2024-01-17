import { Dialog, DialogTitle } from "@mui/material";
import React from "react";

export const DialogWrapper = ({
  children,
  isOpen,
  onClose,
  onSubmit,
}: {
  children: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  onClose: () => unknown;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => unknown;
}) => {
  return (
    <Dialog open={isOpen} maxWidth="sm" fullWidth onClose={onClose}>
      <DialogTitle>Log In</DialogTitle>
      <form onSubmit={onSubmit}>{children}</form>
    </Dialog>
  );
};
