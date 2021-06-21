import { FC, ReactElement } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { CountryCodeProps } from "../../shared/interfaces";
import Divider from "@material-ui/core/Divider";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    mainText: {
      textAlign: "right",
    },
    space: {
      marginTop: "25px",
    },
  })
);

const Geography: FC<CountryCodeProps> = ({
  country,
  handleClick,
}): ReactElement => {
  const classes = useStyles();

  return (
    <List aria-labelledby="codes" className={classes.root}>
      <ListItem>
        <ListItemText secondary="Region" />
        <ListItemText primary={country.region} className={classes.mainText} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="Subregion" />
        <ListItemText
          primary={country.subregion}
          className={classes.mainText}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="Capital" />
        <ListItemText primary={country.capital} className={classes.mainText} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="Denonym" />
        <ListItemText primary={country.demonym} className={classes.mainText} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="Lat/Lng" />
        <ListItemText
          primary={`${country.latlng[0]}, ${country.latlng[1]}`}
          className={classes.mainText}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="Area" />
        <ListItemText className={classes.mainText}>
          {country.area} km<sup>2</sup>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="Land borders" />
        <ListItemText
          primary={country.borders.map((border) => (
            <Link
              key={border}
              component={RouterLink}
              to={`${border}`}
              onClick={() => {
                handleClick(border);
              }}
            >
              {border}{" "}
            </Link>
          ))}
          className={classes.mainText}
        />
      </ListItem>
    </List>
  );
};

export default Geography;
