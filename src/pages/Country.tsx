import React, { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { ICountry } from "../shared/interfaces";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Names from "../components/country/Names";
import Language from "../components/country/Language";
import Codes from "../components/country/Codes";
import Geography from "../components/country/Geography";
import Flag from "../components/country/Flag";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  })
);

const Country: FC<{}> = (): ReactElement => {
  const { state } = useLocation<ICountry>();
  const country = state;

  const classes = useStyles();

  console.log(country);

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography component="h2" variant="h3" gutterBottom>
          {country.name}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card>
                  <CardContent>
                    <Typography component="h2" variant="h4" gutterBottom>
                      Names
                    </Typography>
                    <Names country={country} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card>
                  <CardContent>
                    <Typography component="h2" variant="h4" gutterBottom>
                      Codes
                    </Typography>
                    <Codes country={country} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card>
                  <CardContent>
                    <Typography component="h2" variant="h4" gutterBottom>
                      Language
                    </Typography>
                    <Language country={country} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card>
                  <CardContent>
                    <Typography component="h2" variant="h4" gutterBottom>
                      Geography
                    </Typography>
                    <Geography country={country} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Flag country={country} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Country;
