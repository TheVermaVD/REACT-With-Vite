


  // # using this we can Cancel/CleanUP the API Call once the component will unmount   i.e die -

// Note : we use Browser's AbortController() WebAPI which used to controll or allow us to abort one or more web request to server

import { useEffect, useState } from "react";

  function FetchDataWithCleanUP(){

    const [data, setData]= useState([]);

    useEffect(()=>{
      
      const controller = new AbortController() //for cancelling fetch


      fetch("https://dummyjson.com/products", {signal : controller.signal})
      .then(res=> res.json() )
      .then(res=> setData( res.products) )


      return ()=> {

        controller.abort()
        console.log("Cleanup Function run means we abort or cancelled the API Request!")

      }

    }, [])

    console.log("FetchDataWithCleanUP Component Rendered...!!")
    // console.log(data)


    return <>
    {data &&
    
        data.map(item=> <><h1>{item.title}</h1><img src={item.images} width={400} alt="" /> </>)
    }
    
    </>


  }


  export default FetchDataWithCleanUP;