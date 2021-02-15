import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Notification from "./Notification";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "30px 150px",
    margin: "0",
    overflow: "hidden",
    backgroundColor: "#e6e4e4",
    [theme.breakpoints.down("md")]: {
      padding: "20px 10px",
    },
  },
  item: {
    boxShadow: "none",
    margin: "0 auto",
    backgroundColor: "inherit",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    cursor: "pointer",
    margin: "10px",
  },
  root: {
    display: "flex",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  subButton: {
    paddingLeft: "8px",
    paddingRight: "8px",
    borderRadius: "0 4px 4px 0",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    variant: "",
  });

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const subscribe = (e) => {
    e.preventDefault();
    axios
      .post("/api/news-letter", {
        email: email,
      })
      .then((response) => {
        if (response.status == 201) {
          setNotify({
            isOpen: true,
            message: "Subscribed Successfully",
            variant: "success",
          });
          setEmail("");
        } else if (response.status == 500) {
          setNotify({
            isOpen: true,
            message: "Please try again later",
            variant: "error",
          });
        } else {
          setNotify({
            isOpen: true,
            message: "Error :" + response.status,
            variant: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setNotify({
          isOpen: true,
          message: "Network Error",
          variant: "error",
        });
      });
  };

  return (
    <Grid className={classes.container} container spacing={5}>
      <Grid className={classes.item} item xs={10} md={6} lg={3}>
        <Typography color="primary" gutterBottom variant="h5" component="h2">
          ABOUT US
        </Typography>
        <Typography color="inherit" variant="body2" align="left" component="p">
          With fossil fuels dying out, a new energy source must come to light.
          Our team is adamantly positive that it will be not wind, not atomic
          energy - but solar energy that will define our future
        </Typography>
      </Grid>
      <Grid className={classes.item} item xs={10} md={6} lg={3}>
        <Typography color="primary" gutterBottom variant="h5" component="h2">
          MENU
        </Typography>
        <ul className={classes.list}>
          <Link href="/">
            <li className={classes.listItem} color="inherit">
              Home
            </li>
          </Link>
          <Link href="/services">
            <li className={classes.listItem} color="inherit">
              Services
            </li>
          </Link>
          <Link href="/gallery">
            <li className={classes.listItem} color="inherit">
              Gallery
            </li>
          </Link>
          <Link href="/about">
            <li className={classes.listItem} color="inherit">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className={classes.listItem} color="inherit">
              Contact
            </li>
          </Link>
        </ul>
      </Grid>
      <Grid className={classes.item} item xs={10} md={6} lg={3}>
        <Typography color="primary" gutterBottom variant="h5" component="h2">
          CONTACT US
        </Typography>
        <ul className={classes.list}>
          <li className={classes.listItem} color="inherit">
            <Grid container>
              <Grid item xs={2}>
                <LocationOnIcon color="primary" />
              </Grid>
              <Grid item xs={8}>
                <Typography
                  color="inherit"
                  variant="body2"
                  align="left"
                  component="p"
                >
                  221B Baker Street
                </Typography>
              </Grid>
            </Grid>
          </li>

          <li className={classes.listItem} color="inherit">
            <Grid container>
              <Grid item xs={2}>
                <PhoneIcon color="primary" />
              </Grid>
              <Grid item xs={8}>
                <a href="tel:2025550195">202 555 0195</a>
              </Grid>
            </Grid>
          </li>

          <li className={classes.listItem} color="inherit">
            <Grid container>
              <Grid item xs={2}>
                <EmailIcon color="primary" />
              </Grid>
              <Grid item xs={8}>
                <a href="mailto:support@solar.com">support@solar.com</a>
              </Grid>
            </Grid>
          </li>
        </ul>
      </Grid>
      <Grid className={classes.item} item xs={10} md={6} lg={3}>
        <Typography color="primary" gutterBottom variant="h5" component="h2">
          NEWSLETTER
        </Typography>
        <Paper component="form" className={classes.root} onSubmit={subscribe}>
          <InputBase
            className={classes.input}
            onChange={handleChange}
            value={email}
            id="email"
            placeholder="Your Email"
          />
          <label style={{ display: "none" }} htmlFor="email">
            Email
          </label>
          <Button
            className={classes.subButton}
            color="primary"
            variant="contained"
            type="submit"
          >
            Subscribe
          </Button>
        </Paper>
      </Grid>
      <Notification notify={notify} setNotify={setNotify} />
    </Grid>
  );
}
