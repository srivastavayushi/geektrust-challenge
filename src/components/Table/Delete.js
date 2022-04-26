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
      disabled={deleteItems.length <= 0}
      className='px-4 py-2 bg-pink-700 m-4 rounded-full text-pink-100 font-bold'>
     Delete Selected
   </button>
  {/* <pre>
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
    </pre> */}
    </>
   
  )
}
