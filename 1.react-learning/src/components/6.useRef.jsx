

/*

useRef() Hook : -

Use1: useRef() hook use to keep track of data without re-rendering the component. like using useState() Hook, which used to make component re-render on each state change but useRef() keep data without re-rendering.


Use2: Sometimes we need to manipulate the direct DOM of the browser rather Virtual DOM of React, then we ue useRef() Hook. So using this Hook, on change of any state or props our component will not re-render as it's working upon the DIRECT DOM of the browser, so the change directly applying to REAL DOM.

useRef is a React Hook that lets you reference to any JSX Element Indivisually and then we can access that Direct DOM element via useRef reference 'current' property name, which changes doesnot re-render our component.

Syntax: 
const ref = useRef(initialValue); 

useRef returns an object with a single property name 'current' and for first render the value of 'current' property is 'initialValue' (which can be a value of any type). This argument 'initialValue' is ignored after the initial render with added refernce ref object to JSX element, then we get current value as referenced 'JSX element'.

Note: React provides 'ref' attribute to the all JSX element for adding/hooking up the reference object to that JSX element.









*/

import React, { useContext, useEffect, useRef, useState } from 'react'
import MyButton from './Button';
import { ContextElement } from '../store/userContext';



export default function LearnUseRef() {

  const contextValue= useContext(ContextElement);

  // --------------------------------------------

    const [name, setName] = useState("")
    const refElement = useRef("");//we get a ref Element Object having only one property name i.e 'current'

    console.log(refElement, typeof refElement);
    // console.log(refElement.current.);

    const handleReset = ()=>{
        setName("");
        refElement.current.focus();
      
    }

    const handleColor = ()=>{

        console.log(refElement.current); //Gives us the <input> element
        refElement.current.style.color="blue"; 
        
    }

    // -----------------------------------------------

    const [count, setCount] = useState(0);

    console.log("Rendered Times");

    useEffect(()=>{

      setCount(count=>count+1);

    },[name]);

    const noOfCount = useRef(0);

    useEffect(()=>{
      noOfCount.current = noOfCount.current+1
    })

    console.log("No of count: ", noOfCount.current)


  return ( <>
    <div>

        <input ref={refElement} type="text" value={name} onChange={(e)=> setName(e.target.value)} />

        <button onClick={handleReset}>Reset</button>
        <button onClick={handleColor}>ChangeColor</button>
    </div>


{/* //Second useCase of useRef() Hook - */}
    <div>

      <h2>Component Render Count : {count}</h2>
      <h2>Component Render Count : {noOfCount.current}</h2>

      <h4>This is at Use Ref Component : {contextValue.rwdyName}</h4>
      <MyButton/>


    </div>

    </>
  )
}
