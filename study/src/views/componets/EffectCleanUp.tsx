import React, {useEffect, useState} from 'react'
function ChatRoom({roomId}: any){
  useEffect(() =>{
    const connection = createConnection({roomId});
    connection.connect()

  }, [roomId]);

  return (
    <><p>Welcome to room: {roomId}</p>
    <input type="text" />
    <button>Submit</button>
    </>

      
  )
}


function EffectCleanUp() {
  const [roomId, setroomId] = useState('')
 
  return (
    <div>
        <label htmlFor="">Room</label>
        <select onChange={(e) => setroomId(e.target.value)}>
          <option value="">Choose room</option>
          <option value="react">react</option>
          <option value="vue">vue</option>
          <option value="angular">angular</option>
        </select>
        <ChatRoom roomId= {roomId}/>
           </div>
  )
}
function createConnection({roomId}: any) {
  return {
    connect: () => {
      console.log("connect to room ", roomId)
    },
    disconnect:() => {
      console.log("disconnect from room ", roomId)
    }
    }
  }


export default EffectCleanUp   