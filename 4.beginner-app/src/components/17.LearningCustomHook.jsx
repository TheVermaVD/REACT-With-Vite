import React, { useEffect, useState } from "react";

export default function useCustomHook() {
  // It is just work like Javascript user-defined function here we need to pass some different argument to get different Output from customHook -

  // useEffect(), useRef(), useState()... are predefined hooks of React.
  // Similary, we can create our user-defined Hooks(for specific work) or custom HOOk to used inside any React Component to make our work easy.Like data fetching custom hook. NAming convetion of defning custom hook Component name is Typically start with "use" (e.g., useWindowSize, useFetch).

  //While creating custom hook we can use any React inbuilt like useState(), useEfffect() etc inside our custom Hook creation component.

  //While defining/creating a Custom Hook Can return any value (arrays, objects, single value or any other data type) based on requirements.

  //Why We mainly use Custom Hook in React : - To remove the duplicated logic in React component and extract that logic to custom HOOk.

  // ##Summary : Defining custom Hook is like function where it must retuns some value (in form of an array or object or single etc) which we call/invoke while using any custom Hook at any random component.

  //Taking a Counter Increment and Decrement Exmple to convert into our custom Hook --

  const [count, setCount] = useState(0);

  const hanldeIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const hanldeDecrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={hanldeIncrement}>Increment</button>
      <button onClick={hanldeDecrement}>Decrement</button>
    </>
  );
}

// Example1 : We will seperate the Increment and Decrement Counter LOgic into a custom Hook, so that we can call our custom hOok any time in any React component to use it -
// (Testing of this Custom HOOk, used in KGButton.jsx File, Check..!)

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const hanldeIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const hanldeDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return [count, hanldeIncrement, hanldeDecrement];
}

// Example2 : Here, we will seperate the Fetch Logic that we might have doing to HTTP get Request using fetch() method -
// (Testing of this Custom HOOk, used in APICALL_Quick.jsx File, Check..!)

function useFetch(yourURL) {
  
  const [data, setData] = useState( [] );

      useEffect(() => {

        fetch(yourURL)
          .then((res) => res.json())
          .then((result) => setData(result))
          .catch((err) => console.log("ERROR:", err));


      }, [yourURL]);


return data;

}


export {useCounter, useFetch};


