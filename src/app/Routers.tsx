import React from "react";
import { useAppSelector } from "./store";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "@pages/MainPage";
import { ProfilePage } from "@pages/ProfilePage";
import { routes } from "@shared/config/routes";
import { UserPage } from "@pages/UserPage";

export const Routers = () => {
  const user = useAppSelector((state) => state.user.user);
  if (user)
    return (
      <Routes>
        <Route path={routes.main} element={<MainPage />} />
        <Route path={routes.user} element={<UserPage />} />
      </Routes>
    );
  if (!user)
    return (
      <Routes>
        <Route path={routes.main} element={<MainPage />} />
        <Route path={routes.user} element={<UserPage />} />
      </Routes>
    );
};
