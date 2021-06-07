import { FC, ReactElement } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ThemeProps } from "../shared/interfaces";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    homeLink: {
      textDecoration: "none",
    },
  })
);

const Header: FC<ThemeProps> = ({
  toggleTheme,
  useDefaultTheme,
}): ReactElement => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              component={RouterLink}
              to="/"
              className={classes.homeLink}
            >
              Countries of the World
            </Typography>
          </div>
          <div>
            <IconButton component={RouterLink} to="/about">
              <Tooltip title="About Page" placement="bottom">
                <InfoIcon />
              </Tooltip>
            </IconButton>

            <IconButton onClick={toggleTheme}>
              {useDefaultTheme ? (
                <Tooltip title="Switch to dark mode" placement="bottom">
                  <Brightness3Icon />
                </Tooltip>
              ) : (
                <Tooltip title="Switch to light mode" placement="bottom">
                  <Brightness7Icon />
                </Tooltip>
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
