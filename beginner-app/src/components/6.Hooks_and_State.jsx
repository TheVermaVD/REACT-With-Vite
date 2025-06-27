
import { useState } from "react"


// Note : TO Update Any Data over JSX over time i.e In next render or in
//  future render then We need to use state to store our local variable data it state_data.

// Flow :-    Local Variable  ---convert into--> State Varible(using useState) ---> Updation on JSX get Ready.


// Flow of Event And State : -

// Event Trigger --> State Change(useState work)  --> React render() works ---> UI Changes.



// State(Stithi) : We known that state is a 'sthithi' where it can be change with time i.e from previous to new state as per Event Triggerig or browser action or user action. In React Function Component are Stateless and Class Components are Statefull. Thus, we can change value/data from state in react via two ways - a) using class component : By using setState() Function In Class Component with CLass Life Cycle Methods. b) using Function Component : Using React Hooks. i.e use State().

// Problem With React JSX, while updating data over time : When ever we working with any state change i.e with Event Triggering State of the JSX element get changed on UI, but whenever while changing state if it associated with any data i.e from Initial state(contain data) need to pass same data or modify data in next state change of the UI. This functinality React Function component can not do it by own. Such as -

// Ex : a) On a Event Click, get the sum/return Data from function to UI i.e (need to update on JSX code.)
// 
//b) On click button LIKE get changed to heart or removed heart from the component one UI part.

// React Hooks : Then React Hook came into the picture, which/hook is kind of an external functions store some functionality that we need into our React Component, which is not available in Function COmponnet, then we just HOOk i.e use into our Function Component. We will see one Hook of React i.e use State, which will help in updating JSX Part(state updation) i.e UI will change as per JSX data update, In other way, we can say that Re-rendering component again.


// Note :  We can not update local Variable On JSX directly. We need to make is as 'state variable' that is on state change, this state varable will also change on JSX i.e on UI. React usestate() Hook allows us make local variable as state variable and use it for state updation over JSX or UI.

// #useState() : useState is a React Hook that lets you add a state variable(rather local variable) to your component. This hook or external function returns an array with exactly two Items that can be seen via 'array destructing' then first item and second item we get as -

// a) Initial_StateVariable : This variable will store initially state value. We can put null i.e no data stored Initially. We can store Initial state as JS any datatpes like Primitive values(means only one value we can store like number,string, null, undefined, boolean, symbol values ) or Non-Primitive Datatype(means a variable that can store more than one values in it known a non-primitive datatypes like array, object. )

//  Remember, This first Item i.e first Variable used to hold the initial state only for first render and In next render It values Internally Get updated by setterFunction and we can see update state Data. React useState() Hook internally uses to update state_varible each time with help of setter function. 

// Note : Changing Primitive datatypes over State Change is Easy But Changing Non-Primitive datattypes over state changes little tricky. We will see in example how to change Object or Array data over time means more than one data how we can change at once Event trigger or State Change.

// b) Updating_StateVariable/StateVariable_Method/Setter Function : It is use to update Initial value and each time when this function get invoked with providing new value to it, then it compares with previos state_variable and if found change then It update on JSX and change found is none then, it wound not update JSX part and also COmponent will not re-rendering.

// We can update State via two ways into setter Function -

// a) Direct State Update : Here, we direcly upate the previous state varibale value with new without storing previous state which we lost when we update with new state value.Thus, Previous state data do not remember by useState here, after each JSX update or renders.


// When to use this : When just previous state value doesnot not rely on just next state value or new state value. Ex: form input changes, toggles, etc.

// b) Updater Function Style : Using Updater Function Style, It remembers or holds just previous state coz React will put all your updater function in a queue and wait for it to calculate the final updated state from the previous state and then finally it renders on UI/JSX update.

//Here, If we use 'updater function style to update state variable' then We just pass a pure function as next state to Setter Function which calculates state each time from the previous state. It solves state-stale issues. Ex:

// When to use this : When just previous state value has to rely on just next state value or new state value. Especially Important when wants to do multiple state in same batch/snapshot then holding state of just previous state is very important to get accurate result.  Ex: counter update, batched renders etc..

  /*  function Counter() {
          const [count, setCount] = useState(0);

          const handleClick = () => {
      
            // ❌ Direct Update : This might not increment twice due to batching and may result in only a single increment -
            setCount(count + 1);
            setCount(count + 1);

            // ✅ But, This will always increment each time means will correctly increment twice -
            // setCount(prev => prev + 1);
            // setCount(prev => prev + 1); 
          };

          return <button onClick={handleClick}>{count}</button>;

        }
    */




//Prefer to use updater function style as next state update than directly passing next state. coz using updater function style as nextState is good way to get always the updated current state value in case of asynchornous updates of multiple states handling by same component.


// Note : It is very important to carefully use 'setterFunction invokation' for stateVariable Chnage coz this method invokation is reponsible for Component render again and again whnever this setterFuction will called directlty without any top level function or any handler function. 
// 
// Thus, The reason We dont call setterFunction outside of handler function or Funcion call, and bymistake if someone call setterFunction outside of handlerFunction, then React this component will tend to Infinite Loop coz of Too many re-renders of this component. But, React limits the number of renders to prevent an infinite loop.

// Note : React useState() Hook design in a way that if any state variable changes, it would immediatly triggers the setterFunction and re-renders the function component, and then updates state varibale get updated on JSX that get reflects to UI. 


/*  # Some Rules of Using Using any Hooks In React : - 

  i) Must be used inside Function Component only, not outsude of Funcion componenet, otherwise Gives an error.
  
  ii) And, It must to use at Top Level of Component.

 iii) Hooks can not be conditional means We can write it inside if-else block.

  iv) Any Hooks can be reconised with 'use' keyword.


#Summary About useState Hook :-

1.  State represents data that changes over time.
2.	State is local and private to the component.
3.	State hanges cause the component to re-render.
4.	functional components, use the useState hook.
5.	Reat Functions that start with word use are called hooks
6.	Hooks should only be used inside components.
7.	Parent components can pass 'state' down to children via props.
8.	Lifting state up: share state between components by moving it to their
closest common ancestor. means suppose a s
 

*/


/*  # Difference between Props vs State : - 

a) Props are passed from outside of Component, state is maintained inside the component.

b) Props are read-only and state are modifiable.

State:
• Local and mutable data within a component.
• Initialized state within the component.
• State data Can change over time.
• State data change causes re-render when state updated/changed.
• Managed using useState() Hook in functional components.

Props:
• We do not initialize props, props always passed as attribute data into parent component and received by its child component.
• Passed Props are Read-only (immutable) within the receiving component.
• Allow parent-to-child component communication.
• props data change can also cause a re-render.

Note : changing either props or state component will re-render again; where component renders coz of state change it would be coz of own component some data change but when component re-render based on props then it happened coz of parent data changed.



// # Difference between StateFull vs Stateless Components : --

a) StateFull componnent have its own state variables in component itself(Clas Component) and Stateless Component dont have its own state varibales, only Props(Function COmponennt)

b) Statefull Comp : Complext to use as they have state changing logic over time.
   stateless Comp : Simple and easy as they dont have state change.

*/






export default function Hooks_and_State() {


    // let sum = null

    // function handlerSum(a,b){

    //   let check =  a + b

    //   sum = check

    //   console.log(sum)
    // }

    // console.log("Prakash")



    let [sum, setSum] = useState(null)

      function handlerSum(a,b){

          let check = a + b
          console.log(check)
          setSum(check)

      }

      // setSum()

      console.log("Prakash From Hooks_and_State Componnet")


      //Counter handler -

      const [count, setCount ] = useState(0)

      const z = 5
      // console.log(z)
      // z = 5 +1  // We can not update value to const assigned variable (let allows)
      // console.log(z)

    function handlerCount(){

      // 1. Direct Update State variable -

      // count = count + 1

      // setCount(count+1)  // Updating  'count' stateVariable of Updater function of useState() Hook.

      // setCount(count+1)
      // setCount(count+1)
      // setCount(count+1)  // All these belong to same snapshot during Component Rendering, SO Component render once with same data as It does not hold previous state data.

      // console.log(count)



      // 2. Update State Variable with "updater function style": Using it, It holds or remembers the just previous state and can use for next update correctly. During this, all the state updation go to a queue of a each snapshot/batch to get final update correctly.

      setCount(count=> count+1)  // Updating  'count' stateVariable of Updater function of useState() Hook.

      setCount(count=> count+1)
      setCount(count=> count+1)
      setCount(count=> count+1)  //Now, All these go to a queue of state updates, and holds/remembers each time previous state in queue of each snapshot and update the final state. So, Here, Component renders once with accumulative(four times) final state update i.e with holding each time previos state data untill reach to final state.


      // 3. Direct Update using setTimeout() function scope -

      // setTimeout(()=>{

      //       setCount(count+1)  // Updating  'count' stateVariable of Updater function of useState() Hook.

      //       setCount(count+1)
      //       setCount(count+1)
      //       setCount(count+1)  // All these belong to same snapshot during Component Rendering.
      
          

      //   }, 3000)

      // console.log(count)


      // 4. With Updater Function Style setTimeout() : -(this is prefer to use mostly)


      // setTimeout(()=>{

      //   setCount(count=> count+1)  // Updating  'count' stateVariable of Updater function of useState() Hook.

      //   setCount(count=> count+1)
      //   setCount(count=> count+1)
      //   setCount(count=> count+1)  //Now, All these go to a queue of state updates, and holds/remembers each time previous state in queue of each snapshot and update the final state.
      

      //   }, 3000)

      // console.log(count)

    }


    console.log(count)








return ( <>

  <h1 className="text-white">Get The Sum : {sum}</h1>
  <button  onClick={()=> handlerSum(4,5)}>Sum</button>

  <div className="counter">

    <h2>Count : {count}</h2>
    <button onClick={handlerCount}>Increase</button>

  </div>


 

 


  </>

  )
}
