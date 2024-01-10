import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "@app/store";
import HomeIcon from "@mui/icons-material/Home";
import { Bookmark, Notifications } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PageviewIcon from "@mui/icons-material/Pageview";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { routes } from "@shared/config/routes";

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
      to: routes.main,
    },
    {
      icon: AccountCircleIcon,
      text: "profile",
      to: routes.user + "/@" + user?.nickname,
      hideExpr: !user,
    },

    {
      icon: Notifications,
      text: "notifications",
      to: routes.notification,
      hideExpr: !user,
    },
    {
      icon: AddCircleIcon,
      text: "create",
      to: routes.create,
      hideExpr: !user,
    },
    {
      icon: Bookmark,
      text: "bookmarks",
      to: routes.bookmarks,
      hideExpr: !user,
    },
    {
      icon: FavoriteIcon,
      text: "likes",
      to: routes.likes,
      hideExpr: !user,
    },
    {
      icon: PageviewIcon,
      text: "search",
      to: routes.search,
    },
  ];
};
