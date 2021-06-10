import React, { FC, ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const About: FC<{}> = (): ReactElement => {
  return (
    <>
      <Container maxWidth="lg">
        <Box pt={6}>
          <Typography component="h2" variant="h2">
            About
          </Typography>
          <Typography paragraph>
            This page is designed to easily view information about the countries
            of the world.
          </Typography>
          <Typography paragraph>
            Site design is copyright (c) 2021 Sebastian Lunz. Source code is
            available on{" "}
            <Link href="https://github.com/SebastianLunz/countries">
              GitHub.
            </Link>
          </Typography>
          <Typography component="h2" variant="h2">
            Sources
          </Typography>
          <Typography paragraph>
            <Link href="https://restcountries.eu/">Rest Countries</Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
