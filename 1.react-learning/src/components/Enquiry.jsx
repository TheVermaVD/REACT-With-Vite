import React from 'react'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'

export default function Enquiry() {

    const location = useLocation();

    // console.log(location.state);

  return ( <>

  <Header/>
    <div>Enquiry Page and My Id is : {location.state.myID}</div>

    </>
  )
}
