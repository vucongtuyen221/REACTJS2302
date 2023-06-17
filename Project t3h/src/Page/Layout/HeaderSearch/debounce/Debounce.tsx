import {useState, useEffect} from 'react'

import React from 'react'

function Debounce(value: any, delay: number) {
   const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handler =setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handler);
    }, [value])
  return debounceValue
   
  
}
 
export default Debounce