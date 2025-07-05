import React from 'react'
import CompC from './5.CompC'
import { useContext } from 'react'
import ToDoDataContext from '../store/2.ToDoDataContext'

export default function CompB() {

    const {myToDoData, handleClick, handleChange} = useContext(ToDoDataContext)

    console.log("From Component B :", myToDoData)
    handleClick()
    handleChange()

  return ( <>

        <h4>CompB </h4>
        <CompC/>

        </>
    
  )
}
