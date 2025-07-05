import React from 'react'

export default function ListRendering() {

    const arr = [2,4,1,5,8]

    const doubled = arr.map((Item)=> { return Item * 2

    })

    console.log(doubled)

    // map() function : It a Higher order function of JS where it accepts an another function inside map() function. That provided function(usually we use arrowfuction) works/operates some operation/task on each array elements and returns a new array as the result. Note: That Provided fuction/arrowfunctiin accepts three arguments(maintain the order of arguments) : Item(Required), Index(Optional), ArrayItself(Optional)  

    //#List Rendering IN React :  Suppose some data we have, stored in array or array of objects, To render or display all Array data, we need to use looping  or manually one by one display(Not POssible)-

    const IPL = ["CSK", "MI", "RCB"]

    const IPL2 = [ {id : 1, name : "Prakash", team : "CSK"}, {id : 2, name : "Priya", team : "MI"}, {id : 3, name : "Rohit", team : "RCB"} ] 

    // 'key' Props In List Rendering : -

    // Virtual DOM : Whenever any new element or item get updated then React doesnot directly update the REal DOM of Browser, instead it updates its Virtual DOM and once changes get saved finally then it update Real DOm while rendering only.


    // why to add 'key' props in List Rendering : key props helps React indentify which items added or changed or removed or updated in the list.key must be given to each list item while rendering from array data to give them a unique identity to indenty it later on. 

    // Example : Suppose, we need to add a new element to the existing rendered list, then it we add in the beginning of the list, and if we have added key then react might think we have added complete new list rather updation. Hence if we already added key to each items then while updation, it get recognized that the items are already exist i just need to update only the new item in the list. 

    // Keys must be unique value given, can't be repeated. SO we add mosly the array's object id data as key or any npm package for random generating keys.

    // Dont keep the array item as key coz if item get repeated then again we get warning.We might use indexing of array as key as short term.

  return ( <>

    <div>ListRendering</div>

    {/* // Manual Rendering - */}
    <ul>

        {/* <li>{IPL[0]}</li>
        <li>{IPL[1]}</li>
        <li>{IPL[2]}</li> */}
   
        {/* {IPL.map( (Item,index) => <li key={index}>{Item}</li> )} */}

        {IPL2.map( (Item) => <li key={Item.id}>{Item.team} and name is {Item.name
          }</li> )}
         
    </ul>


    </>

  )
}
