import React, { useMemo, useState } from 'react'

/*


#useMemo() : It is also use for APPlication performance optimization by caching a result of calculation when a function returns.

We use useMemo() whenever we have to save any heavy calculation value as cashes,to avoid again calculation that improves our app loading time.

Note : memoization is works as caching a value so that it does not need to be recalculated.

Memoization : useMemo() caches the result of expensive calculations to enhance performance.

Re-computation : Re-compute i.e Recalculate when momoized value when sepecific depndencies changes.

Optimization : Helps unnecessarly recalcualtion and improving component rendering efficiency.

Dependency Array : USes an array of dependencies to determine when to recompute teh cached value.

Best Use : Ideal for intensive computations or operations that should not run on every render. 



--------------------------------------------------------------------------

Summary : -

useEffect() : It executes a function when it depencies changes.
memo() : It stops re-rendering any CHild Component from Parent Component untill props or state changes.
useCallback() : It returns a method with sustaining the reference for not re-rendering the Child Component from Parent Component untill 'method' defination changes i.e related props or state then changes.
useMemo() : It returns a memoized value(after first render) of any function return calculation which is heavy in calculation i.e expensive untill calulation paramter change not change it doenot memoized again.   

Comparison : While useCallback memoizes functions, whereas useMemo memoizes values or return results of a function.



*/

export default function LearnUseMemo() {

        console.log("Main Component is getting rednered..!!")
        const [add, setAdd]= useState(0);



//Examaple: 1) Suppose There is an expensive function means tht takes some time in calucation -    
    const addition = useMemo(()=>{
    
        let i=0;

        console.time("Time Taken")
        for(i=0; i<1000000000; i++){
    
            ///some calculation
    
        }

        console.timeEnd("Time Taken");

        return 90;

    },[]) //Now it will not run or call again again on component render and the return value will be cashed after first renderng of the component.



//Examaple: 2) Suppose a function or array that returns an waiting time calculation -

const arr = [4,1,9,4,3,0];  //suppose comming from props data so 'dependent' on arr variable.
const sortedArr =useMemo(()=>{

    return arr.sort(); //Get calculated once and cached the result data untill the dependent 'arr' variable doesnot change. //By this this calculation or runnung not perform again and again by this component re-rendering.

},[arr]) 

// console.log(arr.sort()); //without cashing value
// console.log(sortedArr); //with cashing value


  return (
   <>
      {/* useMemo use - */}
      <h3>Addition is called : {addition}</h3>

      <div>Number : {add}</div>
      <button onClick={()=>setAdd(prev=> prev+1)}>Add+1</button>
   
   </>
  )
}
