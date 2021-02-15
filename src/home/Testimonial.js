import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "80px 300px",
    margin: "0",
    overflow: "hidden",
    background: "transparent",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      padding: "55px 5px",
    },
  },
  name: {
    margin: "15px auto 5px",
  },
  background: {
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/testimonial-background.webp')`,
  },
}));

export default function Example(props) {
  const items = [
    {
      name: "Dr Eric",
      description: ` Due to ugly experience my boss at office have had with Solar installers, I refused to go for solar for more than 3years. My offices and house was running on diesel.

      Thank God I met Solarenergy Intl Ltd. They are truly God sent. Sincerely Solar Power is a viable alternative.`,
    },
    {
      name: "Dr Okoye",
      description: ` I was burning diesel for more than 3 years until a friend convinced me to try SOLARENERGY, that their product is reliable and affordable. Am not sure I can ever stay without solar energy again. Credenergy if you ask me is doing very well, they also have a good team.`,
    },
    {
      name: "Bar Hilary",
      description: `For two years now I have been enjoying Solar in my house. I have referred many of my friends to Solarenergy for their Solar power needs. In fact am so happy`,
    },
    {
      name: "Jude",
      description: `For the past 2 years now my house have been running on Solar energy. It's just that their products are a bit expensive than others. But it works.`,
    },
  ];
  const classes = useStyles();
  return (
    <Carousel className={classes.background}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Typography align="center" component="p">
        <FormatQuoteIcon style={{ transform: "scalex(-1)" }} color="primary" />
        {props.item.description}
        <FormatQuoteIcon color="primary" />
      </Typography>
      <Typography
        className={classes.name}
        color="primary"
        align="center"
        variant="h5"
        component="h3"
      >
        {props.item.name}
      </Typography>
    </Paper>
  );
}
