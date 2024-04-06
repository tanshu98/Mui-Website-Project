import React, { useEffect, useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  TablePagination,
} from "@mui/material";

function MuiTable() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => {
        setRows(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const columns = [
    { id: "id", title: "id" },
    { id: "userId", title: "User ID" }, 
    { id: "title", title: "Title" }, 
    { id: "body", title: "Body" }, 
  ];

  // handlePageChange = ((event, newPage)=> {
  //   setPage(newPage);
  // })
  return (
    <div>
      <Paper sx={{ width: "80%", marginLeft: "5%", marginTop: "5%" }}>
        <Typography sx={{ marginBottom: "3%" }} variant="h3">
          MUI Table
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10,20,30,40,50,60,70,80,90,100]}
        page={page}
        // rowsPerPage={rowsperpage}
        // component={div}
        // onPageChange={handlePageChange}
        // onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>
      </Paper>
    </div>
  );
}

export default MuiTable;
