import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Logo } from "@shared/ui/Logo";
import { AuthBtns } from "@widgets/Header/ui/AuthBtns";
import { useAppSelector } from "@app/store";
import { UserInfo } from "@entities/User";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerEl } from "./Drawer";
import { useDrawerItems } from "../hooks/useDrawerItems";
import { useMenuItems } from "../hooks/useMenuItems";

export const Header = () => {
  const user = useAppSelector((state) => state.user.user);

  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const drawerItems = useDrawerItems();
  const menuItems = useMenuItems();

  function drawerOpen() {
    setDrawerIsOpen(true);
  }

  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
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
            <MenuIcon sx={{ ml: 2, cursor: "pointer" }} onClick={drawerOpen} />
          </Toolbar>
        </Container>
      </AppBar>
      <DrawerEl
        drawerItems={drawerItems}
        open={drawerIsOpen}
        setOpen={setDrawerIsOpen}
      />
    </>
  );
};
