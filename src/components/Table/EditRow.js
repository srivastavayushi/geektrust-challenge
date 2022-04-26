import React,{useState} from 'react'
import { PencilAltIcon, SaveIcon } from '@heroicons/react/solid'

export const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData,
    editableRowIndex 
  }) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue);
  
    const onChange = (e) => {
      setValue(e.target.value);
    };
  
    // We'll only update the external data when the input is blurred
    const onBlur = () => {
      updateMyData(index, id, value);
    };
  
    // If the initialValue is changed externall, sync it up with our state
    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);
  
    return index === editableRowIndex ? (
      <input value={value} onChange={onChange} onBlur={onBlur} className='px-1' />
    ) : (
      <p>{value}</p>
    );
  };

export default function EditRow({row,editableRowIndex, setEditableRowIndex}) {

  return (
        <button
                className="action-button"
                onClick={() => {
                  const currentIndex = row.index;
                  if (editableRowIndex !== currentIndex) {
                    setEditableRowIndex(currentIndex);
                  } else {
                    setEditableRowIndex(null);
                    // const updatedRow = row.values;
                    // console.log("updated row values:");
                    // console.log(updatedRow);
                  }
                }}
              >
                {editableRowIndex !== row.index ? <PencilAltIcon className="h-6 w-6 text-gray-400"/> : <SaveIcon className="h-6 w-6 text-gray-700"/>}
        </button>
  )
}


