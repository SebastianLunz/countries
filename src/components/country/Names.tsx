import React, { FC, ReactElement } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import TranslateIcon from "@material-ui/icons/Translate";
import { CountryProps } from "../../shared/interfaces";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      // maxWidth: 360,
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

const Names: FC<CountryProps> = ({ country }): ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List aria-labelledby="names" className={classes.root}>
      <ListItem>
        <ListItemText secondary="Common" />
        <ListItemText primary={country.name} className={classes.mainText} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="Common (Native)" />
        <ListItemText
          primary={country.nativeName}
          className={classes.mainText}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText secondary="Alternative spellings" />
        <ListItemText
          primary={country.altSpellings.map((altSpelling) => (
            <Typography key={altSpelling}>{altSpelling}</Typography>
          ))}
          className={classes.mainText}
        />
      </ListItem>
      <Divider />

      <ListItem button onClick={handleClick} className={classes.space}>
        <ListItemIcon>
          <TranslateIcon />
        </ListItemIcon>
        <ListItemText secondary="Translations" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemText primary="br" />
            <ListItemText
              primary={country.translations.br}
              className={classes.mainText}
            />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemText primary="de" />
            <ListItemText
              primary={country.translations.de}
              className={classes.mainText}
            />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemText primary="es" />
            <ListItemText
              primary={country.translations.es}
              className={classes.mainText}
            />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemText primary="fa" />
            <ListItemText
              primary={country.translations.fa}
              className={classes.mainText}
            />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemText primary="fr" />
            <ListItemText
              primary={country.translations.fr}
              className={classes.mainText}
            />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemText primary="hr" />
            <ListItemText
              primary={country.translations.hr}
              className={classes.mainText}
            />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemText primary="it" />
            <ListItemText
              primary={country.translations.it}
              className={classes.mainText}
            />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemText primary="ja" />
            <ListItemText
              primary={country.translations.ja}
              className={classes.mainText}
            />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemText primary="nl" />
            <ListItemText
              primary={country.translations.nl}
              className={classes.mainText}
            />
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemText primary="pt" />
            <ListItemText
              primary={country.translations.pt}
              className={classes.mainText}
            />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default Names;
