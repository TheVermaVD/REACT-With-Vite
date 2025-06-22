/*
#React PERFORMANCE OPTIMIZATION Techniques : -

There are four ways we can Optimize React Performance : -

a) using React 'memo' function i.e React.memo()
b) using useCallback() Hook for sustaining method references
c) using useMemo() Hook for sustaining any value references
d) use React 'lazy' laoding function to differ load heavy component after some time.

React 'memo' function i.e React.memo() function : -

  It is use to imporve app performance by not re-rendering Child Compoent after once, untill any props or state get changes in Child Component. 

  Problem : Whenerver there is any CHild COmponent called to Parent Component and Child Component Dooes not hold any state or props of PArent, then What we see in normal as much Parent Component get rendered Child Component AGain rendered even after first rendering that's we do not want. So React.memo() function solved this unneccessary CHild component re-rendering after first rendering.

  How to use 'memo() function or React.memo()' in React : Either Wrapper the entire Child Component inside React.memo() method while defining Child Compoent and then later export it OR, at the end of the Component when exporting the Child Component then use React.memo(<Child_Component),
  
  In other saying, While exporting that Child Component when we know tht there is no props or other state used by our Child component then we pass 'Child Component' as argument to React.memo(<child_component>) function while exporting it.

    import React from "react"; ---> React.memo()
    import { memo } from "react";  ----> memo()

  NOte: if we used React.memo(<Child_Component) while exporting and if there is certain state or props getting change in CHild then Child Component Will re-render even we used memo().




*/

import React, { useState } from "react";
import MyButton from "./Button";

export default function LearnReactMemo() {
  console.log("Main Component Getting Rendered..!!");

  const [add, setAdd] = useState(0);

  const handleAdd = () => {
    setAdd(add + 1);
  };

  return (
    <>
      <div>Value : {add}</div>
      <button onClick={handleAdd}>Add+1</button>

      {/* //Child Component -  */}
      {/* <MyButton /> */}
      <MyButton add={add} />
    
    </>
  );
}
