import React, { use, useState } from 'react'

export default function UseStatewithArrayData() {

    // #Ex1 : Task is to pass multiple state variable in form of Array data to useState() Initialization -

    const [arrayData, setArrayData] = useState([ "Mango", "Graves"])

    function handlerArray(){
  
      setArrayData([...arrayData , "Banana", "Kivi"]  )
  
  
    }

    // Ex2 : Task is to update the list when user enter(via input element) any data and click on button i.e a TO DO List -
    
    // For Input Field Handing using Controlled COMponent -
    const [inputValue, setInputValue] = useState("")

    const handleInput=(e)=>{

      setInputValue(e.target.value);

    }

    // console.log(inputValue)
    

    // For Adding Items -
    const [Items, setItems] = useState(["Mango", "Banana"])

    const handleAddItem = ()=> {

      setItems(prevItems=>  ( [...prevItems, inputValue ]  ) )
      setInputValue("")

    }

    const handleKeyDown = (e)=>{
      
      // console.log(e.key)
      if(e.key=="Enter"){

        setItems(prevItems=>  ( [...prevItems, inputValue ]  ) )
        setInputValue("")

      }

    }

  return ( <> <h1> Multiple State Variable Trying TO change with storing into an Array </h1>  


    <div>
  
      <ol> 
  
        {arrayData.map( (Item, Index)=> <li key={Index}> {Item} </li> )}
  
  
      </ol>
  
      <button onClick={handlerArray}>Add New Item</button>
  
    </div>


    {/* Task2 : */}
    <div>

      <b>Enter Fruit Items : </b>
      <input type="text" value={inputValue}  onChange={handleInput} onKeyDown ={handleKeyDown} />
        
      <button onClick={handleAddItem}>AddItem</button>
      <ol>

        {Items.map(item=> <li key={item}>{item}</li>)}
      </ol>


    </div>



    </>
  )
}
