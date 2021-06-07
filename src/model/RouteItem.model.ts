import { FC, ComponentType } from "react";

interface RouteItem {
  key: string;
  title: string;
  tooltip?: string;
  path?: string;
  component?: FC<{}>;
  enabled: boolean;
  icon?: ComponentType;
}

export default RouteItem;
