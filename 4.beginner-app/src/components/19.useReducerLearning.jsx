import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

 function LearnUseReducer() {

    /*
    
    ## What is useReducer Hook : -
    
    useReducer is React Hook, that helps you manage and update state in more organized way unlike useState two ways update a) Direct State Update b) Updater function style State Update, Here, In useReducer we update the next with Reducer Method.

    In other WAY, useReducer is PAPA of 'usesState' hook to manage complex state(object state, array state) in more organized way.

    useReducer can be used in replacement with 'useState' Hook, as useReducer Hook offers more control over state management compared to useState.

    // usuReducer working more similar like Redux(statemanage APP wide, central storage for all state accross app) working.

    When do you use useReducer >?

    a) We use useReducer, only when we need to manage state of non-primitive data like object and array. Thus, When storing state is complex like Object, Array.

    b) Also, we use useReducer when previous state is dependent upton the next state, like counter updation etc.

    c) we use useReducer, when We need to perform multiple actions(like Increment Button, Decrement Button, Delete Button ; Add Item, Delete Item, Update Item) based button clicked; so handle function will be multiple, Thus we call DispachterMethod inside handler function to send actions to reducerMethod to perform our logic and return the updated next state to us.

    
    
    # Working : - In useReducer() Hook, There are three term mostly used -

    a) InitialStateObject
    b) Dispatcher_Method (contains object with 'type' and 'payload' property)
    c) Reducer_Method(accepts StateObject and ActionObject as paramters)


    const initialStateObject = {name : "", age : "23", city : ""}

    const [currentStateObj, dispatchMethod] = useReducer(reducerMethod, initialStateObject)

    // currentStateObj ---> Here, In useReducer we also deal with non-primitive data for state management, so we always pass array or object as InitialStateObj, which can be display as Current state value after each render.
        
         <h1> Current Count is : {currentStateObj.count}   </h1>

    // dispatchMethod  ---> using this method to Control or update of CUrren State. (DisptchMethod sends an action to reducerMethod to perform task as per action received)

        It usually looks like this-
        {type : 'increment'}

        We can also pass extra data, using payload property -
        {type : 'increment', payload : 'Learning useReducer' }

    // reducerMethod --> It is where we actually perform action command logic here after receiving from the dispathcerMethod and then finaly after logic performe we send back i.e return the value as new state to useReducer() hook.

    Note :reducerMethod, accept two paramter first 'StateObject' and second 'actionObject', in the same order, to work with updation of next state -
    actionObject.type  ----> we get passed 'message' text to perform task
    StateObject.count  ----> It used to update the next state with +1, -1, 0.


    // Let's Implement Counter Increment, Decrement and ResetCount  with useState() Hook First  -
    
    
    
    */

    const [count, setCount] = useState(0)

    const handleIncrement = ()=>{
        setCount(prev=> prev + 1)
    }
    const handleDecrement = ()=>{
        setCount(prev=> prev - 1)
    }
    const handleResetCount = ()=>{
        setCount(prev=> prev = 0)
    }

    console.log("UseReducer component get Rendered...!!")

  return ( <>
     <h1> Counter With useState Hook - </h1>
    <h2>Count : {count}</h2>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleResetCount}>ResetCount</button>

  
  </>
    
  )
}


 //Now, Let's Implement Same Counter Increment, Decrement and ResetCount with useReducer() Hook   -


 function ImplementUseReducer(){




    // we gernerally keep reducerMethod and initialStateDataObj is in store folder, and reducerMethod must be pure function i.e doesnot produce any side-effects.
    const reducerMethod = (currentStateObj, actionObj)=>{

        console.log("currentStateObj : ", currentStateObj)
        console.log("ActionObj : ", actionObj)

        switch(actionObj.type){

            case 'incrementCount' : return {count : currentStateObj.count + 1} 
            case 'decrementCount' : return {count : currentStateObj.count - 1} 
            case 'resetCount' : return {count : currentStateObj.count = 0} 
        }

    }

    // console.log(reducerMethod)

    // We use useReducer to hanle non-primitive data stateManagement like array, object so, we pass array or object as InitialStateData -

    const initialStateDataObj = { count : 0 }

    const [currentStateObj, dispatchSenderMethod] = useReducer(reducerMethod, initialStateDataObj)

    const handleIncrement = ()=>{

        dispatchSenderMethod({type : 'incrementCount'})
      
    }
    const handleDecrement = ()=>{

        dispatchSenderMethod({type : 'decrementCount'})
       
    }
    const handleResetCount = ()=>{
            dispatchSenderMethod({type : 'resetCount'})
    }


    console.log("ImplementUseReducer component get Rendered...!!")


    return <>
        <h1> Counter With useReducer Hook - </h1>

        <h2>Count : {currentStateObj.count}</h2>       
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleResetCount}>ResetCount</button>
    
    
    </>
 }


 export {LearnUseReducer, ImplementUseReducer}
