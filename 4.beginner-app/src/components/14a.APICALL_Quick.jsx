import { useEffect, useState } from "react"
import { useFetch } from "./17.LearningCustomHook"


function APICALL() {

    const [data, setData] = useState( [] )
  
    useEffect(()=>{
  
      fetch("https://dummyjson.com/users")
      .then(res=> res.json())
      .then(result=>{
        // console.log(result)
        setData(result.users)
      })
  
    },[])
  
    // console.log(data)


// --------------------------------------------------------------------


  //using Own Defined useFetch() custom Hook to achive same/Display data on UI -
  
  const myData = useFetch("https://dummyjson.com/users") //object{} start JSON data gives
  const myData2= useFetch("https://jsonplaceholder.typicode.com/users")  //Array[] start JSON data gives 

  console.log("useFetch Data", myData) //Receives, the Same Hitting API like if It is in Object start or Array Start.
  // console.log("useFetch Data 2", myData2) 

//Note: If We receive array start or object start, handle it accordingly -

// for Object start  : {  myData.users  &&  myData.users.map(.....)  } 
// for Array start  : {  myData2  &&   myData2.map(.....)   }


// Optional for assigning Initial Render, always empty array [] for object JSON data case -
const myArrayData = myData.users || []
console.log(myArrayData)


    return <> 
    
    {/* data.length === 0  ? <h2> Data Loading...</h2> : */}

    {/*  data  ?  data.map()  : <h2> Data Loading</h2>   */}
    {/*  myData.users   ?  myData.users.map()  :  <h2> Data Loading</h2>  */}
    {/*  myData2  ?   myData2.map()  :  <h2> Data Loading</h2>  */}
    
        <h2>JSON Array Data Display -</h2>
        <div>

           { data && 
          
          data.map(item=><div key={item.id}> {item.firstName} - {item.lastName} - {item.age} </div>  )  } 
          
        </div>

        <h2>JSON Object Data(having 'users' one property) Display -</h2>
        <div>

          { myData.users &&
          
          myData.users.map(item=><div key={item.id}> {item.firstName} - {item.lastName} - {item.age} </div> )  }

        </div>


        <h2>JSON Array Data Display 2 -</h2>
        <div>

          { myData2 &&
          
          myData2.map(item=><div key={item.id}> {item.name} - {item.username} - {item.email} </div>  )  }

        </div>
        </>  
  
  }
  
  export default APICALL
  