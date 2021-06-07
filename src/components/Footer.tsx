import { FC, ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { FOOTER_HEIGHT } from "../shared/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerContent: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: theme.spacing(2),
      minHeight: FOOTER_HEIGHT,
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.background.paper
          : "#424242",
    },
  })
);

const Footer: FC<{}> = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.footerContent}>
      <Typography
        variant="h6"
        color="textSecondary"
        align="center"
        gutterBottom
      >
        <Link color="inherit" href="#">
          Cuntries of the World
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        Sebastian Lunz {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Footer;
