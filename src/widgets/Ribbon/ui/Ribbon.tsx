import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useIsDark } from "@shared/hooks/functional";
import { useDrawerItems } from "@shared/hooks/interface";
import { NavLink } from "react-router-dom";

export const Ribbon = () => {
  const drawerItems = useDrawerItems();
  const isDark = useIsDark();

  return (
    <List>
      {drawerItems.map((item, index) => {
        if (item.hideExpr) return <div key={index}></div>;

        return (
          <NavLink
            to={item.to}
            key={index}
            className={
              isDark() ? "ribbon_a_dark" : "ribbon_a_light"
            }
          >
            <ListItemButton sx={{ borderRadius: "5px", mb: 0.5 }}>
              <ListItemIcon>
                <item.icon color="info" />
              </ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItemButton>
          </NavLink>
        );
      })}
    </List>
  );
};
