import React from 'react'

export const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData,
    editableRowIndex 
  }) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue);
  
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
      <input value={value} onChange={onChange} onBlur={onBlur} />
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
                    const updatedRow = row.values;
                    console.log("updated row values:");
                    console.log(updatedRow);
                    // call your updateRow API
                  }
                }}
              >
                {/* single action button supporting 2 modes */}
                {editableRowIndex !== row.index ? "Edit" : "Save"}
        </button>
  )
}


