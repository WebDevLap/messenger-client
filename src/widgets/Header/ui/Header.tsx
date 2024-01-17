import React from "react";
import { useDrawerItems } from "@shared/hooks/interface";
import { AppBarEl } from "./AppBarEl";
import { MenuBtn } from "./MenuBtn";
import { LogoBlock } from "./LogoBlock";
import { DrawerBlock } from "./DrawerBlock";
import { UserBlock } from "./UserBlock";
import { Provider } from "react-redux";
import { Dialogs } from "./Dialogs";
import { localStore } from "../model/store";


export const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const drawerItems = useDrawerItems();

  function drawerOpen() {
    setDrawerIsOpen(true);
  }
  
  

  return (
    <Provider store={localStore}>
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
      <Dialogs />
    </Provider>
  );
};
