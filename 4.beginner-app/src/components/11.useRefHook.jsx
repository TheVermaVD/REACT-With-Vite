

import React, { useRef } from 'react'
import { useState } from 'react'

export default function UseRefHook() {

  /* useRef() Hook Defination : It is a hook that lets us reference a value that’s not needed for re-rendering.

  Working : useRef() Hook returns an object with a 'current' property name only. Here, This Hook takes any type of initial value, passed to the 'current' property name. This argument_value is ignored after the initial render.

  // By useRef() Hook we can perform two things in react componennt -

  a) Keeping store some static value or data in useRef() : useRef() is the only hook in react that keep store some static data and also change in data  doensot render the component again untill reference value added to JSX element.

   Ex: Mostly, In useCase of storing some static value like 'tracking how many times our component get rendered'.

  b) Applying useRef on JSX element/For Browser DOM Manipulation Direct : In React JSX all elements provides a 'ref' attribute to add useRef() object reference to indivisual JSX element, so that to get the reference JSX element object to respective JSX elements. similary like in JS, const element = document.getElementById("#myname")

  Syntax : const inputRef = useRef("Ram")

  When we reference any JSX element with this refObject -
   <input type="text" ref={inputRef}/>

  Then, inputRef.current  =====  document.getElementById("#myname") ---> Means we get target the direct DOM element. 

  Now, We can access input field value like this -
  console.log(inputRef.current.value)
  console.log(document.getElementById("#name").value)

  Thus, If we pass the refObject to 'ref' attribute to a JSX node, then refObject's current value set to the current 'JSX element' or 'node'.


  Note : a) When we applying useRef on JSX element, It directly applies on browser DOM, so React virtual DOM doesnot get touched.
  b) Unlike using JS ways of targeting DOM element, we used React useRef() Hook to target the DOM element diretly, both are same.
  c) By using useRef() Hook we can control form input change without using any states for change in input fields value as well as no handleChange functions needed for it. THis will known as 'Uncontrolled Form' in React.
  

  

Note : By using a ref, you ensure that:

a) You can store information between re-renders (unlike regular variables, which reset on every render).

b) Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
c) The information is local to each copy of your component (unlike the variables outside, which are shared).
d) Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to display on the screen. Use 'state' for that instead.




  
  */

  // UseCase1 : - Tracking how many times component get rendered -

  const [myName, setName] = useState("")

  const noOfUpdates = useRef(1)

  // noOfUpdates.current = 1   //Initial Value of 'current' Property.

  const handleChange = (e)=>{

    setName(e.target.value)
    
    noOfUpdates.current += 1 

  }


  console.log("The No of Updates of this Component is : ", noOfUpdates.current)
    


  // ----------------------------------------------------------------

    // UseCase2: -

    const inputRef = useRef("<p>this is a node</p>")

    // console.log(inputRef.current) // 'current' property value updated to new targted JSX element where we added our refObject reference from initial 'current'property value as '<p>this is a node</p>'

    
    const handleReset = ()=>{


      // console.log(inputRef.current) // Returns <input> JSX element.
      const inputElement = inputRef.current;

      // const inputElement = document.getElementById("myname")
      // console.log(inputElement)

      // inputRef.current.value = ""  //To reset the Input field Value.

      inputRef.current.focus(); //As soon as user clicks Reset Button, inut field wont get out of focus, It will remain in focus.

      inputElement.style.color = "blue" //To make Input field bluee

      inputRef.current.value = "Prakash"
   
    }


    console.log("UseRef Component Get Rendered")
    const myrowdy = "Rrowdy Prakash Verma"  //CHange in myrowdy will render new UI and this component.
    

  return ( <> <h1>Use Ref Comp : {myrowdy}</h1>

  {/* Example1 : */}
  <h1>Use Ref Current Value : {noOfUpdates.current} </h1>
   MyName : 
  <input type="text" value={myName} onChange={handleChange} />
  
  

  {/* Example2: */}
  <input type="text" ref={inputRef}  id='myname'/>
  <button onClick={handleReset}>Reset</button>


  
  </>
 
  )
}
