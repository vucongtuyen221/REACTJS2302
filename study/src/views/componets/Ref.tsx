import React,{ useRef }  from 'react'

function Ref() {
    const ref = useRef(0)
    const refCus = {
        current: 0
    }
    
        
    const handleClick =() => {
      ref.current = ref.current + 1
      refCus.current = refCus.current + 1
      
       
       
        alert(ref.current)
        alert(refCus.current)
        
    }
  return (
    <div>
        <button onClick={handleClick}>Click me !</button>
    </div>
  )
}

export default Ref