
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

// #useState() : THis hook or external function returns an array with exactly two Items that can be seen via 'array destructing' then first item and second item we get as -

// a) Initial_StateVariable : This variable will store initially state value. We can put null i.e no data stored Initially. We can store Initial state as JS any datatpes like Primitive values(means only one value we can store like number,string, null, undefined, boolean, symbol values ) or Non-Primitive Datatype(means a variable that can store more than one values in it known a non-primitive datatypes like array, object. )

//  Remember, This first Item i.e first Variable used to hold the initial state only for first render and In next render It values Internally Get updated by setterFunction and we can see update state Data. React useState() Hook internally uses to update state_varible each time with help of setter function. 

// Note : Changing Primitive datatypes over State Change is Easy But Changing Non-Primitive datattypes over state changes little tricky. We will see in example how to change Object or Array data over time means more than one data how we can change at once Event trigger or State Change.

// b) Updating_StateVariable/StateVariable_Method/Setter Function : It is use to update Initial value and each time when this function get invoked with providing new value to it, then it compares with previos state_variable and if found change then It update on JSX and change found is nothing, it just not update JSX part and also COmponent will not re-rendering.

// We can update State via two ways into setter Function -
// a) Direct State Update : Here, Previous state data do not remember by useState after renders each time.

// b) Updater Function Style : Using Updater Function Style, It remembers or holds just previous state coz React will put all your updater function in a queue and wait for it to calculate the final updated state and then it renders on UI or JSX once.

//  We pass a pure function as next state to Setter Function which calculates state each time from the previous state. It solves state-stale issues. Ex:

// setCount( (prev) => prev + 1);




//Prefer to use updater function style as next state update than directly passing next state. coz using updater function style as nextState is good way to get always the updated current state value in case of asynchornous updates of multiple states handling by same component.


// Note : It is very important to carefully use setMethod for stateVariable CHnage coz this method call is reponsible for Component render again whnever this will called. The reason dont call this method anywhere i.e specially outside of hnadler function or Funcion call, iF someone call setterFunction outside of handlerFunction, then React this component will tend to Infinite Loop coz of Too many re-renders of this component. But, React limits the number of renders to prevent an infinite loop.

// Note : React useState() Hook design in a way that if any state changes means data changes over time, can cause to useStateMethod() get triggered and It just re-render the function component, and then updates state varibale get updated on JSX that get reflects to UI. 


// # Some Rules of Using Using any Hooks In React : - 

// i) Must be used inside Function Component only, not outsude of Funcion componenet, otherwise Gives an error.

// ii) ANd, It must to use at Top Level of Component.

// iii) Hooks can not be conditional means We can write it inside if-else block.

// iv) Any Hooks can be reconised with 'use' keyword.


/*  # Difference between Props vs State : - 

a) Props are passed from outside of Component, state is maintained inside the component.

b) Props are read-only and state are modifiable.



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

      // 1. Direct Update STate variable -

      // count = count + 1

      // setCount(count+1)  // Updating  'count' stateVariable of Updater function of useState() Hook.

      // setCount(count+1)
      // setCount(count+1)
      // setCount(count+1)  // All these belong to same snapshot during Component Rendering, SO Component render once with same data as It does not hold previous state data.

      // console.log(count)



      // 2. Update State Variable with "updater function style": Using it, It holds or remembers the just previous state and can use for next update correctly. During this, all the state updation go to a queue of a each snapshot to get final update correctly.

      setCount(count=> count+1)  // Updating  'count' stateVariable of Updater function of useState() Hook.

      setCount(count=> count+1)
      setCount(count=> count+1)
      setCount(count=> count+1)  //Now, All these go to a queue of state updates, and holds/remembers each time previous state in queue of each snapshot and update the final state. So, Here, Component renders once with accumulative(four times) final state update i.e with holding each time previos state data untill reach to final state.


      // 3. Direct Update using setTimeout() -

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
