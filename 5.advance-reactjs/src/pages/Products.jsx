import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {

    const [data, setData] = useState([]);

    useEffect(()=>{

        fetch("https://dummyjson.com/products")
        .then(res=> res.json())
        .then(result => setData(result))

    }, [])

    // console.log(data)


  return ( <>
  

  <h1>Product page  : -</h1>

  <div style={{display : 'flex', flexWrap : 'wrap', width : '1200px', margin : "auto", justifyContent : 'center', gap : '20px' }}>

    {data.products &&
    
    data.products.map(item=>{

        return <div key={item.id} style={{flexBasis : "20%", padding : '8px', margin :'8px'  ,border : "2px solid grey", }}>

            <img src={item.images} alt="" width={200}/>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
           <Link to={`/products/${item.id}`}> <button>Know More</button></Link> 

        </div>
    })
    
    }
  </div>
  
  </>
    
  )
}

export default Products