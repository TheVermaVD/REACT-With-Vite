

/*

#Controlled Componenent In React : -


In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with usState() Hook, known as controlled components.

HTML <form> element works a bit differently from React Virtual DOM <form> element coz here in react <form> all form elements like <input>, <textarea>, and <select> etc. keeps state based on input value change.


Difference between HTML form vs React Controlled Form : HTML form all input value change manage by browser DOM i.e REAL DOM but In React we need to mange all input value change via state management so it will use Virtual DOM of the React.

// Problem with Html form - 

<input type="text" id="fname" name="fname" value="John"/><br/>


Error We get on console, in case of html <form> handling :-

 You provided a `value` prop to a form field without an `value` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `value` or `readOnly`.

// Solution-

 Either(Static fixed input value) Do - 

 <input type="text" id="fname" name="fname" defaultValue="John"/><br/>


 OR,(Changable value and controlled by react state-management, known as controlled component in react!)

  <input type="text" id="fname" name="fname" value={userName}  /><br/>


-----------------------------------------------------------------
# UnControlled Componenent In React : -  It can sometimes be tedious to use controlled components, because In Controlled component, you need to write an event handler for every way your data can change and pipe all of the input state through a React component using useState() Hook.

So, It is alternative to controlled component form handling. Here In un  if we want to avoid use state for input field input change we can use uncontrolled form component where you can use a 'ref' to get form values from the Browser DOM, to avoid using state for each input fiend change. Coz In Uncontrolled component Input change handle by Browser DOM whereas in Controlled COmponent, input change handle by React Component its(via useState) in Virtual DOM.

Thus, In un-controlled component form handling, we directly manipulate browse DOM for field input changed. 

Note : To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the Browser DOM.

In React uncontrolled components, instead of managing the form data through React useState, you let the Browser DOM handle the form elements data change directly using real dom manipulation, which can be done using React useRef() Hook to make React form uncontrolled Components.

Note :  In most cases, we recommend using 'controlled components' to implement forms. In a controlled component, form data is handled by a React component via state management with useState() or other state management tool.

Summary : a) Controlled Components controlled by React Virtual DOM, whereas Uncontrolled component controlled by Browser Real DOM.

b) Controlled Component can be achived by using React useState() Hook and Event handler together whereas Uncontroled Component can be achieved using React useRef() which hook any JSX element with adding 'ref' attribute to that element and then we can interact with JSX element dirctly means REAL DOM interaction like vanilla JS.

*/

import React, { useRef, useState } from 'react'

export default function FormHandling() {

    const [userName, setUserName] = useState("Prakash")

    // Handing all input change at a time, by storing all into a object and pass singly as initial state to useState -

    const [userInputs, setUserInputs] = useState({

      fname : "",
      lname : "",
      age : "",
      city : ""

    })


    function inputHandler(e){

        // console.log(e.target.value)
        setUserName(e.target.value)
        
    }

    function handleAllInputs(e){

      const name = e.target.name
      // console.log(name)
      const value = e.target.value
      // console.log(value)

      // setUserInputs({...userInputs, [name] : value})
        //Note : We use array like notation to access and object value in form of an string as result which we want string property name.

    //With updater function style-
    setUserInputs(prevInp=> ({...prevInp, [name]: value})) 

    }

    const handleSubmit = (e)=>{

      e.preventDefault();

      console.log(userInputs)
    }



    // Uncontrolled Comp-
    const refInputObj = useRef()
    // console.log(refInputObj) //It gives a Hooked reference object to that element with havig 'current' property to access that element.
     // console.log(refInputObj.current) //current JSX element we get.

    const handleName = ()=>{

      console.log(refInputObj.current.value)

    }





  return ( 
  
  <>


    <h2>HTML Forms</h2>

      <label > Name:</label><br/>
      {/* <input type="text" id="fname" name="fname" defaultValue="John"/><br/> */}
      <input type="text" id="fname" name="fname" value={userName} onChange ={inputHandler} /><br/>

    

    {/* <pre> */}

    <form action="/action_page.php" onSubmit={handleSubmit}>
      First Name :
      <input type="text" name="fname" value={userInputs.fname} onChange={handleAllInputs} />
      Last Name :
      <input type="text" name="lname" value={userInputs.lname} onChange={handleAllInputs} />
      Age : 
      <input type="text" name="age" value={userInputs.age} onChange={handleAllInputs} />
      City : 
      <input type="text" name="city" value={userInputs.city} onChange={handleAllInputs} />

     
     {/* <input type="submit" value="Submit"/> */}
     <button>Submit</button>

    </form>
    
    <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

    {/* </pre> */}


    {/* Uncontrolled COmponent */}
    Name_Uncontrolled : 
    <input type="text" ref={refInputObj} /><br/>
    <button onClick={handleName}>Get Name</button>


  
  </>

  )
}
