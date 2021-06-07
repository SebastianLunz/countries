import React, { useReducer } from "react";
import CountryAlbum from "./components/CountryAlbum";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Theme,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./theme/appTheme";
import { routes } from "./config";
import RouteItem from "./model/RouteItem.model";

function App() {
  const [useDefaultTheme, toggleTheme] = useReducer((theme) => !theme, true);

  let theme: Theme = createMuiTheme(useDefaultTheme ? lightTheme : darkTheme);
  theme = responsiveFontSizes(theme);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <CountryAlbum
              useDefaultTheme={useDefaultTheme}
              toggleTheme={toggleTheme}
            >
              {routes.map((route: RouteItem) => (
                <Route
                  key={`${route.key}`}
                  path={`${route.path}`}
                  component={route.component}
                  exact
                />
              ))}
            </CountryAlbum>
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
