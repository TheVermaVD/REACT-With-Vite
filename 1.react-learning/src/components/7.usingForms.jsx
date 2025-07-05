/*

React Form : HTML <form> element works a bit differently from React DOM <form> element coz here <form> element keeps state based on input value change.

Difference between HTML form vs React Controlled Form : HTML form all input value change manage by browser DOM i.e REAL DOM but In React we need to mange all input value change via state management so it will use Virtual DOM of the React.

Controlled Component : When React form controlled the change input data via state managemenet rather browser DOM manage. We use useState().

We can control the values of more than one input field by adding a name attribute to Input element. To access the fields in the event handler use the event.target.name and event.target.value syntax.

Each Input value stored in state in controlled component in react.

Two Way Binding : when we store i.e send the data in state and and recieve the data from setState and vice-versa in react controlled component, so the communication of data happen from both way, we call it as two way winding of data.

Utilizing onSubmit event handler for form submission to server and can use e.preventDefault() method to stop submitted form data to server for log.

Form Validation : Implement custom i.e manual form validation or use third party library for form validation at client side before form data can be submitted to server side.
-----------------------------------------------------------

UnControlled Component : In un-controlled component form handling, we directly manipulate browse DOM for field input changed rather storing uisng state management.


It is alternative to controlled component form handling as in controlled component form, we need to write an event handler for every changes of data and this can be manage using usestate Hook. But if we want to avoid use state for input field input change we can use uncontrolled form component where you can use a 'ref' to get form values from the Browser DOM.

In React uncontrolled components, instead of managing the form data through React state, you let the Browser DOM handle the form elements data and its changes and It can be done using useRef() Hook in react to make React form uncontrolled Components.

Note :  In most cases, we recommend using 'controlled components' to implement forms. In a controlled component, form data is handled by a React component via state management with useState() or other state management tool.

Summary : Controlled Component controlled by VIRtual DOM of React while handing form input values whereas Uncontrolled component controled by REAL Dom of the browser which can be achived in react using useRef() hook and react 'ref' attribute for adding reference obect to the respective form elements.







*/

import React, { useRef, useState } from 'react'

export default function LearnForms() {

    const [name, setName] = useState("")
    const [pwd, setPwd] = useState("")
    const [phone, setPhone] = useState("")

    const handleChange = (e) =>{
        console.log(e.target);

        if(e.target.name==="name"){
            setName(e.target.value.toUpperCase() )

        }else if(e.target.name==="pwd"){
            setPwd(e.target.value)
        }else{
            setPhone(e.target.value)
        }

    }

    const nameRefObj = useRef();

    // console.log(nameRefObj.current);//initial value of 'current' property of nameRefObject.
    

    const handleSubmit = (e)=> {
        console.log(e);
        // console.log(nameRefObj.current);
        e.preventDefault();

        console.log(nameRefObj.current.value)
    
    }

  return ( <>
    <form action="">
        Enter Name : <input type="text" value={name} name='name' onChange={handleChange} />
        Enter Password : <input type="password" value={pwd} name="pwd" onChange={handleChange}  />
        Enter Phone : <input type="number" value={phone} name="number" onChange={handleChange} />
    </form>

    <form action="" onSubmit={handleSubmit}  >

        Enter Name : <input type="text" ref={nameRefObj} />
        <button >Submit</button>

    </form >

</>
  )
}
