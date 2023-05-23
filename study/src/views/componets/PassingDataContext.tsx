 import React,{ createContext, useContext, useState } from 'react'

 const CounterContext = createContext(0)

 function Child() {
  const counter = useContext(CounterContext)
  return (
  <div>child, counter: {counter}</div>
  )
 }
 function Parent() {
  return (
  <div> <Child /></div>
  );
 }
 function GrandParent({}) {
  return (
    <section>
     <div>
       <h3>jusst a h3</h3>
       <Parent />
     </div>
    </section>
  )
}

 
 function PassinngDataContext() {
  // const counter = useContext(CounterContext)
  const [counter, setCounter] = useState(2)
  
  return (
     
     <CounterContext.Provider value ={counter}>
     
     Counter: {counter}
     <button onClick={()=>setCounter(counter+1)}>Show</button>
     <GrandParent />
     </CounterContext.Provider>
  )
 }
 
 export default PassinngDataContext