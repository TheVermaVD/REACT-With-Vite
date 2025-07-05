import React, { useCallback, useState } from 'react'
import TestingChild_useCallback from '../components/7.TestingChild_useCallback'

function UseCallbackHook_Optimization() {

    /*


    // useCallback and useMemo() Both Hooks are Chacha Ke bette of useEffect() -
    
    Both syntax is also same like useEffect() Hook means both first argument takes as a function and second argument as dependencies for variable condition for again re-rendering.
    
    #useCallback Hook() : It is optimization technique for React APP performance imporvement and making application fast and enhanced. 
    
    const add = (num1, num2) => num1 + num2 ;
    const add2 = (num1, num2) => num1 + num2 ;
    
    console.log(add == add2); //false //as In JS, object datatypes are reference type means each object have their own reference in moemory. Like array, object and function are 'object' Datatypes in javascript.
    
    
    
    # useCallback() Hook : It is use to momoized i.e keeping up the function reference same or object reference same after each render untill no props or state data changed added in dependencies array .
   
    
    # Motive : THis Hook also, use in case of checking Any Child Componet is getting rendered or not, if there is no props or state data passed and which is changing.
    
    But in useCallback, we pass the method to child component which is not changing or responsible for changing any props or state still CHild Component will render.(Event Tho we exported Child component with memo() HOC), this is happening coz when ever any object datatype(like function, array, object) renders creates a new instance i.e reference which is not same as previous coz array, object and function are reference datatype.

    Hence, We need to sustain the same reference of passed function or method by memoizing the function using useCallback hook. which kept the after first referece the reference value same.

    NOte : To accomplish useCallback Hook to not re-render child Component, We need to use 'memo() HOC' along with useCallback Hook.
    
    
    

    
    
    */
    console.log(" useCallBack Hook Component Rendered.....")

    const [count, setCount] = useState(0)

    const handleIncrease = ()=>{

        setCount(prev => prev + 1)
        
    }

    //  useCallback( ()=> {} ,  [])

    const memoizedFunction = useCallback(()=>{

        return handleIncrease;

    }, [])

    // Note : We memoized function using useCallback Hook when we need to pass that function via JSX and we do not want that function again create new reference on each render of parent component, so we memoized the function on first render and get the return memoized function and will pass this memoized function to the jsx or via props. Just like useMemo() memoized value use used when we need to use into JSX or need to pass.

   return (  <>
    <div>useCallbackHook_Optimization</div>


    <h4>Count : {count}</h4> 
    <button onClick={handleIncrease}> Increment</button>
    
    {/* Our Button is there -  */}
    <TestingChild_useCallback handleIncrease = {memoizedFunction}/>



    </>
  )
}

export default UseCallbackHook_Optimization