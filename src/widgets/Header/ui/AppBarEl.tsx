import { AppBar, Box, Container, Toolbar } from "@mui/material";
import React from "react";

export const AppBarEl = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        pb: {
          xs: 7.1,
          sm: 8.1,
          md: 8.1,
          lg: 8.1,
        },
      }}
    >
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>{children}</Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
