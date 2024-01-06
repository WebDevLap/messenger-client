import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDrawerItems } from "@shared/hooks/interface";
import React from "react";

export const Ribbon = () => {
  const drawerItems = useDrawerItems();
  const [marked, setMarked] = React.useState(0);

  return (
    <List>
      {drawerItems.map((item, index) => {
        if (item.hideExpr) return <div key={index}></div>;

        return (
          <Box
            onClick={() => {
              setMarked(index);
              item.func();
            }}
            sx={{
              bgcolor: marked === index ? grey[800] : "transparent",
              transition: ".3s",
              borderRadius: "5px",
              overflow: "hidden",
              mb: 0.5,
            }}
            key={index}
          >
            <ListItemButton>
              <ListItemIcon>
                <item.icon color="info" />
              </ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItemButton>
          </Box>
        );
      })}
    </List>
  );
};
