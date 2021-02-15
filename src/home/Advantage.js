import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "100px",
    width: "100px",
    display: "block",
    margin: "15px auto",
  },
  item: {
    boxShadow: "none",
    margin: "0 auto",
  },
  container: {
    width: "100%",
    padding: "30px 200px",
    backgroundColor: "#e6e4e4",
    margin: "0",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: "20px 5px",
    },
  },
  header: {
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  },
}));
const pictures = [
  {
    picture: "green-energy.webp",
    title: "Green Energy",
  },
  {
    picture: "earth.webp",
    title: "Environment Friendly",
  },
  {
    picture: "recycle.webp",
    title: "Renewable Energy",
  },
  {
    picture: "power.webp",
    title: "Natural Power",
  },
];
function Advantage(props) {
  const classes = useStyles();
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
          className={classes.header}
          variant="h3"
          align="center"
          color="primary"
        >
          Advantages Of Solar Energy
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
          <div style={{ backgroundColor: "#e6e4e4" }}>
            <img
              className={classes.image}
              alt={item.title}
              src={item.picture}
              title={item.title}
            />

            <Typography
              align="center"
              gutterBottom
              variant="h5"
              color="primary"
              component="h2"
            >
              {item.title}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
export default withWidth()(Advantage);
