import { FC, ReactElement } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { IProps } from "../shared/interfaces";
import Header from "./Header";
import Footer from "./Footer";
import { FOOTER_HEIGHT } from "../shared/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
  })
);

const CountryAlbum: FC<IProps> = ({
  useDefaultTheme,
  toggleTheme,
  children,
}): ReactElement => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <header>
        <Header useDefaultTheme={useDefaultTheme} toggleTheme={toggleTheme} />
      </header>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CountryAlbum;
