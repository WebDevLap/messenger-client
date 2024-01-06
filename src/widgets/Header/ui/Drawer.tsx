import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { IDrawerItem } from "../types";

export const DrawerEl = ({
  drawerItems,
  open,
  setOpen,
}: {
  drawerItems: IDrawerItem[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  function drawerClose() {
    setOpen(false);
  }

  return (
    <Drawer open={open} onClose={drawerClose} anchor="right">
      <List>
        {drawerItems.map((item, index) => {
          if (item.hideExpr) return <div key={index}></div>;
          return (
            <ListItemButton
              key={index}
              onClick={() => {
                item.func();
                drawerClose();
              }}
              sx={{ px: 4, py: 2 }}
            >
              <ListItemIcon>
                <item.icon fontSize="large" />
              </ListItemIcon>
              <Typography variant="h6">{item.text}</Typography>
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};
