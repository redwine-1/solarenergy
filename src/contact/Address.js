import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Fragment } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Divider from "../Divider";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "30px 250px",
    margin: "50px 0 0",
    backgroundColor: "#e6e4e4",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      padding: "20px 10px",
      backgroundPosition: "center",
    },
  },
  item: {
    boxShadow: "none",
    margin: "0 auto",
  },
  listItem: {
    cursor: "pointer",
    margin: "10px",
    listStyle: "none",
  },
}));

export default function Address() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        className={classes.container}
        alignItems="center"
        container
        spacing={3}
      >
        <Grid className={classes.item} item xs={10}>
          <Typography
            color="primary"
            align="center"
            variant="h4"
            component="h2"
          >
            OUR CONTACTS
          </Typography>
          <Typography align="center" color="textSecondary">
            Contact With Us For Any Kind Of Query
          </Typography>
        </Grid>
        <Grid
          component="ul"
          className={classes.item}
          item
          xs={10}
          md={4}
          lg={3}
        >
          <li className={classes.listItem} color="inherit">
            <Grid container>
              <Grid item xs={2}>
                <LocationOnIcon color="primary" />
              </Grid>
              <Grid item xs={10}>
                <Typography color="inherit" variant="body2" component="p">
                  221B Baker Street
                </Typography>
              </Grid>
            </Grid>
          </li>
        </Grid>
        <Grid className={classes.item} item xs={10} md={4} lg={3}>
          <li className={classes.listItem} color="inherit">
            <Grid container>
              <Grid item xs={2}>
                <PhoneIcon color="primary" />
              </Grid>
              <Grid item xs={10}>
                <a href="tel:2025550195">202 555 0195</a>
              </Grid>
            </Grid>
          </li>
        </Grid>
        <Grid className={classes.item} item xs={10} md={4} lg={3}>
          <li className={classes.listItem} color="inherit">
            <Grid container>
              <Grid item xs={2}>
                <EmailIcon color="primary" />
              </Grid>
              <Grid item xs={10}>
                <a href="mailto:support@solar.com">support@solar.com</a>
              </Grid>
            </Grid>
            <Grid item xs={12} m={5}></Grid>
          </li>
        </Grid>
        <Divider>
          <Typography color="textSecondary" variant="h6" component="p">
            OR
          </Typography>
        </Divider>
      </Grid>
    </Fragment>
  );
}
