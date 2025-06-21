import React, { useCallback, useEffect, useState } from 'react'

export default function LearnCheck() {
    const [add, setAdd] = useState(0)


    console.log("Hello");

    useCallback(()=>{

        setAdd()

    })

    

    // useEffect(()=>{

      

    // })

  return (
    <div>Check: {add}</div>
  )
}
