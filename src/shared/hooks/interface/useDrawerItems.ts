import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "@app/store";
import HomeIcon from "@mui/icons-material/Home";
import { Bookmark, Notifications } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PageviewIcon from "@mui/icons-material/Pageview";

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IDrawerItem {
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  text: string;
  to: string;
  hideExpr?: boolean;
}

export const useDrawerItems = (): IDrawerItem[] => {
  const user = useAppSelector((state) => state.user.user);

  return [
    {
      icon: HomeIcon,
      text: "home",
      to: "/",
    },
    {
      icon: AccountCircleIcon,
      text: "profile",
      to: "/user/@" + user?.nickname,
      hideExpr: !user,
    },

    {
      icon: Notifications,
      text: "notifications",
      to: "/notification",
      hideExpr: !user,
    },
    {
      icon: Bookmark,
      text: "bookmarks",
      to: "/bookmarks",
      hideExpr: !user,
    },
    {
      icon: FavoriteIcon,
      text: "likes",
      to: "/likes",
      hideExpr: !user,
    },
    {
      icon: PageviewIcon,
      text: "search",
      to: "/search",
    },
  ];
};
