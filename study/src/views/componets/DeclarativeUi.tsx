import React, {useState} from 'react'

function DeclarativeUi() {
    const [value, setValue] = useState('abc')
    const submit = (e: any) => {
        e.preventDefault();
    }
  return (
    
        <form>
        <label htmlFor="">Input:</label>
        <input type="text" value={value} 
        onChange={(e) => setValue(e.target.value)}/>
        <button onClick={submit}>Submit</button>
        </form>
    
    
  )
}

export default DeclarativeUi