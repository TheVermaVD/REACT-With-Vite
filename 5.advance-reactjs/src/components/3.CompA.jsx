
import React from 'react'
import CompB from './4.CompB'
import { useContext } from 'react'
import { CheckContext } from '../store/1.CheckDataContext'

export default function CompA() {

    const {check1, check2, handleCheck} = useContext(CheckContext)

    console.log("From Component A :", check1)
    console.log("From Component A :", check2)
    console.log("From Component A :", handleCheck())

  return ( <>
    
        <h4>CompA</h4>
        <CompB/>
        </>
  )
}
