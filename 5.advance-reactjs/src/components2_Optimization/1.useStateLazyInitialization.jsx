

import React, { useState } from 'react'

export default function UseStateLazyInitialization() {


  // # React APP-Performance Optimization In Loading Pages and Making Peformance Improved - (LEVEL-I)

  // a) useStateLazyInitialization 
  // b) useStateWithCleanUpFunction 

    // #Lazy Initialization : Suppose If we have some expesive function(complex calculation value we get returned) as the initial state value. So In useState() Hook, if we need to pass this expesive function value as state_initial state value then -

    // Problem : If we direct call it like : const [count, setCount] = useState(expensive())  --> Then Each time, on Increment Click, this Expesive function ge called each time which may low the performance of React app as due to expensive function loading each time. 

    //Solution : a) Need to pass as Callback function : const [count, setCount] = useState(()=> expensive()) ---> then it won't call expesinve function every time, only once will get called. 
    // 
    // OR, b) Pass Expessive function without parenthesis then also it get called only on first of State Loading.


    const expensive = ()=>{

        console.log("An expensive function executed...")
        return 100
    }

    // const [count, setCount] = useState(()=> expensive())

    const [count, setCount] = useState(expensive)

    console.log("LazyInitialization Component Get Rendered")


  return (<>

    <h2>Count : {count}</h2>
    <button onClick={()=> setCount(prevValue => prevValue + 1) }>Increase</button>
  
  
  </>
  )
}
