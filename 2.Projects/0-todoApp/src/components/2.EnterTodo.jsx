import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function EnterTodo({getBothInputFields}) {


  // We want basically both input fields like <text input> and <date input> values to the parent component - (i.e Here, inputValue and dueDateValue we need at Parent Component.)

    const [inputValue, setInputValue] = useState("")
    const [dueDateValue, setDueDateValue] = useState("")

    const handleInputChange = (event)=>{
      // console.log(event.target.value)
      setInputValue(event.target.value)

    }

    const handleDueDateChange = (event)=>{

      // console.log(event.target.value)
      setDueDateValue(event.target.value)
    }


    // Note : this below function could have been replace with dirct calling inside Add Button Click like this - onClick={()=> getBothInputFields(inputValue, dueDateValue) }
    const handleAddItem = ()=>{

      getBothInputFields(inputValue, dueDateValue) 
      setInputValue("")
      setDueDateValue("") 

    }


  console.log("EnterToDo Comp Rendered...");

  return (

    <div className="grid grid-cols-[40%_40%_auto] py-[15px] gap-[20px]">
        <div>
          <input type="text" placeholder="Enter Todo Here" onChange={handleInputChange} value={inputValue}
          className="w-[100%]  outline-0" />
        </div>
        <div>
          <input type="date" onChange={handleDueDateChange} value={dueDateValue} />
        </div>
        <div>
          <button className="p-[8px_40px] rounded-lg bg-green-600 hover:bg-green-700 text-white" onClick={handleAddItem}>
            {/* Add */} <IoMdAdd/>
          </button>
        </div>
    </div>

  );
}

