import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 2)
  return (
    <div className='w-full py-4'>
      <input
        className="border-2 border-pink-300 w-full py-2 px-4 outline-none text-xl focus:ring-2 focus:ring-pink-400 focus:border-0 rounded-lg"
        placeholder="Search by name, email or role"
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  )
}