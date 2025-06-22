

import React, { useRef } from 'react'

export default function UseRef() {

    const currentRefObj = useRef(0)
    console.log("currentRefObj", currentRefObj)
    console.log("current attribute value", currentRefObj.current)

    // const handleClick ()=>{


    // }

  return ( <>
  
  <div>Count : {currentRefObj.current} </div>
  <button onClick={handleClick }>Increase</button>
  
  
  </>
 
  )
}
