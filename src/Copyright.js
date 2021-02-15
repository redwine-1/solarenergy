import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MuiLink from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  Copyright: {
    backgroundColor: "#43a047",
    padding: "15px",
    color: "#fff",
  },
}));
export default function Copyright() {
  const classes = useStyles();
  return (
    <Typography
      className={classes.Copyright}
      variant="body2"
      color="inherit"
      align="center"
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="#">
        SolarEnergy
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."} All Rights Reserved
    </Typography>
  );
}
