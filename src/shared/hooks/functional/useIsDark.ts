import React, { useContext } from "react";
import { ThemeContext } from "@emotion/react";

export const useIsDark = () => {
  const { palette } = useContext(ThemeContext);

  return () => (palette.mode === "dark" ? true : false);
};
