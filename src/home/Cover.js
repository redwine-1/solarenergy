import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress')`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    padding: "30px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeButton: {
    marginTop: "30px",
  },
}));

export default function Cover() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        style={{ textTransform: "uppercase", padding: "10px 5px" }}
        variant="h2"
        component="h1"
        align="center"
        color="secondary"
      >
        renewable energy solutions
      </Typography>
      <Typography align="center" variant="subtitle1" style={{ color: "#fff" }}>
        Light Up With Solar & Save Natural Resources
      </Typography>
      <Link href="/contact">
        <Button
          className={classes.homeButton}
          color="primary"
          variant="contained"
          size="large"
        >
          Hire Now
        </Button>
      </Link>
    </div>
  );
}
