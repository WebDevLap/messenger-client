import React from "react";

export const useMenu = (defIndex: number = 0) => {
  const [selected, setSelected] = React.useState(defIndex);
  const [openEl, setOpenEl] = React.useState<null | HTMLElement>(null);

  function open(e: React.MouseEvent<HTMLElement>) {
    setOpenEl(e.currentTarget);
  }
  function close() {
    setOpenEl(null);
  }
  function reset(){
    setSelected(defIndex)
  }

  return {
    selected,
    openEl,
    open,
    close,
    setSelected,
    reset
  };
};
