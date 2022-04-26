import React, { forwardRef,useRef,useEffect } from "react";

export const Checkbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef()
      const resolvedRef = ref || defaultRef
  
      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
          <input type="checkbox" className='w-5 h-5 rounded-full ml-2' ref={resolvedRef} {...rest} />
        </>
      )
    }
  )