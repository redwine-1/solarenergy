import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mapControl: {
    height: "450px",
    width: "100%",
  },
}));

export default function map() {
  const classes = useStyles();
  return (
    <iframe
      loading="lazy"
      title="Solarenergy Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4248524534605!2d-0.1607443843319058!3d51.52376697963777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2s221B%20Baker%20St%2C%20Marylebone%2C%20London%20NW1%206XE%2C%20UK!5e0!3m2!1sen!2sbd!4v1613408770500!5m2!1sen!2sbd"
      className={classes.mapControl}
      frameBorder="0"
      style={{ border: "0" }}
      aria-hidden="false"
    ></iframe>
  );
}
