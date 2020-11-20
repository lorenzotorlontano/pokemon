import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import "../Table/styleMain.css";
import Switch from "@material-ui/core/Switch";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";

function MainTable({ classes, text, handleShiny, handleTurn, pokemonDetails }) {
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          <TableRow className="tableActionRow">
            <TableCell align="center">
              <div>HEIGHT</div>
              <div>{pokemonDetails && pokemonDetails.height}</div>
            </TableCell>
            <TableCell align="center">
              <div>WEIGHT</div>
              <div>{pokemonDetails && pokemonDetails.weight}</div>
            </TableCell>
          </TableRow>
          <TableRow className="tableActionRow">
            <TableCell align="center">
              <div>ABILITY</div>
              <div>
                {pokemonDetails && pokemonDetails.abilities[0].ability.name}
              </div>
            </TableCell>
            <TableCell align="center">
              <div>MOVES</div>
              <div>{pokemonDetails && pokemonDetails.moves[0].move.name}</div>
            </TableCell>
          </TableRow>

          <TableRow className="tableActionRow">
            <TableCell align="center">
              <div>TYPES</div>
              <div>{pokemonDetails && pokemonDetails.types[0].type.name}</div>
            </TableCell>
            <TableCell align="center">
              <div>BASE EXPERIENCE</div>
              <div>{pokemonDetails && pokemonDetails.base_experience}</div>
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
export default MainTable;
