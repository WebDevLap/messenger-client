import { useAppSelector } from "@app/store";
import {
  Avatar,
  Box,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IMenuItem {
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  text: string;
  func: () => unknown;
}

export const UserInfo = ({ menuItems }: { menuItems: IMenuItem[] }) => {
  const user = useAppSelector((state) => state.user.user);
  const [menuOpen, setMenuOpen] = React.useState<null | HTMLElement>(null);

  function onMenuOpen(e: React.MouseEvent<HTMLElement>) {
    setMenuOpen(e.currentTarget);
  }
  function onMenuClose() {
    setMenuOpen(null);
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Avatar
          src={user?.avatar}
          onClick={onMenuOpen}
          alt={user?.nickname}
        ></Avatar>
        <Typography variant="h6" onClick={onMenuOpen}>
          {user?.nickname}
        </Typography>
      </Box>
      <Menu open={!!menuOpen} onClose={onMenuClose} anchorEl={menuOpen}>
        <MenuList disablePadding>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                item.func();
                onMenuClose();
              }}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};
