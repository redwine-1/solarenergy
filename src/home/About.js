import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "30px 200px",
    backgroundColor: "#e6e4e4",
    margin: "0",
    [theme.breakpoints.down("md")]: {
      padding: "20px 5px",
    },
  },
  Media: {
    height: "100%",
    width: "100%",
  },
  item: {
    margin: "0 auto",
  },
  button: {
    margin: "15px auto",
    display: "block",
  },
}));

function About(props) {
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
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      display="flex"
      alignItems="center"
      spacing={space}
    >
      <Grid item xs={12} md={6}>
        <div>
          <Typography gutterBottom align="center" variant="h4" component="h2">
            About Us
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            component="p"
          >
            SolarEnergy has the passion and commitment to help businesses and
            other commercial outfits to cut their operational cost on energy. We
            design and install solar power systems for auditoriums, hotels,
            churches, supermarkets, shopping complex, hospitals and school among
            others. Our aim is to drastically reduce the operational cost of any
            company in addition to 24/7 uninterruptable power supply.
          </Typography>
          <Link href="/about">
            <Button
              className={classes.button}
              variant="contained"
              size="medium"
              color="primary"
            >
              View More
            </Button>
          </Link>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          className={classes.Media}
          alt="working man"
          src="https://images.pexels.com/photos/4254164/pexels-photo-4254164.jpeg?auto=compress"
        />
      </Grid>
    </Grid>
  );
}

export default withWidth()(About);
