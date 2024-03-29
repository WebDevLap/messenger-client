import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { IDrawerItem } from "../types";
import { NavLink } from "react-router-dom";

export const DrawerBlock = ({
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
            <NavLink to={item.to} className="ribbon_a" key={index}>
              <ListItemButton
                onClick={() => {
                  drawerClose();
                }}
                sx={{ px: 2, py: 1.5 }}
              >
                <ListItemIcon>
                  <item.icon fontSize="medium" />
                </ListItemIcon>
                <Typography variant="body1">{item.text}</Typography>
              </ListItemButton>
            </NavLink>
          );
        })}
      </List>
    </Drawer>
  );
};
