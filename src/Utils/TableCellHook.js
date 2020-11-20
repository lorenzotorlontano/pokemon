import { withStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import TableCell from "@material-ui/core/TableCell";

export default function StyledTableCell() {
  return withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
}
