import Paragraph from "../src/Paragraph";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "100px auto",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      padding: "20px ",
    },
  },
}));

const about = [
  {
    title: "OUR VISION",
    description: `We are always looking for a new and exciting ways to extend the usage of solar solutions, to power our everyday lives with affordable and efficient solar power systems while maintaining international best standard in Nigeria and Africa at large. `,
  },
  {
    title: "OUR MISSION",
    description: `Continuous research and development of solar power systems for residential houses, offices/business centers, Hotels, Government Agencies, Rural Areas and communities. Also to lift the burden of power outages and Grid costs in developing countries. `,
  },
  {
    title: "SPECIALTIES ",
    description: `Solarenergy has the passion and commitment to help businesses and other
commercial outfits to cut their operational cost on energy. We design
and install solar power systems for auditoriums, hotels, churches,
supermarkets, shopping complex, hospitals and school among others. Our
aim is to drastically reduce the operational cost of any company in
addition to 24/7 uninterruptable power supply.`,
  },
];
export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        style={{ margin: "0 auto 3rem" }}
        variant="h2"
        component="h1"
        align="center"
        color="primary"
      >
        WHO WE ARE
      </Typography>
      {about.map((item) => (
        <Paragraph
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
