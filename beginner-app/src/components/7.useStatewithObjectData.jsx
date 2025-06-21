

import React, { useState } from 'react'

export default function UseStatewithObjectData(){

    
    //Note: Changing Primitive datatypes over State Change is Easy But Changing Non-Primitive datattypes over state changes little tricky. Let' see how to change Object or Array data over time means more than one data how we can change at once Event trigger or State Change -

    // #Ex1 : Task is to pass multiple state variable in form of object data to useState() Initialization -
    
      const [objectData, setObjectData] = useState({count : 0, clicks : 0})
    
      function handlerObject(){
    
        // setObjectData({...objectData , count : objectData.count +1, clicks : objectData.clicks + 1}  )
    
        setObjectData( prevData  => {
    
    
          return {...prevData, count : prevData.count +1, clicks : prevData.clicks + 1}
    
        })
    
    
      }


    //Ex : 2 - Task is to update Object data with Nested Object Data as passed as Initial state to use state -  (Here, we will keep nested one data as same and city data will be updated)

    const [values, setValues] = useState({name : "prshh", address : {
        city : "Banglore",
        country : "India"
    }})

    function handleClick(){

        setValues(prevValue => ( {...prevValue, name : "Prakash" , address : {
            ...prevValue.address, city : "Kolkata"
        } }))


    }
 


    // Ex: 3 - Task is As User Enter a New Data on Input Element and as soon as user click on button to update then It updates the New Data -(Need to Have basic form handling knowledge)


     return <> 
     
     
     <h1> Multiple State Variable Trying TO change with storing into a Object </h1>  
     <div>
   
       <h3>The current Like_Count = {objectData.count} and Clicks  = {objectData.clicks}</h3>
       <button onClick={handlerObject}>Increase Object Data</button>
   
     </div>

     <div>

        <p> The name is {values.name} and city is {values.address.city}, country is {values.address.country}    </p>
        <button onClick={handleClick}>Update Data</button>
     </div>


     </>

}

