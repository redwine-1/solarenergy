import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default function Notification(props) {
  const { notify, setNotify } = props;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotify({ isOpen: false });
  };

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={3500}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert variant="filled" onClose={handleClose} severity={notify.variant}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}
