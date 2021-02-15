import React from "react";
import {
  Typography,
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { useState } from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  list: {
    width: 250,
  },
  firstLetter: {
    textTransform: "capitalize",
  },
  moreIcon: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["home", "services", "gallery", "about", "contact"].map(
          (text, index) => (
            <Link href={`/${text}`} key={index}>
              <ListItem button>
                <ListItemText className={classes.firstLetter} primary={text} />
              </ListItem>
            </Link>
          )
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Link href="/">
              <Typography
                style={{ flexGrow: 1, cursor: "pointer" }}
                variant="h6"
              >
                <i>SolarEnergy</i>
              </Typography>
            </Link>

            <div className={classes.sectionDesktop}>
              <Link href="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link href="/services">
                <Button color="inherit">Services</Button>
              </Link>
              <Link href="/gallery">
                <Button color="inherit">Gallery</Button>
              </Link>
              <Link href="/about">
                <Button color="inherit">About</Button>
              </Link>
              <Link href="/contact">
                <Button color="inherit">Contact</Button>
              </Link>
            </div>
            <IconButton
              className={classes.moreIcon}
              color="inherit"
              onClick={toggleDrawer(true)}
              aria-label="Menu"
            >
              <DehazeIcon />
            </IconButton>
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </Toolbar>
        </AppBar>
        )
      </React.Fragment>
    </div>
  );
}
