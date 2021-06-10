import { createMuiTheme, Theme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

export const lightTheme: Theme = createMuiTheme({
  palette: {
    type: "light",
    secondary: {
      main: "#ffffff",
    },
  },
});

export const darkTheme: Theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[200],
    },
    secondary: {
      main: grey[800],
    },
  },
});
