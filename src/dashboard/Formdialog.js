import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Form from "./Form";

export default function FormDialog({ open, setOpen, handlePut, handleDelete }) {
  const data = open.data;
  const handleClose = () => {
    setOpen({ ID: "", data: "", open: false });
  };

  return (
    <div>
      <Dialog
        open={open.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Message</DialogTitle>
        <DialogContent>
          <Form data={data} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePut} color="primary" variant="outlined">
            Handled
          </Button>
          <Button
            onClick={handleDelete}
            style={{ backgroundColor: "red" }}
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
