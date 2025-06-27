import { useEffect, useState } from "react"

/*

useeffectHook : It is use to perform any side effects in React Componennt without re-rendering the component or conditionally rendering as per props or state value changed.










*/
export default function UseEffectHook() {

    const [count, setCounter] = useState(0)
    const [data, setData] = useState("")

    const handleCounterUpdate=()=>{

            setCounter(prev => prev +1)
    }

    const handleUpdateData= ()=>{
        setData("Ram")
    }

    console.log("UseEffect Hook Comp Get Rendered...!!")

    console.log("Ram is Great ")

    // useEffect(()=>{

    //     console.log("Ram is Great 2")
    // })  //Render every time when any dependent data from JSX get changed like mostly props or state then we know component will render.To avoid this -two ways a) Rendering only Once on Component Load and DOnt render from next time props or state change/whatever change in JSX. :  Pass empty array [] as second parameter to useEffect() Hook. 

    /*   b) Render first time on component load ofcourse and also every time depending upon the added variable change/dependencies in JSX part  : Pass that changable variable or state or props data in JSX to empty array as Items. 
    
    // Synatx :      useEffect(()=>{

                            console.log("Ram is Great 3")
                        },[variable1, variable2, variable3...])



    */



    useEffect(()=>{

        console.log("Ram is Great 2")
    },[])
    
    useEffect(()=>{

        console.log("Ram is Great 3")
    },[count])



  return (
    <>
    
    <h1 >{count}</h1>
    <button onClick={handleCounterUpdate}>Click</button>
    
    <button onClick={handleUpdateData}>Update Data</button>
    
    </>
  )
}
