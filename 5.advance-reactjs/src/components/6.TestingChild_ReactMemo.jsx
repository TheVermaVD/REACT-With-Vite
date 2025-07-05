import React from 'react'

import { memo } from 'react'

function TestingChildComp() {

    // Suppose, this Child Component Hold and heavy calculation -

    //------

    console.log("TestingChild Component Getting Rendered...!!")

  return (
    <div> <h3>TestingChildComp</h3></div>
  )
}


const MemoizedChildComp = memo(TestingChildComp) //momo() HOC takes a React COmponent and return a new React COmponent with memoized means untill there is no props or state data send here and getting changed then it wont render. 

export default MemoizedChildComp;