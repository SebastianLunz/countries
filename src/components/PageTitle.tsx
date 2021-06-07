import { FC, ReactElement } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContent: {
      padding: theme.spacing(6, 0, 6),
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.background.paper
          : "#424242",
    },
    headerButton: {
      marginTop: theme.spacing(4),
    },
  })
);

const PageTitle: FC<{}> = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.headerContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Countries of the World
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          This page is designed to easily view information about the countries
          of the world...
        </Typography>
        <div className={classes.headerButton}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/about"
              >
                About
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default PageTitle;
