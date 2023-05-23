import React, {useState} from 'react'
function useInputValue(defauValue: any): any {
    const [value, setValue] = useState(defauValue)
    const setInputValue = (e: any) => {
       setValue(e.target.value)
       
       
    }
    return [value, setInputValue]
}
function CustomHooks() {
    const [firstName, setFirstName] = useInputValue('')
    const [lastName, setLastName] = useInputValue('')
  return (
    <form
    onSubmit = {(e)=> 
    {e.preventDefault()}}>
        <label htmlFor="">Fist name</label>
        <input type="text"
        value= {firstName} onChange={setFirstName} />
        <br />
        <label htmlFor="">Last name</label>
        <input type="text" 
         value= {lastName} onChange={setLastName}/>
        <br />
        <label htmlFor="">Address</label>
        <input type="text" 
         value= {firstName} onChange={setFirstName}/>
        <button>Submit</button>
    </form>
  )
}

export default CustomHooks