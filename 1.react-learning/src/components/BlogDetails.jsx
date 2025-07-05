import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Header from '../common/Header';

export default function BlogDetails() {

    const location = useLocation(); //Hooks of a react-router-dom where we can get all details of our current URL of the page.


    // console.log(location.pathname.split("/")[2]);
    const currentId = +location.pathname.split("/")[2] ;


    ///OR, With of useParams() hook of react-route-dom to access dynamic current id from sent data -

    const paramsObj = useParams();
    // console.log(paramsObj); //returns an object with passed dynamic key-value pair.
    const currentIdd= +paramsObj.pk;



    const [data, setData] = useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts").then(res=> res.json())
        .then(res=> setData(res));
    },[]);

    const filterData = data.filter(item=> item.id === currentId);
    // const filterData = data.filter(item=> item.id === currentIdd);
    // console.log(filterData);

  return ( <>

    <Header/>
    <h3>BlogDetails</h3>

    <div className='main-div i.e container div'>
        {filterData.map((item, index)=>
            <div className='sub i.e child div' key={index}>
                <h4>{item.title}</h4>

            </div>
        )}

    </div>

    </>
  )
}
