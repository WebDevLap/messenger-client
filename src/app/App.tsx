import { Container, CssBaseline, Grid, Paper } from "@mui/material";
import { Header } from "@widgets/Header";
import { SnackbarEl } from "@widgets/Snackbar";
import React from "react";
import { Routers } from "./Routers";
import { Ribbon } from "@widgets/Ribbon";
import { useAppDispatch } from "./store";
import AuthService from "@Services/AuthService";
import { setUser } from "@entities/User";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      const res = await AuthService.authMe();
      dispatch(setUser(res.data));
    })();
  }, []);

  return (
    <Paper sx={{ minHeight: "100vh" }}>
      <CssBaseline />
      <Header />
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
