import React, { useMemo, useState } from 'react'

function UseMemoHookLearning() {

    console.log("UseMemoHookLearning Component get rendered...")

    /*
    
# Memoization concept in JS : It was used to imporve app performace by caching same input data in browser and redcuing the load time for same input untill input doesnot change it won't invoke again.


function add(a, b){

    return a+b

}

add(5,5)  //Everytime function called
add(5,5)  //Everytime function called
add(5,5)  //Everytime function called
add(5,5)  //Everytime function called

Now, When Memoization implemented then, for same input it stores cache data into browser and when called with same input it wont invoke the function instead it get the result from the cache data.By doing this our aplication loading speed will increase and performce of app get better.

// once we implemenate Memoization for this function, and if we called -

add(5,5)  //First_time function called
add(5,5)  // Value/result returend from cache memory
add(5,5)  // Value/result returend from cache memory
add(5,5)  // Value/result returend from cache memory



# Similary, IN React, useMemo() and useCallaback() hooks to memoized a value and a function.Thus,

useMemo() use to cache a value and return a memoized value.
useCallback() use to cache a function/method and return a memoized function/method.

Hence, these two use to improve the React-APP performance with memoizing respective function or a value.


## useMemo() : It is a Hook in react which used to memoized a value when we return from the passed function, and it can only calculate again when any state or props value dependent upton the function and are getting changed, so we need that time new updated memoized value.

Here, memoized value calcultes once means heavy function run once on component load and from next time, it doesnot execute the function, instead it get the value from first time memmoized value.


Note : Think of memoization as caching a value so that it does not need to be recalculated. This can improve performance.
    
    
   
    
    
    */

    


    const [add, setAdd] = useState(0)
    const [sub, setSub] = useState(20)


    const heavyFunctionSumUpTo = (n)=>{

        
        console.log("Heavy Function SumUpTo Executed...")

        let  sum = 0
        for(let i = 1; i<=  n; i++){

             sum += i 
        }

        return sum;      

    }

    

    // const sum1 = heavyFunctionSumUpTo(100)
    // const sum2 = heavyFunctionSumUpTo(1000)

    // Now, using useMemo( ()=>{}, []) --> accepts a function and a depencecies array like useEffect() whtever we pass if it get change then the first parameter i.e function will run again only.

    const sum1 = useMemo(()=>{

        return heavyFunctionSumUpTo(100)

    }, [])  // [] --> Function inside, run once on component load,
            // [props, state] --> Function inside, run once and next time when passed props or state get changed.

    const sum2 = useMemo(()=>{

        return heavyFunctionSumUpTo(1000)
        
    }, [])

    // Here, We can use one useMemo() to memoized two value, which can be done by returning value in array and also desctruting array with memoized values.
    /*
    
    const [sum1, sum2] = useMemo(()=>{

        return [ heavyFunctionSumUpTo(100), heavyFunctionSumUpTo(1000) ]
        
    }, [])


    ## Note :When to use useMemo() Hook -

    i) When our final calculation value taking much time in calculation getting the result value by taking a bit time, reference like taking more than 1ms then user memoized that function value.

    ii) When Heavy function taking longer time to compute the result and returing the value.Then we can use useMemo() by which for first time it will take that time but from next time it will not execute again i.e will not run heavy calculation function.


    iii) Dont memoized all function value, user can check -
    
    console.time('Test)

        heavyFunctionSumUpTo(1000) //To check how much time taking to execute.

    console.timeLog('Test')
     
    
    */

    






  return ( <>

    
    <h4>Sum of First Hundred Number is : {sum1}</h4>
    <h4>Sum of First Thousand Number is : {sum2}</h4>

  <button onClick={()=> setAdd(prev=> prev+1)}>Addition : {add}</button> <br />
  <button onClick={()=> setSub(prev=> prev-1)}>Substraction :{sub}</button>
  

  
  </>
   
  )
}

export default UseMemoHookLearning