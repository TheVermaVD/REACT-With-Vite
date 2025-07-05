/*


useCallback() and useMemo() both functionality are similar like useEffect() means it stopps component for unneccesary re-rendering, where useCallback() perform same by returning a a memoized function whereas useMemo() returns a memoized. In Hindi, useCallback and useMemo dono useEffect ke "chacha ke bhai-behen hai", so dono bhai-behen me kabhi similarties hai.

Both syntax is also same like useEffect() Hook means both first argument takes as a function and second argument as depencies for variable condition for again re-rendering.

#useCallback Hook() : It is optimization technique for React APP performance imporvement and making application fast and enhanced. 

const add = (a,b) => a+b;
const add2 = (a,b) => a+b;

console.log(add==add2); //false //as object have difference reference in moemory even tho both function value is same.


useCallback momoized i.e preserved any function reference across renders means In React component while re-rendering useCallback keeps the function reference same as we know tht function/object are reference datatype so with each re-rendering creates a new reference for each method which we do not want. SO we wrapp around useCallback() hook with added dependencies parameter as second argument.  

useCallback Hook returns a memoized callback function.

The useCallback Hook works only when dependencies added and allows re-rendering only if added dependencies variable changes.

#Uses : - a) If we pass any method to child component where we use this method and that method doesnot have any relation with Parent Component state then that child component will unnessarly re-renders So, we use useCallback hook to keep the same reference of the method on re-rendering.

useCallback used to keep consistent function reference for child components. Untill there is no change in the own function itself.

b)Also uses in, For useEffect, prevents infinite loops by maintaining function references. as useCallback provides same reference for any method accross re-rendering.


*/

import React, { useCallback, useMemo, useState } from 'react'
import MyButton from "./Button";

export default function LearnUseCallback() {

    console.log("Main Component is getting rednered..!!")
    const [add, setAdd]= useState(0);

// A method which does not have any relation with current state in the app -
const someLearning = useCallback(()=>{
    console.log("Some Learning...")
    
},[]);


//A method which does not have any relation with current state in the app (although we have used add state so we replace 'add+1' with updater function style where we dont have to use any 'state' name.)
const handleAdd = useCallback( ()=>{
    setAdd(prev=> prev+1);
}, [])


  return ( <>

    <div>Number : {add}</div>
    <button onClick={handleAdd}>At Parent : Add+1</button>


    {/* Child Component  */}
    {/* <MyButton someLearning={someLearning}/> */}
    <MyButton someLearning={someLearning} handleAdd={handleAdd}/>

 

    </>

    

  )
}
