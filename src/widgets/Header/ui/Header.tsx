import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Logo } from "@shared/ui/Logo";
import { useAppSelector } from "@app/store";
import { UserInfo } from "@entities/User";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerEl } from "./Drawer";
import { useMenuItems } from "../hooks/useMenuItems";
import { AuthBtns } from "./AuthBtns";
import { useDrawerItems } from "@shared/hooks/interface";

export const Header = () => {
  const user = useAppSelector((state) => state.user.user);

  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const drawerItems = useDrawerItems();
  const menuItems = useMenuItems();

  function drawerOpen() {
    setDrawerIsOpen(true);
  }

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
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  sm: "block",
                  xs: "none",
                },
              }}
            >
              <Logo />
            </Box>
            <Box
              sx={{
                py: 1,
                flexGrow: {
                  sm: 0,
                  xs: 1,
                },
              }}
            >
              {!user ? <AuthBtns /> : <UserInfo menuItems={menuItems} />}
            </Box>
            <MenuIcon
              onClick={drawerOpen}
              sx={{
                display: {
                  sm: "block",
                  md: "none",
                },
                ml: 2,
                cursor: "pointer",
              }}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <DrawerEl
        drawerItems={drawerItems}
        open={drawerIsOpen}
        setOpen={setDrawerIsOpen}
      />
    </Box>
  );
};
