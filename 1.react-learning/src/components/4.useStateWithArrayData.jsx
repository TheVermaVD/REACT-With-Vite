import React, { useState } from 'react'

export default function LeanrUseStateWithArrayData() {

  
    const [inputValue, setInputValue] = useState("")

    // useState() Hook with Array Data : Passing an Array as data as initial data to useState() Hook.

    //It is mostly use to add one data one by one to an array and the origina array data getting display over the UI - i.e and a TODO Case -

    //Task on user click on a button add one by one item from array to UI -

    // const foodItem = []; //empty data
    const items = ["Ram", "Sita","Gita"];
    const [foodItems, setFoodItems] = useState(items);

    //IF we added on keydown i.e on 'Enter' Button value get added -
    // const handleKeyDown = (e)=>{

    //   if(e.key==="Enter"){

    //     const newFoodItem = e.target.value;
    //     e.target.value="";
    //     const newItems= [...foodItems, newFoodItem];

    //     setFoodItems(newItems);

    //   }

    // }

    const handleAdd = ()=>{


      // setFoodItems([...foodItems, inputValue ]);
      setFoodItems(currArr=> [...currArr, inputValue]); //With Updater Function state change
      setInputValue("")


    }


  return (
    <>

    <h2>UseState with Array Data -</h2>
    Enter Your Item : <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
    <ol>

      {foodItems.map((item, index)=> <li key={index}>{item}</li>)}

    </ol>

      <button onClick={handleAdd}>Add Item</button>
    
    
    
    </>
  )
}
