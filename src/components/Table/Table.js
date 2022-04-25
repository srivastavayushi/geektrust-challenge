import React,{useState} from 'react';
import { useTable ,useGlobalFilter,useFilters, useRowSelect,usePagination,} from "react-table";
import { Checkbox } from './Checkbox';


import { GlobalFilter } from './Search'
import Delete from './Delete';
import DeleteRow from './DeleteRow';
import EditRow,{EditableCell} from './EditRow';

const defaultColumn = {
  Cell: EditableCell
};

export default function Table({data,columns,setData, updateMyData,skipPageReset}) {

    const [editableRowIndex, setEditableRowIndex] = useState(null);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        state,
        setGlobalFilter
      } = useTable({
        columns,
        data,
        defaultColumn,
        autoResetPage: !skipPageReset,
        updateMyData,
        editableRowIndex,
        setEditableRowIndex,
      },
      useFilters,
      useGlobalFilter,
      usePagination,
      useRowSelect,
      hooks => {
        hooks.visibleColumns.push(columns => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <Checkbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            Cell: ({ row }) => (
              <div>
                <Checkbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
          {
            Header: "Delete",
            id:'delete',
            accessor: str => "delete",
            Cell: (row) => <DeleteRow row={row} setData={setData}/>
          },
          {
            accessor: "edit",
            id: "edit",
            Header: "edit",
            Cell: ({ row, setEditableRowIndex, editableRowIndex }) => (
                <EditRow 
                    row={row} 
                    setEditableRowIndex={setEditableRowIndex} 
                    editableRowIndex={editableRowIndex}
                />
            )
          }
        ])
      });
    const { globalFilter } = state

  return (
    <div>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()} className="border-black border w-full">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className='border-black border hover:bg-yellow-200'>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()} className='className="border-black border'>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    {selectedFlatRows.length > 0 &&
    <Delete 
       data = {data}
       setData={setData}
       deleteItems= {selectedFlatRows}
    />
    }
    </div>
  )
}
