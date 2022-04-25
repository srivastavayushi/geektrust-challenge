import React from 'react'

export default function DeleteRow({row,setData}) {;
  return (
    <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
    onClick={() => {
        const temp = JSON.parse(JSON.stringify(row.data));
        const newArr = temp.filter(objFromTemp => objFromTemp.id !== row.row.original.id);
        console.log(newArr)
        setData([...newArr]);
      }}>
        Delete
   </span>
  )
}
