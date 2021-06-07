import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

import Countries from "../pages/Countries";
import Country from "../pages/Country";
import About from "../pages/About";

import RouteItem from "../model/RouteItem.model";
import NotFound from "../pages/NotFound";

export const routes: Array<RouteItem> = [
  {
    key: "router-countries",
    title: "Countries",
    tooltip: "Countries",
    path: "/",
    enabled: true,
    component: Countries,
    icon: HomeIcon,
  },
  {
    key: "router-country",
    title: "Country",
    tooltip: "Country",
    path: "/country/:name",
    enabled: true,
    component: Country,
  },
  {
    key: "router-about",
    title: "About",
    tooltip: "About",
    path: "/about",
    enabled: true,
    component: About,
    icon: InfoIcon,
  },
  {
    key: "router-notFound",
    title: "NotFound",
    tooltip: "NotFound",
    path: "/notFound",
    enabled: true,
    component: NotFound,
  },
];
