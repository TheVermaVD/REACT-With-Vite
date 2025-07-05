/*

#Submitting Data i.e Post Data with Fetch API : - Aprat from Fetching Data from API i.e ENDPoint we can send ie Post Data from client side to server endPoint with help of browser web API i.e Fetch API where we specify the sending data in second argument which takes an object.

Post Data needed whenerver user want to send some data as form of input to server database like form submission, feedback submission, login submit, signup submit etc.

we use, JSON.stringify(<object>) ---> Converts into JSON string data.
JSON.parse(<Json_string>)  ---> Converts into JS object.


Example : Add a new post -
Adding a new post will not add it into the server.
It will simulate a POST request and will return the new created post with a new id

fetch('https://dummyjson.com/posts/add', { //http path i.e Endpoint
  method: 'POST', //HTTP method means which type of request we want to make
  headers: { 'Content-Type': 'application/json' }, //headers(meta data of our data) of the client data send to server

  body: JSON.stringify({   //Content i.e data we want to send to server database (body contains)

    title: 'I am in love with someone.',
    userId: 5,
    // other post data
})
})
.then(res => res.json()) //For our verification we see that post JSON data actully send or not by returning same send data.
.then(console.log);
    



*/


import React, { useState } from 'react'

export default function LearnSendData() {


    const [inputValue, setInputValue] = useState({
        firstName :"",
        lastName : ""
    })

    // Handling Form Input Field Text Value, via Controlled Way of React -
    const handleInput = (e)=>{
        setInputValue(currObj => ({...currObj, [e.target.name] : e.target.value }));
        
    }

    //1.) Creating a resource : Handling On Form Submission Button what will happen -
    const handleSubmit= (e)=>{
      e.preventDefault();

      // console.log(inputValue); //The data object we want to send to server

      //Adding a new Post ENDpoint of Server : Technically, It'll not add it into the server.
      // It will simulate a POST request and will return the new created post with a new id from server.

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers : {"Content-Type" : "application/json" },
        body: JSON.stringify({
          inputValue
        })

      })
      .then(res=> res.json())//To see succefully post data returned from server
      .then(console.log)
      .catch(err=> console.log(err));

    }


    //2.) Updating a resource : With HTTP 'PUT' Method - Accross any existing Object Data with selected 'id' must get updated with complete new value. Here, It replaces an entire object accross that id with new our object data provided.  

    // body : Contains full updated resource
    // Use Case : When you want to update or replace an entire entity.//Full Replacement. 

    const handleUpdate = (e)=>{
      e.preventDefault();


      fetch("https://jsonplaceholder.typicode.com/posts/1", {

        method : "PUT",
        headers : {"Content-Type" : "application/json" },
        body: JSON.stringify({
          ...inputValue
        })

      })
      .then(res=> res.json())//To see succefully Update data returned from server
      .then(console.log)
      .catch(err=> console.log(err));
    }

    //3.) Patching a resource : With HTTP 'PATCH' Method - Accross any existing Object Data with selected 'id' must, get updated with only provided old key with its new value. 

    //body : Contains only old fields name with updated data tht only need to be changed and old fields will remain same.
    //Use Case : When you want to modify specific attributes/values of an entity without replacing entire object for tht 'id' //Partial Replacement

      const PatchUpdate =(e)=>{
        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts/1',{
          method : "PATCH",
          headers :{"Content-Type" : "application/json"},
          body: JSON.stringify({
            // lastName : "Verma"
            lastName : inputValue.lastName

          })
          
        })
        .then(res=> res.json())//To see succefully Patched data returned from server
        .then(console.log)
        .catch(err=> console.log(err));

      }

    //4.) Deleting a resouce : With HTTP 'DELETE' Method - Accross any existing Object Data with selected 'id' must, get deleted from server database. Here,we do not need to pass 'headers' and 'body' of client HTTP request to the second argument of fetch() method, just pass the http method i.e 'DELETE' and ENDpoint with its id - 

    const handleDelete = (e)=>{
      e.preventDefault();

      fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method :"DELETE"
      })
      .then(res=> res.json())//To see succefully Deleted empty object {}returned from server.
      .then(console.log)
      .catch(err=> console.log(err));
    }

        
  return (
    <>
            <h4>Creating a Form To Collect some data from user/client to send it over server database -</h4>
            <form >

                 First Name : <input type="text" name='firstName' value={inputValue.firstName} onChange={handleInput} /> <br />
                 Last Name : <input type="text" name='lastName' value={inputValue.lastName} onChange={handleInput} /> <br/>
                 <button onClick={handleSubmit}>Submit</button>
                 <button onClick={handleUpdate}>UpdateData</button>
                 <button onClick={PatchUpdate}>PatchData</button>
                 <button onClick={handleDelete}>DeleteData</button>

            </form>

    
    </>
  )
}
