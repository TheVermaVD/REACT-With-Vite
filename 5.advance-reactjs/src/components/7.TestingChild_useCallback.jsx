import React, { memo } from 'react'

function TestingChild_useCallback() {

    console.log("TestingChild_useCallback is getting Rendered...!1")

  return ( <>

  <h2>Hey Im child Component...</h2>
    {/* // <button onClick={()=> handleIncrease()}>Increment</button> */}

    </>
  )
}


export default memo(TestingChild_useCallback)