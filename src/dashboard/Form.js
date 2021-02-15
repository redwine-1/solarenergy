import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiFormControl-root": {
      width: "100%",
      margin: "auto",
    },

    "& .MuiGrid-item ": {
      padding: theme.spacing(1),
    },
    "& textarea": {
      padding: "10px",
    },
    "& input": {
      padding: "10px",
    },
  },
}));

export default function Message({ data }) {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="false">
      <Grid container>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            label="Full Name"
            name="fullName"
            style={{ height: "100%" }}
            value={data.fullName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            value={data.email}
            name="email"
            label="Email"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            name="number"
            label="Mobile Number"
            value={data.number}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            name="address"
            value={data.address}
            label="Address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            name="message"
            label="Message"
            multiline
            value={data.message}
            rows={6}
          />
        </Grid>
      </Grid>
    </form>
  );
}
