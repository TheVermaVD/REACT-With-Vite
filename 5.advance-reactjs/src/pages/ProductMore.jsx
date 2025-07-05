import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductMore() {

    // To access Received id from URL, we can use two ways -
    // a) useParams Hook - for direct access
    // b) useLocation Hook - for extract id from the location

    // a) using useParams() Hook -
    const paramObj = useParams()
    // console.log(paramObj) // {productID: '1'}

    // b) usig useLocation() Hook : Will get all information about current URL -

    const currentlocation = useLocation()
    // console.log(currentlocation) // {pathname: '/products/2', search: '', hash: '', state: null, key: '5vjn80vm'}
    // console.log(currentlocation.pathname.split('/')[2]) 

    const currentProductID = currentlocation.pathname.split('/')[2] //string id return

    // Now, Lets filter out data as per product id -

      const [data, setData] = useState([]);
    
        useEffect(()=>{
    
            fetch("https://dummyjson.com/products")
            .then(res=> res.json())
            .then(result => setData(result))
    
        }, [])

        // console.log(data) //Initially render get [] and then data render get {}
    
        // const currentProduct = data.products.filter()

        const data2 = data.products || []
        // console.log(data2)

        const filterProduct =  data2.filter( item =>{
          
          return item.id == currentProductID ;
        
        })
        console.log("Filtered Product is : ", filterProduct)

  return ( <>
        <h2>Product More Page, id : {paramObj.productID}</h2>

        <div>
 
            {filterProduct &&

             filterProduct.map(item=>{
              return <>

              <h3>Title is : {item.title} </h3>
              <h3>Product Id is : {item.id} </h3>
              <h4>Brand is : {item.brand}</h4>
              <h4>Category is : {item.category}</h4>
              
              </>
             })
            }
        
        </div>


    </>
  )
}

export default ProductMore