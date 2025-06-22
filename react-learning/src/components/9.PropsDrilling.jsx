
/*
#props drilling concept in React : - It is a concept of passing props data from upper most parent component to at any inner level of child component, known as props drilling. 

Example : Suppose there are four component nested one by one like Parent -> ChildA ->  Child B  ->   Child C --  Child D, So if a props data need to pass from Parent component to Child D, then that passing props data from Parent to Child D will known as props drilling. 

Note: Props drilling is one drawback of using it, as we unneccesarly passing data to intermidiate all child component whic we do not need. So the solution of this props drilling in react is to use Context API or useContext() Hook, which solves this problem and we can send data from parent to direct ChildD component or any Child Level directly.





*/

import { useState } from "react";

export default function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    //Here, To send 'user' data to Component5 From Component1, so to do so we need to pass pass to nested all component from COmponent1 to Component4 vai props. Thus, Even though components 2 to 4 did not need the state, they had to pass the state along so that it could reach component 5. [PROBLEM of Props-drilling]

    // Solution : Use Context API -


  
    return (
      <>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </>
    );
  }
  

  function Component2({ user }) {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />
      </>
    );
  }
  
  function Component3({ user }) {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 user={user} />
      </>
    );
  }
  
  function Component4({ user }) {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 user={user} />
      </>
    );
  }
  
  function Component5({ user }) {
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }