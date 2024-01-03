import { createTheme } from '@mui/material';
import { pink } from '@mui/material/colors';

//_________________CUSTOM_PALETTE____________________
declare module '@mui/material/styles' {
  interface Palette {
    pink: Palette['primary'];
  }

  interface PaletteOptions {
    pink?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include a pink option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    pink: true;
  }
}
//_________________CUSTOM_PALETTE_END____________________

export const theme = createTheme({
  palette: {
    pink: {
      main: pink[500],
      light: pink[300],
      dark: pink[700],
    },
  },
});
