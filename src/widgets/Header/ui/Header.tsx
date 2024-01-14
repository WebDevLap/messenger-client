import React from "react";
import { useDrawerItems } from "@shared/hooks/interface";
import { AppBarEl } from "./AppBarEl";
import { MenuBtn } from "./MenuBtn";
import { LogoBlock } from "./LogoBlock";
import { DrawerBlock } from "./DrawerBlock";
import { UserBlock } from "./UserBlock";

export const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const drawerItems = useDrawerItems();

  function drawerOpen() {
    setDrawerIsOpen(true);
  }

  return (
    <>
      <AppBarEl>
        <LogoBlock />

        <UserBlock />
        <MenuBtn onClick={drawerOpen} />
      </AppBarEl>
      <DrawerBlock
        drawerItems={drawerItems}
        open={drawerIsOpen}
        setOpen={setDrawerIsOpen}
      />
    </>
  );
};
