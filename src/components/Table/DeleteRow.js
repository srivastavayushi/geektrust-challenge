import React from 'react'
import { TrashIcon } from '@heroicons/react/solid'

export default function DeleteRow({row,setData}) {;
  return (
    <span
    onClick={() => {
        const temp = JSON.parse(JSON.stringify(row.data));
        const newArr = temp.filter(objFromTemp => objFromTemp.id !== row.row.original.id);
        console.log(newArr)
        setData([...newArr]);
      }}>
        <TrashIcon className="h-6 w-6 text-red-600"/>
   </span>
  )
}
