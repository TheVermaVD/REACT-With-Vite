import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompA from './components/3.CompA'

import { CheckContext } from './store/1.CheckDataContext'
import ToDoDataContext from './store/2.ToDoDataContext'
import UseEffectWithCleanUp from './components2_Optimization/2.useEffectWithCleanUp'
import UseStateLazyInitialization from './components2_Optimization/1.useStateLazyInitialization'
import ReactMemoOptimization from './components2_Optimization/4.memoHOF'
import FetchDataWithCleanUP from './components2_Optimization/2a.useEffectWithCleanUp2'
import UseMemoHookLearning from './components2_Optimization/3.useMemoHook'
import UseCallbackHook_Optimization from './components2_Optimization/5.useCallbackHook'
import HeavyResourceLoadingComponent from './components2_Optimization/6.LazyLoadingComponent'



const DeferLoadingComp = lazy( ()=> import('./components2_Optimization/6.LazyLoadingComponent'))   //Accepts a callback function and return a Promise. THis will differ the loading time.


// lazy laoding is a code-splitting technique in react to improve React-App loading time imporved and better performance. 

function App() {

  /*

## Working and Setup of context API in React APP :-  we have three major terms in Context API - 

create context (createContext from 'react')
provider 
consumer(using useContext() Hook  )


Note : By using React COntext API, we discard any data passing through 'prop' ways rather in place of sending any props data may be string, number, value, array, object, functions, method etc, we send it via CONTEXT api help without bother just sending to only its CHILD element. Since, this COntext API can capable enough to send any non direct link of Component in React.



Step1 :  Create a 'store' folder under >src , to store individual context for the app. Now, create Basic component for each Context(and export it) as per need and define below -

    import { createContext } from "react";

    export const CheckContext = createContext({

        check1 : "", //It a string type
        check2 : "", //It a string type
        handleCheck : ()=>{} //It a method type

    })

    Note : Remember to export it. Also, we have defined the default value for all context values.

Step2 : Inside App.jsx, Wrap the APP.jsx all component inside <CheckContex.Provider> with value attribute where we add all sending data in form of an object to get access there-

        <CheckContex.Provider value={{
                        check1 : check1,
                        chekc2 : check2,
                        handleCheck : handleCheck
                        }}  

                 <ComponentA/>       
                 <ComponentB/>       
                 <ComponentC/>   
                 ..............
                 
        </CheckContex.Provider>  
        
        
Step3 : Now, All Nested Component have all these data available, now we need to import or use i.e we need to consume data via usin useConetext() Hook, where we need 'CheckContex' from store to here as argument -


import { CheckContext } from '../store/1.CheckDataContext'
import { useContext } from 'react'

    
    const {check1, check2, handleCheck} = useContext(CheckContext)

    console.log("From Component C :", check1)
    console.log("From Component C :", check2)
    console.log("From Component C :", handleCheck())





----------------------------------------------------------------



Note : State Management In React across app, can be done via complexity ways

a) using 'context' of React library(which is Context API or useContext)
b) using react 'useReducer' Hook for complex useState management, replace useState() hook as well.
c) using 3rd party state management library like Redux(uses Flux Architecture to manage folders)



   */
  const data = [

    {
      name : "PRakash Verma",
      age : 23
    },
    {
      name : "Rahul Gupta",
      age : 24
    }
  ]

  // Use1 : Suppose, We want to sent this top-level 'myData' state data and two methods name 'handleClick' and 'handleChange' to Any Inner level or Just Adjancent COmponent as well -

  const [myToDoData, setMyToDoData] = useState(data)

  const handleClick = ()=>{
    ///....some code

    console.log("handleClicked Method Occured...!!")
  }

  const handleChange = ()=>{
    ///....some code

    console.log("handleChange Method Occured...!!")
  }




  // Use2 : Suppose below data and one method, want to send it to CompC from Here(Note : CompA called CompB, CompB called CompC i.e nested COmponent.)

  const check1 = "Prakash"
  const check2= "Shravya"
  const handleCheck = ()=>{
    return "Handle Check Method has Triggered!"
  }

  // Note : To send Primitive data i.e SIngle data like String, number, boolean we can send easily with creating only one context but if there is multiple data to send which Non-primitive data, so we have two options either we create multiple context for each data or we can create one context and pass it as object or array to store all indivisual data into it -

 console.log("App.jsx Componentget rendered...!!")


  return (
    <CheckContext.Provider value={{
              check1 : check1,
              check2 : check2,
              handleCheck : handleCheck
            }}>
   

        <ToDoDataContext.Provider value={{myToDoData, handleClick, handleChange}}>
        {/*Note, we have use Object short cut, when key-value name same we can only define the key name.  */}


                <h1>Learning Context API </h1>
                       {/* <CompA/> */}
                {/* <UseEffectWithCleanUp/> */}
                {/* <FetchDataWithCleanUP/> */}

                {/* <UseStateLazyInitialization/> */}
                 {/* <ReactMemoOptimization/> */}

                 {/* <UseMemoHookLearning/> */}

                 {/* <UseCallbackHook_Optimization/> */}


                <h1>This a Text To check Lazy Component</h1>
                <h1>This a Text To check Lazy Component 2</h1>

                 {/* <HeavyResourceLoadingComponent/> */}

                 <Suspense fallback={<h2> Loading Please wait.....</h2>} >

                    <DeferLoadingComp/>

                 </Suspense>



                

        </ToDoDataContext.Provider>

    </CheckContext.Provider>
  )
}

export default App
