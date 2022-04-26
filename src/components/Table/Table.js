import React,{useState} from 'react';
import { useTable ,useGlobalFilter,useFilters, useRowSelect,usePagination} from "react-table";
import { Checkbox } from './Checkbox';


import { GlobalFilter } from './Search'
import Delete from './Delete';
import DeleteRow from './DeleteRow';
import EditRow,{EditableCell} from './EditRow';
import Pagination from './Pagination';

const defaultColumn = {
  Cell: EditableCell
};

export default function Table({data,columns,setData, updateMyData,skipPageReset}) {
    const [editableRowIndex, setEditableRowIndex] = useState(null);

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
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
        initialState:{pageIndex : 0}
      },
      useFilters,
      useGlobalFilter,
      usePagination,
      useRowSelect,
      hooks => {
        hooks.visibleColumns.push(columns => [
          {
            id: 'selection',
            Header: ({ getToggleAllPageRowsSelectedProps }) => (
              <div>
                <Checkbox {...getToggleAllPageRowsSelectedProps()} />
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
            Header: "Actions",
            accessor: "actions",
            Cell: ({ row, setEditableRowIndex, editableRowIndex,data }) => (
              <span className='flex flex-row items-center justify-start gap-2'>
                <EditRow 
                    row={row} 
                    setEditableRowIndex={setEditableRowIndex} 
                    editableRowIndex={editableRowIndex}
                />
                <DeleteRow setData={setData} data={data} row={row}/>
              </span>
            )
            
          }
        ])
      });
    const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className='max-w-6xl mx-auto'>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="border-gray border-b text-2xl text-left">
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className='py-2'>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={editableRowIndex===row.index ? 'border-gray border-b text-md bg-pink-300' : 'border-grey-300 border-b hover:bg-pink-300 text-md'}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()} className='py-2'>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <footer className='flex flex-row items-center justify-between max-w-3xl'>
    <Delete 
       data = {data}
       setData={setData}
       deleteItems= {selectedFlatRows}
    />
    <Pagination nextPage={nextPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        pageCount={pageCount}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageSize={pageSize}
     />

    </footer>
    
    </div>
  )
}
