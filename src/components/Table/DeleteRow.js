import React from 'react'
import { TrashIcon } from '@heroicons/react/solid'

export default function DeleteRow({setData, data, row}) {
  return (
    <span
    onClick={() => {
        const temp = JSON.parse(JSON.stringify(data));
        const newArr = temp.filter(objFromTemp => objFromTemp.id !== row.original.id);
        setData([...newArr]);
      }}>
        <TrashIcon className="h-6 w-6 text-red-600"/>
   </span>
  )
}
