import React, { useEffect, useState } from 'react'
import Header from '../common/Header';
import { Link } from 'react-router-dom';

export default function Blogs() {

    const [data, setData] = useState([]);

    useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=> res.json())
.then(res=> setData(res))

    }, []);
  return (
    <>
    <Header/>
    <h3>Blog Page</h3>

    <div className='container'>
        {data.length===0 ? <h3>No API Data Found</h3> : data.map( (item, index)=>
            
            <div className='container-item' key={index}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <button> <Link to={`/blogs/${item.id}`} >Read More</Link> </button>
                
    
                
                </div>)}

    </div>

         
    
    </>
  )
}
