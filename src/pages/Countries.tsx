import React, { FC, ReactElement, useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  createStyles,
  Theme,
  fade,
} from "@material-ui/core/styles";
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
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.secondary.main, 0.7),
      "&:hover": {
        backgroundColor: fade(theme.palette.secondary.main, 1),
      },
      marginLeft: 0,
      marginBottom: theme.spacing(4),
      width: "100%",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
    inputInputWidth: {
      width: "100%",
    },
    searchLabel: {
      marginBottom: theme.spacing(2),
    },
  })
);

const Countries: FC<{}> = (): ReactElement => {
  const { countries, error } = useFetch();
  const [query, setQuery] = useState<string>("");
  const lowerCaseQuery = query.toLowerCase();
  const classes = useStyles();

  console.log(countries);

  return (
    <React.Fragment>
      <PageTitle />
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography component="h2" variant="h4" className={classes.searchLabel}>
          Search for a country:
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Enter Country Name"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={classes.inputInputWidth}
          />
        </div>
        <Grid container spacing={4}>
          {countries.length !== 0 ? (
            countries
              .filter((country) =>
                country.name.toLowerCase().includes(lowerCaseQuery)
              )
              .map((country) => (
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
            <Typography>No data...</Typography>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Countries;
