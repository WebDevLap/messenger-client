import React from "react";

export const useMenu = () => {
  const [selected, setSelected] = React.useState(0);
  const [openEl, setOpenEl] = React.useState<null | HTMLElement>(null);

  function open(e: React.MouseEvent<HTMLElement>) {
    setOpenEl(e.currentTarget);
  }
  function close() {
    setOpenEl(null);
  }

  return {
    selected,
    openEl,
    open,
    close,
    setSelected
  };
};
