


import React from 'react'
import Hearder from '../component/Header/Hearder'

function Defaulayout({children}: {children : any}) {
  return (
    <div>
        <Hearder />
        <div className="container">
          
            <div className="conten">
                 {children}
            </div>
        </div>
    </div>
  )
}

export default Defaulayout