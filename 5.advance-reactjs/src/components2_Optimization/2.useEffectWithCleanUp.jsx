import { useState, useEffect } from 'react'

function UseEffectWithCleanUp() {


    // Note : useEffect() cleanup works only when Our React have Routing Provided so that out app have multiple page to move to other page and useEffect() cleanup can work.;by which Our React APP performance get improvement in loading pages.
  
    // Working : Returning a function from  `useEffect` allows for cleanup, ideal for removing event listeners or any side effect task to stop or cancel immeditaly and start this or load again when user back to that page where data loading or side effect has been implemented - 


    const [count, setCount] = useState(0)

    useEffect(()=>{
  
      const id = setInterval(()=>{
  
          setCount(prev=> prev+1)
            console.log("UseEffect Logic getting Rendered...")
  
  
        }, 3000)    
        
        return ()=>{
  
          clearInterval(id)
          console.log("useeffect Cleanup Occured or Cancelled...")
        } 
    }, [])
  
  
  console.log(" UseEffectWithCleanUp Component Rendered...!!")
  
  return (
    <>
  
    <h1>I have rendered : {count}</h1>
     
    </>
  )
  }



export default UseEffectWithCleanUp