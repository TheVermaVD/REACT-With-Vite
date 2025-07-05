import { useState } from "react"


export default function LiftingState({userName, getName}) {


  /*

  # Bubble Up Data / Sending Function via Props / Lifting State Up/ Passing Data from Child TO Parent : When we send any data(state data) from CHild to Parent COmponent, kmnown a Lifting state up or bubble up data.

It is Process of sending data from child to parent component with help of receiving a function as props from parent componet and we will invoke tht function with passing argument value as our sending data to parent.



//Note : Lifting state up usually happen when working up with event handlers  i.e event trigger in child component but handles in parent component.

//Enable upward communication from child to parent.
//It is used commonly with event handling when we define the handler function not in the same i.e child component, we define it in the parent component and We send this handler function to CHild Comp props.This again states that a UI component is completly blind/dumb it doesnot have any main logic to handler, whatever parent component tell, this child comp will render on UI. 
// 
// In other word, Parent component also pass behaviour to the child component along with passing props data, we consider in React, each UI component only responsible for displaying UI only.


//Parent defines a function and child invokes it.

# To send state data from child to parent Component, It can be acheived using two ways -

    // a) Define a dummy funtion in parent component and pass that as props to here to pull this 'name' their on function call.
        getName(name)

    // b) Define JSX element behaviour/Handler Function along with state management in the parent component. so that data will be remain their, without making any extra dummy function for it. 



# Summary :-
 2. Enables upward communication from child to parent.
 3. Commonly used for event handling functions.
 4. Parent defines a function, child invokes it.
 5. Enhances component interactivity. 
 6. Example: 
    <button onClick={handleClick} />



    
  
  */



    const [name, setName] = useState("")

    const handleInputChange = (e)=> {

      setName(e.target.value)

    }

    // console.log(name)

    const handleGetName = ()=>{

      console.log(name) //But I want to get this final Input data inot parent Component, which can be acheived using two ways -

    // a) Define a dummy funtion in parent component and pass that as props to here to pull this 'name' their on function call.
        getName(name)

    // b) Define this behaviour/Handler Function in the parent component to pull, without making any extra dummy function for it.
    }
    
  
  return ( <>

    <h1>My Name is : {userName}</h1>

    {/* Task : Whenever any user Enter their name, we want to acces in its parent component only i.e App.jsx */}


    {/* Ways : 1 */}
    <div>

      Name1:
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleGetName}>Get Input Name</button>

    </div>


  
  
  </>
 
  )
}
