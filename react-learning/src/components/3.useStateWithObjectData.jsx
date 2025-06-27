import React, { useState } from 'react'

export default function LearnUseStateWithObjectData() {


  // useState() Hook with Object Data : Passing an object as data as initial data to useState() Hook.
  

  //It is mostly use in taking form data having multiple state changes at a time for each input element, so to avoid defining multiple state we define with one stata that containas an object in form of all input data.

  const data = {
    // firstName : "" ,
    // lastName : "" 
    firstName : "Dev" ,
    lastName : "Gupta" 
  }

  const [values, setValues] = useState(data);

  const handleChange = (e) =>{

    //Ealier : -
    // setValues(e.target.value); //which was ; values = e.target.value

    setValues({ ...values, [e.target.name] : e.target.value  });
    //Note : We use array like notation to access and object value in form of an string as result which we want string property name.

    //with Updater Function style state update -

    const name = e.target.name;
    const value = e.target.value;
    // setValues({ ...values, [name] : value  }); //Direct Updating State
    setValues(currValue => ({...currValue , [e.target.name] : e.target.value } ) )
    
  }

  //Note : Basically spread operator creates a copy of current object data and whenever we set any new value then It over-writes i.e replace same property name found in the object data with new data and 'new property name' will get updated


  // --------------------------------------------------------------
  const obj = {
    name :"Prakash",
    age : 23,
    nationality : "Indian",
    // "nationality" : "China", //Replaces old property name value to updated one.
  }

  //Suppose want to change any property from given object -

  // obj.nationality = "rwid"; //with seperately changing it.

  //with creating a new object with copying old data and adding a new data with old key name so that it will replaces with old key value -

  const newObj = {...obj, nationality : "USA"};

  console.log(obj);
  console.log(obj.age); //Object Dot notation accessing
  console.log(obj["age"]); //Array like notation accessing
  console.log(newObj);


  // ------------------------------------------------------------

  
  
  return (
    <>  

    <h2>useState with Object Data</h2>
    
    <form action="">
      
    First Name : <input type="text" name='firstName' value={values.firstName} onChange={handleChange}/> <br />
    Last Name :   <input type="text" name='lastName' value={values.lastName} onChange={handleChange}/>

    </form>

    <h1>First Name is : {values.firstName}</h1>
    <h1>Last Name is : {values.lastName}</h1>
 
    
    </>
  )
}
