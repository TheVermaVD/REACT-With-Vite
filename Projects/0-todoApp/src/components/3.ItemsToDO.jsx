import React from "react";
import { MdDelete } from "react-icons/md";

export default function ItemsToDO(props) {

  // console.log(props.staticTodoData)

  // const dataArray = props.staticTodoData
  const { myToDoArray , getDeletedItemID } = props

  // console.log(dataArray)

  console.log("ItemsTODO Comp Rendered...")

  return (<> 
  
          {/* <ol></ol>   */}

        { myToDoArray &&  

          myToDoArray.map(item=> {

          return  <div key={item.id} className="grid grid-cols-[40%_40%_auto] py-[15px] gap-[20px]"> 

                    <div>{item.itemName}</div>

                    <div>{item.dueDate}</div>

                    <div>
                      <button  className="p-[8px_40px] rounded-lg bg-red-600 hover:bg-red-700 text-white" onClick={()=> getDeletedItemID(item.id) }>
                      <MdDelete /> </button>
                    </div>
                              
                 </div>
        }) }


    </>);
}

