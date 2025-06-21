

/*

#useEffect() Hook : Whene there is any side effect tasks (like timer function, setTimeOut(), API call, Directly i.e Manually DOM Update, Data Fetch,) are going to perform in component, then we use useEffect() hook to control over side-effects task execution on each render based on any state or props data get changed.

// Note : Mostly we use useEffect() Hook during API call, in order to fetch API data once not every time on Component render, can fetch again if some data if affecting it.


Whenever we want to take controll of some logic that not gonna re-render on UI on any state or props value then, then we can use useEffect() to take command over it and our requirement will fullfill.

In React, When using Class Based Component, then we have to use life cycle methods of class component like componentDidMount(), componentDidUpdate(), and componentWillUnmount() combined., so can think of useEffect Hook to perform all these class lifecyle methods.

Thus, useEffect() Hook in Function COmponent === Lifecyle methods in CLass Component.

Syntax : useEffect(<side_effect_function>(Required), [dependencies](Optional));

useEffect() Hook or function accepts two argument , first is mandatory and second is optional as dependenies. and useEffect() function returns 'undefined'.

1st Argument : setTimeOut(), APi Call, DOM Update etc.
2nd Argument : Add Dependencies value in array; In case of Optional i.e ommited 2nd argument then on each Component render based on state or props change, the logic will executed each time inside the useEffect, i.e It works
 like normal like there we didn't addded added any useEffect() hook. 



*/

import { useContext, useEffect, useState } from "react"
import { ContextElement } from "../store/userContext";


function LearnUseEffect({rwdyName}){

    const contextValue= useContext(ContextElement)

    // console.log("Context value", contextValue);

    // ------------------------------------------

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(2);
    const [name, setName] = useState("Prakash");

    const [number, setNumber] = useState(0);

   

    const handleCounter = ()=>{

        setCount((currState)=> currState+1);
    }

    //Case0 : Ommit 2nd Parameter : Component will render all times based on state, props get change -

    // useEffect(()=>{

    //     console.log("Executed"); //renders for all times i.e page laod for very first time or any state or props change in entire component.

    // })

    //Case1 : Just Add Empty Array [] : Component will render only once i.e on the page load for very first time.

    // useEffect(()=>{
    //     console.log("Executed"); //render for only one condition, i.e for page load for very first time.
    // }, []);



    //Case2: Just add any factors as depndencies to array i.e [state1, state2, props1,..]  :  To render component based on added depencies changes, except component will render for very first time on page load.
    
     useEffect(()=>{
        console.log("Executed"); //render for two conditions only, 1st for page load and second for depncies value changes only.
    }, [count2]);

    // [name] : render only for page loads and 'name' state changes only.
    // [count2] : render only for page loads and 'count2' state changes only.


    // Example of useEffect() Hook - (Another example of useEffect is in DataFetch.jsx File )

    // useEffect(()=>{
        
    //     setNumber(number+1); //start rendering set Function many times and can see on UI and at the end it will exceed the too mnay renders.(Note: if we called set function outside of useEffect method then too many renders happended and page got crashed!)

    // })

    // useEffect(()=>{

    //     setNumber(number+1); //render once immediatley on page load.

    // }, [])

    useEffect(()=>{

        setTimeout(()=>{
            setNumber(number+1); //render once after 2 seconds of page load.

        }, 2000)
        
    }, [])

    return<>
    
     <h1>Count : {name}</h1>
     <h1>Count : {count}</h1>
     <h1>Count : {count1}</h1>
     <h1>Count : {count2}</h1>
    <button onClick={()=> setName((currState)=> currState + " Verma")}>Update Name</button>
    <button onClick={handleCounter}>Increase</button>
    <button onClick={()=> setCount1(count1+1)}>Increase1</button>
    <button onClick={()=> setCount2(count2+1)}>Increase2</button>

    {/* //TImer */}

    <h1>I've rendered {number} times!</h1>;

    <h4>This is at Use Effect Component : {contextValue.rwdyName}</h4>
    
    
    
    </>
}

export default LearnUseEffect;

/* Note : useEffect Cleanup Task : -

Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.

Example : 

        function Timer() {
        const [count, setCount] = useState(0);

            useEffect(() => {
                let timer = setTimeout(() => {
                setCount((count) => count + 1);
            }, 1000);

            return () => clearTimeout(timer)
            }, []);

        return <h1>I've rendered {count} times!</h1>;
        }

 */