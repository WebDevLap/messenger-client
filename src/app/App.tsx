import { useAuthme } from "@features/Auth/hooks/useAuthme";
import { CssBaseline, Paper } from "@mui/material";
import { Header } from "@widgets/Header";
import { LoginDialog } from "@widgets/Login";
import { RegisterDialog } from "@widgets/Register/ui/RegisterDialog";
import { SnackbarEl } from "@widgets/Snackbar";
import React from "react";

function App() {
  const authme = useAuthme();
  React.useEffect(() => {
    authme();
  }, []);

  return (
    <Paper>
      <CssBaseline />
      <Header />
      <LoginDialog />
      <RegisterDialog />
      <SnackbarEl/>
    </Paper>
  );
}

export default App;
