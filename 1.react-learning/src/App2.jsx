import React, { useState } from 'react'
import LearnState from './components/2.useState'
import LearnUseEffect from './components/5.useEffect'
import LearnUseRef from './components/6.useRef'
import LearnForms from './components/7.usingForms'
import LiftingStateUp from './components/8.LiftingStateUp'
import Component1 from './components/9.PropsDrilling'
import { ContextElement } from './store/userContext';



export default function App2() {

//using React Context : TO share i.e available state data across entire APP(It reduced sharing data via props and also avoids props drilling in nested components.)

const [rwdyName, setRwdyName] = useState("Prakash Verma"); //This prakash data we sharing across app.


  //Lifting Data Here : -
  
  function getData(data){

    console.log("The Name is From Lifting State Up Component :", data);

  }


  return ( <>

<ContextElement.Provider value={{
  rwdyName : rwdyName,
  getData : getData  
}}>
 
    {/*  <LearnState/> */}

     <LearnUseEffect />
    
     <LearnUseRef />
    

    {/* <LearnForms/> */}

    {/* <LiftingStateUp getData={getData}/> */}
    
    {/* We sending Data i.e state or function or any thing via Context - */}
    <LiftingStateUp/>

    {/*  <Component1/> */}

    </ContextElement.Provider>

    </>
  )
}



