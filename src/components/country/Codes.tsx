import { FC, ReactElement } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { CountryProps } from "../../shared/interfaces";
import Divider from "@material-ui/core/Divider";

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

const Codes: FC<CountryProps> = ({ country }): ReactElement => {
  const classes = useStyles();

  return (
    <List aria-labelledby="codes" className={classes.root}>
      <ListItem>
        <ListItemText secondary="ISO 3166-1 alfa-2" />
        <ListItemText
          primary={country.alpha2Code}
          className={classes.mainText}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="ISO 3166-1 alfa-3" />
        <ListItemText
          primary={country.alpha3Code}
          className={classes.mainText}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="ISO 3166-1 numeric" />
        <ListItemText
          primary={country.numericCode}
          className={classes.mainText}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="International calling code" />
        <ListItemText
          primary={country.callingCodes[0]}
          className={classes.mainText}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="ISO 4217 currency code" />
        <ListItemText
          primary={country.currencies[0].code}
          className={classes.mainText}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="Top level domain" />
        <ListItemText
          primary={country.topLevelDomain[0]}
          className={classes.mainText}
        />
      </ListItem>
    </List>
  );
};

export default Codes;
