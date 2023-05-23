import React, {useState} from 'react'

function Panel({children}: any){
    const [isActive, setIsActive] = useState(false)
    return (
    <section> {isActive ? (children) : (<button onClick={() =>{setIsActive(true); }}> Show </button> )}</section>
    )
}

function Sharing() {
  return (
    <div><Panel>
        <h2>This is a tatio</h2>
        <p>
            Lorem ipsum dolor sit amet
             consectetur adipisicing elit. Aspernatur odio rerum 
             illum, alias necessitatibus autem distinctio quod doloremque
              libero delectus eum officiis incidunt quam officia. 
              Exercitationem minus quod cumque error?
        </p>
        </Panel></div>
  )
}

export default Sharing