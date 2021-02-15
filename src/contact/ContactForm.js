import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Button } from "@material-ui/core";
import Notification from "../Notification";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e6e4e4",
    margin: "0",
    padding: "30px 250px",
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
    },
    "& .MuiGrid-item ": {
      padding: theme.spacing(1),
    },

    [theme.breakpoints.down("md")]: {
      padding: "20px 10px",
    },
  },
  button: {
    margin: "15px auto",
  },
}));

const initialFValues = {
  fullName: "",
  email: "",
  number: "",
  address: "",
  message: "",
};

export default function ContactForm() {
  const classes = useStyles();
  const [values, setValues] = useState(initialFValues);
  const [error, setErrors] = useState({});
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    variant: "",
  });
  const validate = () => {
    let temp = {};
    (temp.fullName = values.fullName ? "" : "This field is required"),
      (temp.email = /$^|.+@.+..+/.test(values.email)
        ? ""
        : "Email is not valid");
    temp.number = values.number.length > 9 ? "" : "Minimum 10 numbers required";
    temp.message = values.message ? "" : "This field is required";
    setErrors(temp);
    return Object.values(temp).every((x) => x == "");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .post("/api/contact", {
          fullName: values.fullName,
          email: values.email,
          phoneNumber: values.number,
          address: values.address,
          message: values.message,
        })
        .then((response) => {
          if (response.status == 201) {
            setNotify({
              isOpen: true,
              message: "Message Sent Successfully",
              variant: "success",
            });
            setValues(initialFValues);
          } else if (response.status == 500) {
            setNotify({
              isOpen: true,
              message: "Please try again later",
              variant: "error",
            });
          } else {
            setNotify({
              isOpen: true,
              message: "Error :" + response.status,
              variant: "error",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          setNotify({
            isOpen: true,
            message: "Network Error",
            variant: "error",
          });
        });
    }
  };

  return (
    <form className={classes.root} autoComplete="false" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Full Name"
            name="fullName"
            {...(error.fullName && { error: true, helperText: error.fullName })}
            value={values.fullName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            name="email"
            label="Email"
            {...(error.email && { error: true, helperText: error.email })}
            value={values.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            name="number"
            label="Mobile Number"
            {...(error.number && { error: true, helperText: error.number })}
            value={values.number}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="address"
            label="Address"
            value={values.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            name="message"
            label="Message"
            {...(error.message && { error: true, helperText: error.message })}
            multiline
            rows={6}
            value={values.message}
            onChange={handleChange}
          />
        </Grid>
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Submit
        </Button>
      </Grid>
      <Notification notify={notify} setNotify={setNotify} />
    </form>
  );
}
