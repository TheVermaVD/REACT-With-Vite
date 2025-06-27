import { useState } from "react";
import "./App.css";
import AppName from "./components/1.AppName";
import EnterTodo from "./components/2.EnterTodo";
import ItemsToDO from "./components/3.ItemsToDO";
import BharatClock from "./components/BharatClock";
import {v4 as uuidv4} from "uuid";

function App() {

  /*

  // Main Logic ToDo-Project APP : - Whenever user Enter any task/item on Input field and enter on 'Add Button', it get added to Item Section one by one and when user click on any Item Row 'Delete Button' That Row must get removed from 'Item Section COmponnent' and WHen there is no Item on Item_Section, show a empty message 'there is nothing else to do anything on TODO" .

  Step1 : We break the Project into three components : APPTitle, ENterFieldToDO, and Item Section Listing .

  
  Step2 : Since, EnterToDO component and ItemSection Comp are siblings coz they gonna share state or data when user enter on Parenet COmponent it go to child Component and 
 
 
  */

  const staticTodoData = [

    { itemName: "Buy Milk", dueDate: "05/07/2025", id: 1 },
    { itemName: "Go Gym", dueDate: "23/06/2025", id: 2 },
    { itemName: "Study 10Hrs", dueDate: "23/06/2025", id: 3 },

  ];

  const [myToDo, setMyToDo] = useState(staticTodoData)


// Will send this defined function to 'EnterTODO' component app to get the both input fields value here -
  const getBothInputFields = (todoItem, dueDate)=>{

    // console.log(todoItem) //We get the both input fields values here
    // console.log(dueDate)

    setMyToDo([  ...myToDo, {itemName : todoItem, dueDate : dueDate, id : uuidv4() } ])


  }


  const getDeletedItemID = (itemID)=>{

      // console.log(itemID) //Finally Received
      // Now, Filter the ourToDOArray data so that we can update Item section with remaining data on UI -

      const filterMyToDo = myToDo.filter(item=> item.id !== itemID )
      setMyToDo(filterMyToDo)

  }




  return (
    <>
      <div className="bg-black h-lvh">

        <div className="max-w-3xl mx-auto bg-amber-50 min-h-[100px] p-[20px] rounded-2xl">

          <AppName />

          <EnterTodo getBothInputFields={getBothInputFields} />
          {myToDo.length === 0 && <p className="text-center text-yellow-500 font-black">Enjoy your day..!!</p> }

          <ItemsToDO myToDoArray = {myToDo} getDeletedItemID = {getDeletedItemID}/>
 
        
        </div>
      </div>

      <BharatClock />
    </>
  );
}

export default App;
