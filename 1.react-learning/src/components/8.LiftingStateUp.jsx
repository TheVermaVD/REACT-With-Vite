
// #Lifting StateUp/Uplifting Data/Passing Function via props : It is Process of sending data from child to parent component with help of receiving a function as props from parent componet and we will invoke tht function with passing argument value as our sending data to parent.

import { useContext, useState } from "react"
import { ContextElement } from "../store/userContext";

//Note : Lifting state up usually happen when working up with event handlers  i.e event trigger in child component occurr/result something as parent component.

//Enable upward communication from child to parent.
//It is used commonly with event handling when we define the handler function not in the same i.e child component, we define it in the parent component and We send this handler function to CHild Comp props.This again states that a UI component is completly blind/dumb it doesnot have any main logic to handler, whatever parent component tell, this child comp will render on UI. 
// 
// In other word, Parent component also pass behaviour to the child component along with passing props data, we consider in React, each UI component only responsible for displaying UI only.


//Parent defines a function and child invokes it.


/*

Parent To Child : Parent pass data to child comp to display UI based on data passed from parent.

Child To Parent : If Child want to send back data to parent then Child component "Emits an Event' to the parent component to communicate to parent.
HERE, parent will decice all the behavior of the child like passing function/method as well as rendering Data.

 */


export default function LiftingStateUp() {

  const contextValue = useContext(ContextElement);

  //OR, using object destrcuting -

  // const {getData}= useContext(ContextElement);


  //------------------------------------------------

    const [name, setName]=useState("");

    //Task : I want this 'name' varibale get accessed at it Parent component, so we take help of event handler where we called so!
    const handleChange =(e)=>{
        setName(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // getData(name); //when we passed 'getData' fuction via props way.
        contextValue.getData(name); //when we passed 'getData' fuction via context way.

    }

  return ( <>
     <form onSubmit={handleSubmit}> 

        <input type="text"  value={name} onChange={handleChange} />
       <button>Submit</button>

    </form>
 

    </>
  )
}
