import React from 'react'
import { useLocation } from 'react-router-dom'

function CartPage() {

    const currentLocation = useLocation(); //Gives current Page URL all details including 'state' property -

    // console.log(currentLocation) //get an object

    // console.log(currentLocation.state) // {userID: 5}


  return ( <div >
    <div>CartPage, userID is {currentLocation.state.userID}</div>
    <ol>

        <li>Pen</li>
        <li>Pencil</li>
        <li>Cutter</li>
        <li>Sopner</li>
        <li>Sopner</li>
        <li>Sopner</li>
        <li>Sopner</li>
        <li>Sopner</li>
        <li>Sopner</li>
        <li>Sopner</li>
        <li>Sopner</li>
        <li>Sopner</li>
        <li>Sopner</li>
        
        <li>Sopner</li> 
    </ol>

    </div>
  )
}

export default CartPage