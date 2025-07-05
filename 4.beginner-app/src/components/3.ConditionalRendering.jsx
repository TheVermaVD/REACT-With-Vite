import React, { useState } from 'react'

export default function ConditionalRendering() {

    // Conditional Rendering : In React, We can do condition rendering means based on some condition render on UI, via mainly three ways -

    // a) if-else : Here, we need to return multiple JSX code in return statement which is not preferable to do so.

    // b) Ternary Operator(?:) : TO avoid if-else we can use ternary opertor to emebbed JSX code directly as JS expression based on a condition.

    // c) Short-circuit operator or Logical Operator(&&) : When we have to display only if-condtion i.e only one UI on page not any second UI, if its get TRue then only display else display 'null' value on UI. which is good of UI.

    //  Note : If it TRue then only display and if it is False then display null value on UI. 

    const [isAgeValid, setIsAgeValid] = useState(false)

    // # State In React : state in programming language, known as any data that is not fixed it might changes later or as per user action. The state will change to different state like, suppose a chatBot getting pop-up on screen right corner so on user click on cross  button it gets hidden that's also a state change.



    

    // if(isAgeValid){
    //     return <h2>Eligible for Vote!!</h2>
    // }else{
    //     return <h2>Not Eligible for Vote!!</h2>
    // }

    // return <>

    //     {isAgeValid ? <h2>Eligible for Vote!!</h2> : <h2>Not Eligible for Vote!!</h2> }
    
    // </>

    return <>

    {isAgeValid && <h2>Eligible for Vote!!</h2>}
    {/* Note : If it TRue then only display and if it is False then display null value on UI. */}
    
    
    </>

}
