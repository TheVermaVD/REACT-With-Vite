import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    // Here, we will learn dynamic routing -
    const   obj = useParams()
    console.log(obj) //Will reciebed an obejct  {ourusername: 'ram'}


  return (
    <div>Hey, I'm User : {obj.ourusername} </div>
  )
}

export default User