import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Notification from "../Notification";
import axios from "axios";
import TablePagination from "@material-ui/core/TablePagination";
import FormDialog from "./Formdialog";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  delete: {
    color: "#d50000",
  },
});

export default function Messages({ messages }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState({ id: "", data: "", open: false });
  const [allMessages, setMessages] = useState(messages);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    variant: "",
  });

  const handleClickOpen = async (e) => {
    const ID = e.currentTarget.value;
    const data = await axios.get(`/api/admin/contact/${ID}`, {
      withCredentials: true,
    });
    setOpen({ id: ID, data: data.data, open: true });
  };

  const handlePut = async () => {
    const ID = open.id;
    const data = await axios.put(`/api/admin/contact/${ID}`, {
      withCredentials: true,
    });
    if (data.data.success == true) {
      setNotify({
        isOpen: true,
        message: "Updated",
        variant: "success",
      });
      setMessages(allMessages.filter((item) => item._id !== ID));
    } else {
      setNotify({
        isOpen: true,
        message: "Error: Try Again Later",
        variant: "error",
      });
    }
  };
  const handleDelete = async () => {
    const ID = open.id;
    const data = await axios.delete(`/api/admin/contact/${ID}`, {
      withCredentials: true,
    });
    if (data.data.success == true) {
      setNotify({
        isOpen: true,
        message: "Deleted",
        variant: "success",
      });
      setMessages(allMessages.filter((item) => item._id !== ID));
      setOpen({ id: "", data: "", open: false });
    } else {
      setNotify({
        isOpen: true,
        message: "Error: Try Again Later",
        variant: "error",
      });
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
      <Toolbar>
        <Typography variant="h6" id="tableTitle" component="div">
          Messages
        </Typography>
      </Toolbar>
      <Paper>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Mobile Number</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allMessages
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((message) => (
                  <TableRow hover key={message._id}>
                    <TableCell component="th" scope="row">
                      {message.fullName}
                    </TableCell>
                    <TableCell align="center">{message.email}</TableCell>
                    <TableCell align="center">{message.phoneNumber}</TableCell>
                    <TableCell align="center">
                      {message.date.toLocaleString()}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        value={message._id}
                        variant="contained"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        Open
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={allMessages.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Notification notify={notify} setNotify={setNotify} />
      <FormDialog
        open={open}
        setOpen={setOpen}
        handlePut={handlePut}
        handleDelete={handleDelete}
      />
    </React.Fragment>
  );
}
