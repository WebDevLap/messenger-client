import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
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
  func: () => unknown;
  hideExpr?: boolean;
}

export const useDrawerItems = (): IDrawerItem[] => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  function home() {
    navigate("/");
  }
  function profile() {
    navigate("/user/@" + user?.nickname);
  }

  function notification() {
    navigate("/notification");
  }
  function bookmarks() {
    navigate("/bookmarks");
  }
  function likes() {
    navigate("/bookmarks");
  }
  function search() {
    navigate("/search");
  }
  return [
    {
      icon: HomeIcon,
      text: "home",
      func: home,
    },
    {
      icon: AccountCircleIcon,
      text: "profile",
      func: profile,
      hideExpr: !user,
    },

    {
      icon: Notifications,
      text: "notifications",
      func: notification,
      hideExpr: !user,
    },
    {
      icon: Bookmark,
      text: "bookmarks",
      func: bookmarks,
      hideExpr: !user,
    },
    {
      icon: FavoriteIcon,
      text: "likes",
      func: likes,
      hideExpr: !user,
    },
    {
      icon: PageviewIcon,
      text: "search",
      func: search,
    },
  ];
};
