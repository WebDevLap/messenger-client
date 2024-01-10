import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDrawerItems } from "@shared/hooks/interface";
import { NavLink } from "react-router-dom";

export const Ribbon = () => {
  const drawerItems = useDrawerItems();
  return (
    <List sx={{ border: "2px solid", borderRadius: "15px" }}>
      {drawerItems.map((item, index) => {
        if (item.hideExpr) return <div key={index}></div>;

        return (
          <NavLink to={item.to} key={index} className="ribbon_a">
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
