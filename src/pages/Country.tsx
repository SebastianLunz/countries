import React, { FC, ReactElement, useState } from "react";
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
import { useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  })
);

const Country: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  const { state } = useLocation<ICountry>();

  const [countryCode, setCountryCode] = useState<string>("");
  const [countryByBorder, setCountryByBorder] = useState<ICountry>();
  const [error, setError] = useState();

  const handleClick = (border: string) => {
    setCountryCode(border);
  };

  useEffect(() => {
    let url = "https://restcountries.eu/rest/v2/alpha/";

    if (!state) {
      if (countryCode) {
        url += `${countryCode}`;
      } else {
        const suffixUrl = window.location.href;
        url += suffixUrl.substr(-3);
      }

      const fetchData = async () => {
        try {
          const response = await axios(url);
          setCountryByBorder(response.data);
        } catch (err) {
          setError(err.response.status);
        }
      };
      fetchData();
    }
  }, [state, countryCode]);

  const countryDetails = state || countryByBorder;

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {countryDetails ? (
        <React.Fragment>
          <Typography component="h2" variant="h3" gutterBottom>
            {countryDetails.name}
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
                      <Names country={countryDetails} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Card>
                    <CardContent>
                      <Typography component="h2" variant="h4" gutterBottom>
                        Codes
                      </Typography>
                      <Codes country={countryDetails} />
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
                      <Language country={countryDetails} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Card>
                    <CardContent>
                      <Typography component="h2" variant="h4" gutterBottom>
                        Geography
                      </Typography>
                      <Geography
                        country={countryDetails}
                        handleClick={handleClick}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Flag country={countryDetails} />
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography>{error}</Typography>
        </React.Fragment>
      )}
    </Container>
  );
};

export default Country;
