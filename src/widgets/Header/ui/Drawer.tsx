import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { Dispatch, SetStateAction } from "react";

interface IDrawerItem {
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  text: string;
  func: () => unknown;
}

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
        {drawerItems.map((item, index) => (
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
        ))}
      </List>
    </Drawer>
  );
};
