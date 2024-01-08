import React from "react";
import { useAppSelector } from "./store";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "@pages/MainPage";
import { routes } from "@shared/config/routes";
import { UserPage } from "@pages/UserPage";
import { SearchPage } from "@pages/SearchPage/ui/SearchPage";

export const Routers = () => {
  const user = useAppSelector((state) => state.user.user);
  if (user)
    return (
      <Routes>
        <Route path={routes.main} element={<MainPage />} />
        <Route path={routes.user+'/:id'} element={<UserPage />} />
        <Route path={routes.search} element={<SearchPage/>}/>
      </Routes>
    );
  if (!user)
    return (
      <Routes>
        <Route path={routes.main} element={<MainPage />} />
        <Route path={routes.user} element={<UserPage />} />
        <Route path={routes.search} element={<SearchPage/>}/>

      </Routes>
    );
};
