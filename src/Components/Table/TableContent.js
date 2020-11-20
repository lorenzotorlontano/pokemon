import React from "react";
import Switch from "@material-ui/core/Switch";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import "../Table/styleMain.css";

function TableContent({
  name,
  ability,
  weight,
  height,
  type,
  experience,
  classes,
  text,
  handleTurn,
  handleShiny,
}) {
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          <TableRow className="tableActionRow">
            <TableCell align="center">
              <div>HEIGHT</div>
              <div>{height}</div>
            </TableCell>
            <TableCell align="center">
              <div>WEIGHT</div>
              <div>{weight}</div>
            </TableCell>
          </TableRow>
          <TableRow className="tableActionRow">
            <TableCell align="center">
              <div>ABILITY</div>
              <div>{ability}</div>
            </TableCell>
            <TableCell align="center">
              <div>MOVES</div>
              <div>{name}</div>
            </TableCell>
          </TableRow>

          <TableRow className="tableActionRow">
            <TableCell align="center">
              <div>TYPES</div>
              <div>{type}</div>
            </TableCell>
            <TableCell align="center">
              <div>BASE EXPERIENCE</div>
              <div>{experience}</div>
            </TableCell>
          </TableRow>

          <TableRow className="tableActionRow">
            <TableCell className="tableCell" align="center">
              <div>TURN {text} </div>
              <div>
                <Switch
                  onChange={handleTurn}
                  color="primary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
            </TableCell>
            <TableCell className="tableCell" align="center">
              <div>TURN SHINY</div>
              <div>
                <Switch
                  onChange={handleShiny}
                  color="primary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableContent;
