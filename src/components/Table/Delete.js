import React from 'react'

export default function Delete({deleteItems, data, setData}) {

  const deleteItemsFunc = () =>{
    
      const temp = JSON.parse(JSON.stringify(data));

      const newArr = temp.filter(objFromTemp => {
      return !deleteItems.find(objFromDeleteItems => {
        return objFromTemp.id === objFromDeleteItems.original.id;
      })})
      setData([...newArr]);
    };
  return (
    <>
   <button 
      onClick={()=>deleteItemsFunc()}
      className='px-4 py-2 bg-green-400 m-4 border border-12 border-green-600'>
     Delete
   </button>
  <pre>
      <code>
          {
              JSON.stringify(
                {
                    deleteItems : deleteItems.map((row) => row.original)
                },
              null,
              2
          )}
      </code>  
    </pre>
    </>
   
  )
}
