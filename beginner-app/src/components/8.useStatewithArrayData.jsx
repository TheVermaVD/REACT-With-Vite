import React, { useState } from 'react'

export default function UseStatewithArrayData() {

    // #Ex1 : Task is to pass multiple state variable in form of Array data to useState() Initialization -

    const [arrayData, setArrayData] = useState([ "Mango", "Graves"])

    function handlerArray(){
  
      setArrayData([...arrayData , "Banana", "Kivi"]  )
  
  
    }

    // Ex: 2 - Task is to update the list when user enter(via input element) any data and click on button i.e a TO DO List - 

  return ( <> <h1> Multiple State Variable Trying TO change with storing into an Array </h1>  
    <div>
  
      <ol> 
  
        {arrayData.map( (Item, Index)=> <li key={Index}> {Item} </li> )}
  
  
      </ol>
  
      <button onClick={handlerArray}>Add New Item</button>
  
    </div>

    </>
  )
}
