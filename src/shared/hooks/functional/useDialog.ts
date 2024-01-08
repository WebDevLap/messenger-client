import React from "react";

export const useDialog = () => {
  const [isOpen, setDialogIsOpen] = React.useState(false);
  function open() {
    setDialogIsOpen(true);
  }
  function close() {
    setDialogIsOpen(false);
  }

  return {
    isOpen,
    open,
    close
  }
};
