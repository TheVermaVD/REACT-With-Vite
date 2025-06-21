 /*
#customHook : It is mostly use for saving our time example if there are some common logic that we are using again again in major components, then we can make that common look into our custom hook which can depenent upon inputs like we define function in js for solving some repeated task just by passing multiple arguments while invokation those were custome function or user-defined functions in js.

Re-usabale Logic : Custom hooks allow you to extract and reuse  component logic  across multiple  components.

Sharing State(MOst Important) : If there are some logic that needs an state or any Hook and that logic is common so we need to make it as custom Hook coz If there is any normal logic we can extract in normal method i.e function but if that logic need any state then we can extract in custom Hook.

In short, It enables sharing of statefull logc without changing component hierachy.

Combining Hooks : Custom Hooks can combine multiple builtin hooks like use useState, useEffect and others. i.e We can use React other hooks inside the our defined custom hook.

Isolation : Helps in isolating complex logic, making components cleaner and easier to maintain.

Custom Hook Return Values : Can return any value like arrays, objects, or any other data type based on requirements.


Naming Convention : Typically starts with 'use' (e.g: useWindowSize, useFetch, useToggle, useCounter etc)


Any HookRule : a) Any Hook can be called inside React compoent only cant use in vanilla JS., and also any Hook can be use inside another HOOk that is exception.

b) Hook cannot get call inside any if-else, for-loop i.e canot be contionally. 

##Notee : Defining custom Hook is like function where it must retuns some value (in form of an array or object or single etc) which we call/invoke while using any custom Hook at any random component.


 */

import { useEffect, useState } from "react";

// Example1 : We creating a custom Hook of counter which takes an initial counter value(default initial value=0) and provided i.e returns an arry with 'current counter value' , 'Increment method' and 'Decrement method' so that we can invoke it and can use current value and uses method across button for increasing counter and decreaing counter -

export default function useCounter(initialValue=0) {

    const [count, setCount] = useState(initialValue);

    const handleIncrement = ()=>{
        setCount(curr=> curr+1);
    }
    const handleDecrement = ()=>{
        setCount(curr=> curr+1);
    }

  return [count, handleIncrement, handleDecrement];
}


//Example2 : We create our second custom hook name 'useFetch' to fetch data from API server call, as we know that we have to perform same task again again with useEffect() with useState(for storing fetched data) while calling any API call so lets make an custom hook name useFetch that will only take 'initail value' as url of the fetch Endpoint and returns the returned array containing data.

function useFetch(URL){

    const [data, setData] = useState([]);

    useEffect(()=>{

        fetch(URL)
        .then(res=> res.json())
        .then(res=> setData(res))
        .catch(err=> console.log(err));

    },[URL])

    return [data];
}

export {useFetch};
