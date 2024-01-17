import { createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";

//_________________CUSTOM_PALETTE____________________
declare module "@mui/material/styles" {
  interface Palette {
    pink: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    pink?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include a pink option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    pink: true;
    white: true;
  }
}
//_________________CUSTOM_PALETTE_END____________________

export const theme = createTheme({
  palette: {
    mode: "dark",
    pink: {
      main: pink[500],
      light: pink[300],
      dark: pink[700],
      contrastText: "#fff",
    },
    white: {
      main: "#e2e2e2",
      contrastText: "#000",
    },
  },
});
