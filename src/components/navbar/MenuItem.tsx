import React, { FC, ReactElement } from "react";
import clsx from "clsx";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import DefaultIcon from "@material-ui/icons/FileCopy";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { NavLink, useLocation } from "react-router-dom";
import RouteItem from "../../model/RouteItem.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selected: {
      boxShadow:
        "0 0 3px #424242, 0 0 9px #424242, 0 0 11px #424242, 0 0 30px #424242",
    },
    nested: {
      marginLeft: theme.spacing(2),
    },
  })
);

const MenuItem: FC<RouteItem> = (route: RouteItem): ReactElement => {
  const classes = useStyles();
  const location: any = useLocation();

  return (
    <>
      <NavLink
        to={`${route.path}`}
        key={`${route.key}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Tooltip title={route.tooltip || ""} placement="right">
          <ListItem>
            <ListItemIcon>
              <IconButton
                className={clsx({
                  [classes.selected]: location.pathname === route.path,
                })}
              >
                <Icon component={route.icon || DefaultIcon} />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={route.title} />
          </ListItem>
        </Tooltip>
      </NavLink>
    </>
  );
};

export default MenuItem;
