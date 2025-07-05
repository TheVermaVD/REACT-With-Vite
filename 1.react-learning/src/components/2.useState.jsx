import { useState } from 'react';



    // Stateless(Problem In FunctionComp) : whenever we are inside any Function component in react, then our component is stateless coz we can not store data(that can change on JSX over time) soley with any function component, whereas Class Component allow us to store state data inside Component(which can change over time on JSX), that's why Class Components are Statefull. 

    // State : state repesents some data that can change over time. It means, suppose a data It need to be changed over time and it must to be reflect on JSX/UI, then we need to store under state management functionality i.e using useState() Hook .

    //State is local and private to the own component only means state data can be accessible inside own component only.

    //NOte: useState() Hook design in a way that any state changes means store state data any changes, can cause to re-render the component again, to repain the UI with new changed data.

    //So, In Function component, we use useState() hook of react to store our any state.

    //What is Hook in react : It is a special type of component premade by react to solve our common problems like storing state etc. We can make our custom hook as well for our common problem solution. In React, It is tradition hook can be identify/recognised with its name starts with 'use' keyword starting.

    //hooks can be used only inside the react functional components.
    //React Functions that starts with word 'use' are called as hooks.

  /*

#useState() Hook : It 'react' package hook, and can be used only inside the functional component. How to declare/use -

whenevr we declare useState(), it returns an array having two Elements contains, 1st element : current value of our state ; 2nd element : a method or function by which we can edit i.e update i.e change or state value over time. 


// useState(), How It works according to some various cases -

  */


function LearnState() {

  const [count, setCount] = useState(0);

  // console.log(count);

  // setCount(0);
  // Imp: Note : If we call set Function outside the function scope i.e directly in Component Scope then It start doing re-rendering of the Component again-again and went to an Error due to Too many re-renders and reach to an infinite loop. To avoid this alway call set Function inside the another function i.e under either event handler function or any function scope to work properly the set Function work. In Other word, we can say it pass set Function as callback function to another function.

  // Note : Set function of useState() designed to call inside function scope only not outside of function scope. Otherwise - see above note!




  function handleCounter() {

    //1.) previousState === currentState ---> Found Change ---> setCount() function get executed --> and two works this function a) update the change value to current state value to 'count' and once count get updated then automatically component get re-rendered as prevois state value get changed.
    //state change hoga(previous se updated) tab hi value new assign hoga state me aur re-render hoga again as state change hua hai.

    // const newState= count + 1;
    // setCount(newState);
    // setCount(newState);
    // setCount(newState);

    // console.log(count);


    //2.)if we use set function multiple times, with same state value -
     
    // console.log(count); // 0
    // setCount(count+1); //0+1
    // setCount(count+1); //0+1
    // setCount(count+1); //0+1

    // console.log(count); // 0

    // Note: set Functions executing under handler function belongs to same snapshots or same batching, so the value of state will be same.


   //3. The last updated state value from same batch or snapshot will get updated to the current state only -

  //  console.log(count); // 0
  //  setCount(count+1); //0+1 //get ignored
  //  setCount(count+2); //0+2 //get ignored
  //  setCount(count+4); //0+4=4 //only this value i.e 4 will be updated to the new state and other previous value get ignored.

  //  console.log(count); // 0
   

  //4. with setTimeout() - will delay the multiple click to delay 2 seconds to avoid multiple clicks by user.


  //  console.log(count)

  //   setTimeout(()=>{

  //     setCount((count)=> count+1); //will delay the multiple click to delay 2 seconds to avoid multiple clicks by user.

  //   }, 2000);

  //   console.log(count);

 //5.) You can pass the next state directly, or a function that calculates it from the previous state, i.e known as updater function which holds the same batch or same snapshot prevoius state and carry forword to next state to update it to final state on the UI. A GOod practice to avoid looking error like if we wrote three times we get update on UI, so developer prefer using updater function as next state update than directly passing next state. 

//  Note : If you pass a function i.e arrow function as nextState rather direct updating nextState, it will be treated as an updater function. It must be pure, should take the pending state as its only argument, and should return the next state. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state. 

// Note : Passing function as nextState is good way to get always the updated current state value in case of asynchornous updates of multiple states handling by same component.
 
    console.log(count); // 0
    setCount(count=> count+1); //0+1=1 //arrow function we passed to hold
    setCount(count=> count+1); //1+1=2
    setCount(count=> count+1); //2+1=3

    console.log(count); // 0 
 
  }

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={handleCounter}>Increase</button>
    </>
  );
}

export default LearnState;