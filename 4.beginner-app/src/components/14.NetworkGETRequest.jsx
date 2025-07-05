import React, { useEffect, useState } from 'react'

export default function GetDataAPI() {

    const [data, setData] = useState([])

    /*
    
    # 1) TO do network/API Call/HTTP Get Request in React, React doesnot have any inbuilt module, so we will either do via WebAPi i.e fetch() or external axios() library -

    a) using fetch() API: - Modern JavaScript API for network requests -

       Promise-Based: Returns a Promise with a Response object.
       Usage: Default is GET. For POST use method: 'POST'
       Response: Use .then() and response.json() for JSON data
       Errors: Doesn't reject on HTTP errors. Check response.ok
       Headers: Managed using the Headers API.


              fetch("https://jsonplaceholder.typicode.com/users")
                .then(res=> res.json())
                .then(result=> setData(result))
                .catch(res=> res.json())

    b) using external axios() module :-  > npm i axios  (First Install)
          import axios from 'axios'    
                 
          axios.get("https://jsonplaceholder.typicode.com/users")
                .then(result=> setData(result))
                .catch(res=> res.json())

    
    */

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(result=> setData(result))
        .catch(err=> console.log(err))

        console.log("UseEffect Space body....")

    }, [])  //Will run once only i.e on Page Load and later on any componennt render it wont render.


    // console.log("The Fetch Load Component Rendered...!!")
    console.log(data)

    // const name = "Rowdy Prakas..."



  return ( <>
  
            <h1>Name is : {name}</h1>


    {/* <ul>

        {data.map(item=><li key={item.id}>{item.name} - {item.email}</li>)}

    </ul>  */}

    <div>

        {data.map(item=><div key={item.id}>{item.name} - {item.email}</div>)}

    </div> 

    </>
  )
}
