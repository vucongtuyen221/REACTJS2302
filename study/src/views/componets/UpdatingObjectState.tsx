import React, { useState } from 'react'
interface Position {
    X: number;
    Y: number;
    data: {
        name: any;
    }
}
function MovingDot () {

    const [position, setPosition] = useState<Position>({
        X: 50,
        Y: 50,
        data: {
            name: 'abc',
        },

       
    });
    const onPointerMove = (e: any) => {
        console.log(e);
        const {clientX, clientY} = e;
        // position.X = clientX
        // position.Y = clientY
        // console.log(position);
        setPosition({
            ...position,
            X: clientX,
            Y: clientY,
            data: {
            ...position.data,
              name: 'xyz',
            },

        })

    };
   return (
    <div style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
    }}
    onPointerMove={onPointerMove}
    >
     <div style={{
         position: 'absolute',
         backgroundColor: 'red',
         borderRadius: '50%',
         transform: `translate(${position.X}px, ${position.Y}px)`,
         left: -10,
         top: -10,
         width: 25,
         height: 25,

     }}
     />

     </div>
       
    
   );
}
function UpdatingObjectState() {
  return (
    
    <div><MovingDot/></div>
  )
}

export default UpdatingObjectState