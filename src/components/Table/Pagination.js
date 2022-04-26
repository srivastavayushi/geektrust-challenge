import React from 'react'

export default function Pagination({
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,pageIndex, pageSize}) {
  return (
    <div className='flex flex-row gap-4 justify-center items-center'>
    <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}
    className='rounded-full bg-blue-300 p-2 px-2.5 text-blue-600 font-bold text-xl'>
      {'<<'}
    </button>
    <button onClick={()=> previousPage()} disabled={!canPreviousPage}
    className='rounded-full bg-blue-300 p-2 px-4 text-blue-600 font-bold text-xl'>
      {'<'}
    </button>
    {[1,2,3,4].map((val)=>(
      <button key={val} className='rounded-full bg-blue-300 text-blue-600 font-bold p-2.5 px-4'
      onClick={ e =>{
        const pageNumber = val ? Number(val) - 1 : 0;
        gotoPage(pageNumber);
      }}>
          {val}
      </button>
    ))}
    <button onClick={()=> nextPage()} disabled={!canNextPage}
    className='rounded-full bg-blue-300 p-2 px-4 text-blue-600 font-bold text-xl'>
      {'>'}
    </button>
    <button onClick={()=> gotoPage(pageCount-1)} disabled={!canNextPage}
    className='rounded-full bg-blue-300 p-2 px-2.5 text-blue-600 font-bold text-xl'>
      {'>>'}
    </button>
  </div>
  )
}
