import React, { useState } from 'react'
import TestingChildComp from '../components/6.TestingChild_ReactMemo';
import MemoizedChildComp from '../components/6.TestingChild_ReactMemo';

function ReactMemoOptimization() {

  /*
  

  # PROBLEM : -

  # As Normal Case, If Thre is any CHild Component is being Called to Parent Component, then Once Parent component any props or state or any JSX related variable get changed Parenet Component will re-render again, as normal case.So React memo() HOC came to picture to solve this problem which improves APP performace.

  Note : Here  IN this component, We called Child Component '<TestingChildComp/>' and without passing any Props or data to it, still It is getting render when parent/this component is rendering. This can be solved via using React' memo() HOC -

  SOLUTION : 

  #React 'memo()' HOC i.e 'memo() Component' : It is react Higher Order COmponent(HOC) i.e memo() which takes another component as argument/input and return a new component with adding some addition features or modification in old component.

  # Work of memo() HOC : The work of memo() HOC is to take a react Heavy or Expensive component when we know the component is heavy then we pass it to memo() HOC component which will returned a memoized new Component.Here React memo() HOC designed in a way if any props or state passed from parent component to child and getting changed then it will only render and if not changed or not used any props while using then if we memoized component, then it wont render.

  Thus, memo() HOC helps to not re-render again and gain child COmponet unitll any props or state data changed.

  How to use memo() HOC : Best way to use it when we know our component holds some heavy component then before exporting we pass it to memo() HOC, which will returned the memomoized Component that we just use at Parent COmponent while exporting.


  # When to use React.momo() HOC Comonent : SOme times developer use this memo() function before exporting all component, which is not necessary untill you dont know this component is depended on any props change. So, If component is static or Receiving props from parent which is not changing from parent, then we wrap the current component before sending to parent.

  UseCase : Many times a text component like <TitleCompp> which is being called in Parent COmponent and getting rendered every time on APP.jsx getting render, so wht we can do to improve app performance, beofre exporting <TitleComp> we can memoized it via memo() HOC, then we exporting the memoized COmponent to Parent component only.




  HOC : It is a Higher Order Component or Higher Order Function which means a COmponent/Function which receives another function/component as input/argument and returns a new component/function with some addition function to make our work easy without writing longer code. 



  
  
  */

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)


  console.log("Memo Componnent get rendered...")

  const aRandomFunction = ()=>[
    console.log("a random fuction executed..")
  ]
    
  return (
    <>
    

    <h1>Learnig React.memo() HOC Function of React -</h1>

    <button onClick={()=> setCount(prev=> prev+1)}>Count is {count}</button>
    

    {/* We have used a CHild Testing Component here, suppose we had to use here in parent in some scenarios - */}
    {/* <TestingChildComp/>  */}

    {/* Now, using Passed momo() HOC, CHild component here */}
    <MemoizedChildComp count= {count2}/>
    
    {/* Note : Now the <MemoizedChildComp count= {count2}/>  component only re-renders when 'count2' that are passed to it through props are updated. */}
    
    </>
  )
}

export default ReactMemoOptimization;