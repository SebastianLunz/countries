import React, { FC, ReactElement } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { CountryProps } from "../../shared/interfaces";
import Divider from "@material-ui/core/Divider";

import LanguageIcon from "@material-ui/icons/Language";

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

const Language: FC<CountryProps> = ({ country }): ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List aria-labelledby="language" className={classes.root}>
      <ListItem>
        <ListItemText secondary="Native language" />
        <ListItemText
          primary={country.languages[0].name}
          className={classes.mainText}
        />
      </ListItem>
      <Divider />

      <ListItem button onClick={handleClick} className={classes.space}>
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText secondary="Languages" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {country.languages.map((language) => (
            <ListItem className={classes.nested} key={language.iso639_2}>
              <ListItemText primary={language.iso639_2} />
              <ListItemText
                primary={language.name}
                className={classes.mainText}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default Language;
