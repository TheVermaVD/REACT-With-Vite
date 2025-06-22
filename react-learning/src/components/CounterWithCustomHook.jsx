import React from "react";
import useCounter from "./18.CustomHook";

export default function LearnCounterWithCustomHook() {
  const [count, incrementHandle, decrementHandle] = useCounter(11);
  //Can use custom hook multiple times with variable name different -
  const [count1, incrementHandle1, decrementHandle1] = useCounter();

  return (
    <>
      <div>CounterWithCustomHook</div>

      <p>Count : {count}</p>
      <button onClick={incrementHandle}>Increase</button>
      <button onClick={decrementHandle}>Decrease</button>

      <p>Count : {count1}</p>
      <button onClick={incrementHandle1}>Increase</button>
      <button onClick={decrementHandle1}>Decrease</button>
    </>
  );
}
