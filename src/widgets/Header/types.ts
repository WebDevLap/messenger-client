import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IDrawerItem {
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  text: string;
  to: string;
  hideExpr?: boolean;
}
