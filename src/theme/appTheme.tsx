import { createMuiTheme, Theme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

export const lightTheme: Theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

export const darkTheme: Theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[200],
    },
  },
});
