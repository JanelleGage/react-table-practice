import './App.css';
import * as React from "react";
import fakeData from "./MOCK_DATA.json";
import { useTable } from "react-table";

function App() {

  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(() => [
    {
      Header: "Title",
      accessor: "title"
    },
    {
      Header: "Genre",
      accessor: "genre"
    },
    {
      Header: "Release Date",
      accessor: "release_date"
    },
    {
      Header: "Length (minutes)",
      accessor: "length"
    },
    {
      Header: "Rating (1-10)",
      accessor: "rating"
    }
    ], 
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = 
    useTable({ columns, data });


  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
