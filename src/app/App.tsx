import { useAuthme } from "@features/Auth/hooks/useAuthme";
import { Container, CssBaseline, Grid, Paper } from "@mui/material";
import { Header } from "@widgets/Header";
import { LoginDialog } from "@widgets/Login";
import { RegisterDialog } from "@widgets/Register/ui/RegisterDialog";
import { SnackbarEl } from "@widgets/Snackbar";
import React from "react";
import { Routers } from "./Routers";
import { Ribbon } from "@widgets/Ribbon";

function App() {
  const authme = useAuthme();
  React.useEffect(() => {
    authme();
  }, []);

  return (
    <Paper sx={{minHeight: '100vh'}}>
      <CssBaseline />
      <Header />
      <LoginDialog />
      <RegisterDialog />
      <Container maxWidth="lg" sx={{ p: 0 }}>
        <Grid container>
          <Grid
            item
            xs={3}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Ribbon />
          </Grid>
          <Grid item xs={12} md={9}>
            <Routers />
          </Grid>
        </Grid>
      </Container>

      <SnackbarEl />
    </Paper>
  );
}

export default App;
