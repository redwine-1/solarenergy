import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import Paragraph from "../src/Paragraph";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px auto",
    textAlign: "justify",
    padding: "30px 100px",
    [theme.breakpoints.down("md")]: {
      padding: "20px ",
    },
  },
  container: {
    width: "100%",
    padding: "30px 150px",
    margin: "50px 0",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: "20px 10px",
    },
  },

  button: { width: "100%", borderRadius: "0" },
  list: {
    listStyleType: "lower-alpha",
    maxWidth: "500px",
    margin: "auto",
    listStylePosition: "inside",
  },
}));

function Services(props) {
  const classes = useStyles();
  const [state, setState] = useState(services[0]);
  const clickHandle = (e) => {
    setState(services[e.currentTarget.value]);
  };
  const getSpacing = (screenWidth) => {
    if (isWidthUp("lg", screenWidth)) {
      return 4;
    } else if (isWidthUp("md", screenWidth)) {
      return 2;
    } else {
      return 0;
    }
  };
  const space = getSpacing(props.width);
  return (
    <React.Fragment>
      <Grid container spacing={space} className={classes.container}>
        <Grid item xs={12} md={4}>
          {services.map((service, index) => (
            <Button
              key={service.title}
              className={classes.button}
              color="primary"
              variant={service.title == state.title ? "contained" : "text"}
              value={index}
              onClick={clickHandle}
            >
              {service.title}
            </Button>
          ))}
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body2" gutterBottom>
            {state.description}
          </Typography>
          {state.image && <img style={{ width: "100%" }} src={state.image} />}
        </Grid>
      </Grid>
      <div className={classes.root}>
        <Typography
          style={{ margin: "0 auto 3rem" }}
          variant="h2"
          component="h1"
          align="center"
          color="primary"
        >
          Products
        </Typography>

        {Products.map((item, index) => (
          <div key={item.title}>
            <Paragraph
              title={index + 1 + ". " + item.title}
              description={item.description}
            />
            <ol className={classes.list}>
              {item.products &&
                item.products.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
            </ol>
          </div>
        ))}
        <Typography
          style={{ margin: "40px auto" }}
          variant="h3"
          component="h3"
          align="center"
          color="primary"
        >
          Proven Results
        </Typography>
        {results.map((item, index) => (
          <Paragraph key={index} description={index + 1 + ". " + item} />
        ))}
      </div>
    </React.Fragment>
  );
}
export default withWidth()(Services);

const results = [
  `10,000wp commercial solar power system; it provides constant and uninterrupted power to all the servers, computers, laptops, lights switches, moderns, routers and other equipment at the university of Nigeria Enugu campus data centre.`,
  `6000wp solar electric power; It provides constant and uninterrupted power to amplifiers, mixers, keyboard, electronic organ, stage lights, public address systems, projectors, large screen LED, display and other appliances at Christ church chapel UNN. \n\n
  Residential solar power systems, that provides uninterrupted power to the fridge, freezer, lights, fans, televisions, electric iron, computer in the house etc. CCTV systems,  Air Conditioners.`,
];

const Products = [
  {
    title: "PV – Direct Systems",
    description:
      "These are the simplest of solar-electric systems with fewest components (basically the PV array and the load) they don’t use batteries; they only power the loads when the sun is shining. This means they are appropriate for a few select appliances notably.",
    products: [
      "Solar powered boreholes",
      "Solar water heater",
      "Fans/ventilations ",
    ],
  },
  {
    title: "Off-Grid System",
    description: `Off grid system are most common in remote locations without utility services. This system can work anywhere. It can also operate independently from the grid to provide all of a household’s electricity. These systems requires a battery bank to store the solar electricity for use during the night time  or cloudy whether, a charge controller to protect the battery bank from over charge, an inverter to convert the DC PV-array power to AC for use with AC household appliance.`,
  },
  {
    title: "Grid-Tie with Battery Backup",
    description:
      "This is similar to an off grid system in design and components but adds the utility grid, which reduce the need for the system to provide all the energy all the time. ",
    products: [
      "Residential solar electric power systems ",
      "Commercial solar electric power systems  ",
      "Solar powered security lights/CCTV  ",
      "Solar powered street light",
      "Solar powered agricultural farms",
    ],
  },
];

const services = [
  {
    title: "Residential Solar Electric Power Systems",
    description: `Residential solar power systems, that provides uninterrupted power to the fridge, freezer, lights, fans, televisions, electric iron, computer in the house etc. CCTV systems,  Air Conditioners. We can scale according to your needs.`,
    image:
      "https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  },
  {
    title: "Commercial Solar Electric Power Systems ",
    description: `Commercial solar power systems provide constant and uninterrupted power to all the servers, computers, laptops, lights switches, moderns, routers,
    amplifiers, mixers, keyboard, electronic organ, stage lights, public address systems, projectors, large screen LED, display and other appliances. `,
    image:
    "https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  },
  {
    title: "Solar Powered Boreholes ",
    description: `Boreholes are made for a variety of purposes including the investigation and sampling of the geological succession for construction, water abstraction, or mineral extraction purposes, and monitoring of groundwater behavior and composition`,
    image: "/borehole.webp",
  },
  {
    title: "Solar Water Heater ",
    description: `Solar water heating (SWH) is heating water by sunlight, using a solar thermal collector. A variety of configurations is available at varying cost to provide solutions in different climates and latitudes. SWHs are widely used for residential and some industrial applications.`,
    image: "/water-heater.webp",
  },
  {
    title: "Solar Powered Security Light/CCTV ",
    description: `Image result for Solar Powered Security
Solar security cameras have components that help gather light energy from the sun. After that, it converts this energy into a form of DC power that gets stored in the system's batteries. The stored battery allows the camera to operate throughout the day, even in the evening`,
    image: "/cctv.webp",
  },
  {
    title: "Solar Powered Street Lights ",
    description:
      "Solar street lights are raised light sources which are powered by photovoltaic panels generally mounted on the lighting structure or integrated in the pole itself. The photovoltaic panels charge a rechargeable battery, which powers a fluorescent or LED lamp during the night. ",
    image: "/gallery/gallery10.webp",
  },
  {
    title: "Solar Powered Agricultural Farms ",
    description: `Solar can be installed on marginal agriculture lands and provide a different source of revenue for the farm. This different revenue stream can offset operating expenses of the farm and provide economic resiliency in poor growing years. Solar does not need to be installed on current or projected growing areas.`,
  },
];
