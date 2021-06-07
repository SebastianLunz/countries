import React, { FC, ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import useFetch from "../shared/useFetch";
import PageTitle from "../components/PageTitle";
import { Link as RouterLink } from "react-router-dom";
import NotFound from "./NotFound";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      marginRight: theme.spacing(2),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%",
    },
    cardContent: {
      flexGrow: 1,
    },
  })
);

const Countries: FC<{}> = (): ReactElement => {
  const { countries, error } = useFetch();
  const classes = useStyles();

  return (
    <React.Fragment>
      <PageTitle />
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {countries.length !== 0 ? (
            countries.map((country) => (
              <Grid item key={country.name} xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={country.flag}
                    title={country.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2">
                      {country.name}
                      <br />
                    </Typography>
                    <Typography gutterBottom>{country.capital}</Typography>
                    <Typography paragraph>{country.subregion}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      component={RouterLink}
                      to={{
                        pathname: `country/${country.name}`,
                        state: country,
                      }}
                    >
                      Details <ArrowRightAltIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : error === 404 ? (
            <NotFound />
          ) : (
            <Typography>No data</Typography>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Countries;
