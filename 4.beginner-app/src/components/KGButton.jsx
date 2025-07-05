import React from 'react'
import { useCounter } from './17.LearningCustomHook'

export default function KGButton() {

  const [count, IncrementMethod, DecrementMethod] = useCounter(0)
  const [count2, IncrementMethod2, DecrementMethod2] = useCounter(10)

  return ( <>
    <button>Like this video</button>

    <div>
      <h1>Counter : {count}</h1>
      <button onClick={IncrementMethod}>Increment</button>
      <button onClick={DecrementMethod}>Decrement</button>
    </div>

    <div>
      <h1>Counter2 : {count2}</h1>
      <button onClick={IncrementMethod2}>Increment2</button>
      <button onClick={DecrementMethod2}>Decrement2</button>
    </div>

    </>
  )
}
