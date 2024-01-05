import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
          if (item.hideExpr) return <></>;
          return (
            <ListItemButton
              key={index}
              onClick={() => {
                item.func();
                drawerClose();
              }}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};
