import { Button, Menu, MenuList, MenuItem, ListItemText } from "@mui/material";
import { useMenu } from "@shared/hooks/functional";
import React from "react";

export const SelectItem = ({
  menu,
  menuItems,
  children,
}: {
  menu: ReturnType<typeof useMenu>;
  menuItems: { name: string; value: string }[];
  children: React.ReactNode,
}) => {
  return (
    <>
      <Button
        variant="outlined"
        onClick={menu.open}
        sx={{
          "&>s": {
            color: "pink.main",
            textDecoration: "none",
            border: "1px solid",
            px: 1,
            borderRadius: 1,
          },
        }}
      >
        {children}
        <s style={{ marginLeft: 6 }}> {menuItems[menu.selected].name}</s>
      </Button>
      <Menu open={!!menu.openEl} onClose={menu.close} anchorEl={menu.openEl}>
        <MenuList disablePadding>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              selected={menu.selected === index}
              onClick={() => {
                menu.setSelected(index);
                menu.close();
              }}
            >
              <ListItemText>{item.name}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};
