import React from 'react'

export default function Item({a,b,c, name, children}) {

    //We receive an object we can name that object as any we named as props here which hold all values passed while invoking i.e resuing this component.

    // console.log(props)


    // console.log(b, typeof b)
    // console.log(c, typeof c)
    // b=5

    //Here, pAssed the default values;

    {/* //1. #children prop work :  whenever we need to use some text or data as the inner Data (like IN HTML we call it as InnerHTML Text) to the Component, e.g  - */}

    {/* <MyButton3 message="Heyy 1"> Play Button  </MyButton3> */}

  // Here, Text 'Play Button' and 'Pause Button' is a Inner Text or nested Content for the MyButton React Component, To use this inner Text we pass it via 'children' prop.(Note: you must use 'children' keyword when passing the inner Text of React Component.) 

  // When we pass component inside component, then that inner passed component known as children props with respective to upper component.

  //When child content is blind i.e dynamic then we use children props. e.g: Inside a container the content may change with time. 

  
  console.log(children, typeof children)

  return (
 <>
     <div>The Sum of Passed Props Data Is : {a+b+c}</div>
    <p>The Name of the Owner is : {name} </p>
    {children}

    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>

</>
  )
}
