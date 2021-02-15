import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    margin: "45px auto",
  },
});

export default function Types({ title, description }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h2" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
    </div>
  );
}
