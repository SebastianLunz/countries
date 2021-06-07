import { FC, ReactElement } from "react";
import Typography from "@material-ui/core/Typography";

const NotFound: FC<{}> = (): ReactElement => {
  return (
    <>
      <Typography component="h6" variant="h1" color="secondary" align="center">
        404 - Not found
      </Typography>
    </>
  );
};

export default NotFound;
