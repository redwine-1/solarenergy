import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  total: {
    height: "100px",
    width: "100px",
    color: "#fff",
    margin: "15px auto",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  },
  item: {
    boxShadow: "none",
    margin: "0 auto",
  },
  container: {
    width: "100%",
    padding: "30px 200px",
    margin: "0",
    backgroundSize: "cover",
    color: "#fff",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/4254167/pexels-photo-4254167.jpeg?auto=compress')`,
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: "20px 5px",
      backgroundPosition: "center",
    },
  },
  item2: {
    textAlign: "center",
    backgroundColor: "transparent",
  },
}));

function Trust(props) {
  const classes = useStyles();
  const pictures = [
    {
      title: "Finished Project",
      total: "150",
    },
    {
      title: "Happy Clients",
      total: "145",
    },
    {
      title: "Year Of Experience",
      total: "5",
    },
    {
      title: "Business Partner",
      total: "30",
    },
  ];
  const getSpacing = (screenWidth) => {
    if (isWidthUp("lg", screenWidth)) {
      return 5;
    } else if (isWidthUp("md", screenWidth)) {
      return 3;
    } else {
      return 0;
    }
  };
  const space = getSpacing(props.width);
  return (
    <Grid
      className={classes.container}
      alignItems="center"
      container
      display="flex"
      spacing={space}
    >
      <Grid className={classes.item} item xs={10}>
        <Typography
          style={{ fontWeight: "600" }}
          color="primary"
          align="center"
          variant="h4"
          component="h2"
        >
          Trust Our Professionals
        </Typography>
        <Typography align="center" color="inherit">
          We have Extensive Experience In Installing Solar Power Plants
        </Typography>
      </Grid>
      {pictures.map((item) => (
        <Grid
          className={classes.item}
          key={item.title}
          item
          xs={10}
          md={6}
          lg={3}
        >
          <div className={classes.item2} elevation={0}>
            <Button className={classes.total}>
              <Typography color="inherit" variant="h5" component="h6">
                {item.total}
              </Typography>
            </Button>
            <Typography
              align="center"
              gutterBottom
              variant="h5"
              component="h2"
              color="primary"
            >
              {item.title}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
export default withWidth()(Trust);
