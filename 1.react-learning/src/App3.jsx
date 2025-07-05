// import React from 'react'

import LearnDataFetch from './components/11.DataFetch'
import BharatClock from './components/12.BharatClock'
import LearnSendData from './components/13.PostData'
import LearnReactMemo from './components/14.memo'
import LearnUseCallback from './components/15.useCallback'
import LearnUseMemo from './components/16.useMemo'

import LearnUseStateWithObjectData from './components/3.useStateWithObjectData'
import LeanrUseStateWithArrayData from './components/4.useStateWithArrayData'
import LearnCheck from './components/Check'
import LearnCounterWithCustomHook from './components/CounterWithCustomHook'
import LearnFetchDataWithCustomHook from './components/FetchDataWithCustomHook'
import { lazy, Suspense } from 'react'

// Normal Loading of Any Component In React -
// import LazyLoading from './components/17.LazyLoading'

//For Lazy Loading Component, we import component with React's lazy method where this method accepts a argument as function and there we provide the import(<path_of_component>) and finally this lazy methid returns a Promise based component which further need to wrap inside <Suspense> component with 'fallback' attribute as optional for adding laoding time temporaly component on UI.

const LazyComponent = lazy(()=> import("./components/17.LazyLoading"));
console.log(LazyComponent);


export default function () {
  return (
    <>

    {/* <LearnDataFetch/> */}

    {/* <BharatClock/> */}

    {/* <LearnReactMemo/> */}

    {/* <LearnUseCallback/> */}

    {/* <LearnCheck/> */}

    {/* <LearnUseMemo/> */}

    {/* <LearnSendData/> */}

    {/* <LearnUseStateWithObjectData/> */}
    {/* <LeanrUseStateWithArrayData/> */}
{/* <LearnCounterWithCustomHook/> */}

{/* <LearnFetchDataWithCustomHook/> */}

<h2>This Parent Component Independent of Heavy COmponent</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi provident veritatis cupiditate quam ea perspiciatis earum placeat recusandae autem eum!</p>
{/* Normal Component - */}
{/* <LazyLoading/>  */}

{/* Component with enabled Lazy Loading - */} 
<Suspense fallback={<center>Loading Data...</center>}>

  <LazyComponent/>    

</Suspense>

    
    
    </>
  )
}
