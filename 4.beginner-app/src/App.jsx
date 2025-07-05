import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import KGButton from './components/KGButton'

import LearningProps from './components/1.LearningProps'
import ListRendering from './components/2.ListRendering'
import ConditionalRendering from './components/3.ConditionalRendering'
import AddingCSSandImages from './components/4.AddingCSSandImages'
import EventHandling from './components/5.EventHandling'
import Hooks_and_State from './components/6.Hooks_and_State'
import LazyInitialization from './components/9.LazyInitialization'
import UseStatewithObjectData from './components/7.useStatewithObjectData'
import UseStatewithArrayData from './components/8.useStatewithArrayData'
import LearningChildrenProps from './components/1a.ChildrenProps'
import FormHandling from './components/10.FormHandling'
import UseRefHook from './components/11.useRefHook'
import LiftingState from './components/12.LiftingState'
import LiftingState2 from './components/12a.LiftingState2'
import UseEffectHook from './components/13.useEffectHook'
import GetDataAPI from './components/14.NetworkGETRequest'
import NetworkDataSend from './components/15.NetworkPOSTRequest'
import APICALL from './components/14a.APICALL_Quick'
import {LearnUseReducer, ImplementUseReducer} from './components/19.useReducerLearning'



function App() {

  // # In case of className, to mix custom class name with bootstrap  or tailwind class name. then -

  // <h1 className = {`  ${style.heading}  bg-red-500 `} > Ram is great !! </h1>

  console.log("App.jsx get Rendered...!!")

  const getName = (inputName)=>{

    console.log(inputName)
  }

  // Ways2 : Lifting State Up-
  const [name, setName] = useState("")

  const handleInputChange = (e)=>{

    setName(e.target.value)
  }

  const handleGetName = ()=>{

    console.log(name)


  }

  return <>
  
  
  <h1>Hello Rowdyyy </h1>

  {/* <KGButton/>
   */}
   {/* <HelloReact/>
   HelloReact/>
   <HelloReact/> */}

   {/* <LearningProps a = "We larning Props" b = {4} c = {23} /> */}

   <LearningChildrenProps>
    
    <b>Hey I'm Children Data....!! </b>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, error sapiente? Maiores provident sit cumque deserunt deleniti cupiditate molestias laborum.</p>
    
   </LearningChildrenProps >

   {/* <ListRendering/> */}

   {/* <ConditionalRendering/> */}

   {/* <AddingCSSandImages/>
   <EventHandling/>

   <Hooks_and_State/> */}

   {/* <UseStatewithObjectData/>
   <UseStatewithArrayData/> */}

   {/* <LazyInitialization/> */}
{/* 
  
   <LiftingState userName = "Prakash" getName={getName} />
   <LiftingState2 handleGetName={handleGetName} handleInputChange={handleInputChange}  /> */}

   {/* <FormHandling/> */}

   {/* <UseEffectHook/> */}

   <UseRefHook/> 

   {/* <GetDataAPI/> */}
   {/* <NetworkDataSend/> */}

   <APICALL/>

   {/* <KGButton/> */}

   <LearnUseReducer/>
   <ImplementUseReducer/>
   

</>

}

export default App
