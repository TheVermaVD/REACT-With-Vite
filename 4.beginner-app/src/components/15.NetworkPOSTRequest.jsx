import { useState } from "react"

export default function NetworkDataSend() {


  // 2.) Sending Data to Server/End Point/Creating a new data at server : As a Frontend Side, When we have form-data, in this case mostly we need to send to server when user filled the form data, so we take all enter data from user and send it to server.

    // We collect form-data from user and send it back to backend/server.
    // We send user-login details to server to create a new registration for the user.

    // We can send data to server using two ways -

    // a) WebAPI fetch() : Here we need to pass data in second parameter to fetch as object and that object contains data along with header and type.

    // b) external axios() method : simpler, axios.post() 
    //axios is good with POST, PUT, PATCH HTTP methods coz here we do not need to pass complete headers, methods.

    const userInputData = {
        username : "Prakash Kumar Verma",
        password : "Jsklsd",
        emailID : "prakash453@gamil.com"
        
    }

    // Note : We JSON.parse() to parse JSON Data into JS Object Data.
    // Note : We JSON.stringify() to convert JS Object Data to JSON string Data.

    //POST API Call - means Creating new resource on server-
    const createANewRegistration = ()=>{

        fetch("https://jsonplaceholder.typicode.com/users",{

            method : "POST",
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(userInputData)

        })
        .then(res=> res.json()) //To see succefully post data returned from server
        .then(console.log)
        .catch(err=> console.log(err))

    }

    //3.) Updating a resource : With HTTP 'PUT' Method - Accross any existing Object Data with selected 'id' must get updated with complete new object data. Here, It will replace an entire object accross that id with new our object data provided.  

    // body : Contains full updated resource
    // Use Case : When you want to update or replace an entire entity.//Full Replacement.
    // Suppose, when user forget his password, we basically replace the complete his login details accross his registered id -
    //Remember, here the URL of the path, coz we target the POST API with selected id value, like this - https://jsonplaceholder.typicode.com/posts/11

    const userNewEnteredData = {

      username : "Prakash Verma",
      password : "Jsklsdfff",
      emailID : "prakash453@gamil.com"

    }

    const updateUserRegisteredData = ()=>{

      fetch("https://jsonplaceholder.typicode.com/posts/11",{
        method : "PUT",
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(userNewEnteredData)
        
      })    
      .then(res=> res.json()) //To see succefully updated data returned from server.
      .then(console.log)
      .catch(err=> console.log(err))

        
    }

    
    //4.) Patching a resource : With HTTP 'PATCH' Method - Accross any existing Object Data with selected 'id' must, get updated with only provided old key with its new value. and except this key-value pair other remaining key-value from object will remain same.

    //body : Contains only old fields name with updated data tht only need to be changed and old fields will remain same.
    //Use Case : When you want to modify specific attributes/values of an entity without replacing entire object for tht 'id' //Partial Replacement
    // Suppose, In chat we want modify the wrongly typed text -

    const [userData, setUserData] = useState({
      name : "Prakash Kumar Verma",
      category : "furniture"
    })
      
    

    //Patch Data -
    const handleEditCategory = ()=>{

    
      const takenewData = prompt("Enter the new data : ")

      
      fetch('https://dummyjson.com/products/12', {
        method : "PATCH",
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify({
              category: takenewData,
        })
      })
      .then(res=> res.json()) //To see succefully edited data returned from server.
      .then(result=> {

        console.log(result)
        setUserData({...userData, category : result.category})

      })
      .catch(err=> console.log(err)) 

    }


    //5.) TO Delete a Record from the server with selected object 'id' -
    // # Deleting a resouce : With HTTP 'DELETE' Method - Accross any existing Object Data with selected 'id' must, get deleted from server database. Here,we do not need to pass 'headers' and 'body' of client HTTP request to the second argument of fetch() method, just pass the http method i.e 'DELETE' and ENDpoint with its id - 

    const handleDeleteName = ()=>{

      fetch("https://jsonplaceholder.typicode.com/users/2",{
        method : "DELETE"
      })
      .then(res=> res.json()) //To see succefully deleted data returned from server.//we get {} empty object in return for successfully result. 
      .then(result=>{
        console.log(result)
        setUserData({...userData, name : result.name})
      })
      .catch(err=> console.log(err))

    }




  return ( <>
    <div>NetworkDataSend</div>

    <button onClick={createANewRegistration }>Send Data</button>
    <button onClick={updateUserRegisteredData}>Update Data</button>

    {/*  */}

    <p>Name : {userData.name} <br /> Category : {userData.category}</p>
    <button onClick={handleEditCategory}>Update Category</button>

    <button onClick={handleDeleteName}>Delete Name</button>



    </>
  )
}
