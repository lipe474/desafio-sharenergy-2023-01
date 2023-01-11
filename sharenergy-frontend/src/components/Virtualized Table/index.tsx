import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const StyledTable = styled(Table)`
  min-width: 650px;
`;

type Column = {
  title: string;
  field: string;
};

type Row = {
  [values: string]: any;
};

type Props = {
  rows: Row[];
  columns: Column[];
  count: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  page: number;
  rowsPerPage: number;
};

const VirtualizedTable: React.FunctionComponent<Props> = ({
  rows,
  columns,
  count,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
}) => {
  useEffect(() => {
    console.log(rows);
  }, [rows]);

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer component={Paper}>
        <StyledTable aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? (
              rows.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column, index) => (
                    <TableCell key={index}>{row[column.field]}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  <InfoOutlinedIcon color="warning" fontSize="large" />
                  <Typography color="textPrimary" variant="body1">
                    Nenhuma linha encontrada
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => {
          handleChangePage(event, newPage);
        }}
        onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChangeRowsPerPage(event);
        }}
      />
    </Paper>
  );
};

export default VirtualizedTable;
