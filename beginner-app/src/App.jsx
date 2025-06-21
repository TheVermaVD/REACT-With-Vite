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
import UseRef from './components/11.useRef'



function App() {
  // const [count, setCount] = useState(0)

  console.log("From App or App.jsx")

  return <>
  
  
  <h1>Hello Rowdyyy </h1>

  {/* <KGButton/>
   */}
   {/* <Hello/>
   <Hello/>
   <Hello/> */}

   {/* <LearningProps a = "We larning Props" b = {4} c = {23} /> */}

   {/* <ListRendering/> */}

   {/* <ConditionalRendering/> */}

   <AddingCSSandImages/>
   <EventHandling/>

   <Hooks_and_State/>

   <UseStatewithObjectData/>
   <UseStatewithArrayData/>

   <LazyInitialization/>

   <UseRef/>


  </>

}

export default App
