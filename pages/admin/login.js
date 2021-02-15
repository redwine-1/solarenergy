import React, { useState } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Notification from "../../src/Notification";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialFValues = {
  email: "",
  password: "",
};
const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
export default function Login() {
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
    temp.email = values.email
      ? /$^|.+@.+..+/.test(values.email)
        ? ""
        : "Email is not valid"
      : "Email required";
    temp.password = values.password > 7 ? "" : "Minimum 10 character  required"; //fix this

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const resp = await axios.post("/api/login", {
        email: values.email,
        password: values.password,
      });
      if (resp.status == 200) {
        Router.replace("/admin/dash-board");
      }
      if (resp.status == 500) {
        setNotify({
          isOpen: true,
          message: "Check Your Email And Password",
          variant: "error",
        });
      }
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            value={values.email}
            fullWidth
            onChange={handleChange}
            {...(error.email && { error: true, helperText: error.email })}
            label="Email Address"
            name="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={values.password}
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            {...(error.password && { error: true, helperText: error.password })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </Container>
  );
}

Login.getInitialProps = async (ctx) => {
  const cookie = await ctx.req.headers.cookie;
  const resp = await fetch(`${Base_Url}/api/admin/check-login`, {
    headers: {
      cookie: cookie,
    },
  });
  if (resp.status === 200 && !ctx.req) {
    Router.replace("/admin/dash-board");
    return;
  }
  if (resp.status === 200 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: `${Base_Url}/admin/dash-board`,
    });
    ctx.res.end();
    return;
  }
  const json = await resp.json();
  return json;
};
