import React, { memo, useContext } from "react";
import { ContextElement } from "../store/userContext";


function MyButton({add=0,someLearning,handleAdd }) {

  console.log("MyButton Component Getting Rendered...")
  const contextValue = useContext(ContextElement);

  someLearning();


  return (
    <div>
      <button>MyButton</button>
      <h2>Child Component with no Passed Props or State : {add}</h2>
      <h3>From Button Component: {contextValue.rwdyName}</h3>

  {/* USing as child Component for useCallaback hook  */}
      <button onClick={handleAdd}>At Child : Add+1</button>
    </div>
  );
}

// export default React.memo(MyButton); 
export default memo(MyButton); 

