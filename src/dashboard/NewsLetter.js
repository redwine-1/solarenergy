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
import axios from "axios";
import Notification from "../Notification";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  delete: {
    color: "#d50000",
  },
});

export default function NewsLetter({ newsletters }) {
  const classes = useStyles();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    variant: "",
  });
  const [newsEmails, setNewsEmails] = useState(newsletters);
  const handleDelete = async (e) => {
    const ID = e.currentTarget.value;
    const data = await axios.delete(`/api/admin/news-letter/${ID}`, {
      withCredentials: true,
    });
    if (data.data.success == true) {
      setNotify({
        isOpen: true,
        message: "Deleted",
        variant: "success",
      });
      setNewsEmails(newsEmails.filter((item) => item._id !== ID));
    } else {
      setNotify({
        isOpen: true,
        message: "Error: Try Again Later",
        variant: "error",
      });
    }
  };

  return (
    <React.Fragment>
      <Toolbar>
        <Typography variant="h6" id="tableTitle" component="div">
          Newsletter
        </Typography>
      </Toolbar>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newsEmails.map((newsletter) => (
              <TableRow key={newsletter._id}>
                <TableCell align="center">{newsletter.email}</TableCell>
                <TableCell align="center">
                  {newsletter.date.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    onClick={handleDelete}
                    value={newsletter._id}
                    className={classes.delete}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Notification notify={notify} setNotify={setNotify} />
    </React.Fragment>
  );
}
