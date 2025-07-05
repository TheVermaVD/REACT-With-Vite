/*

#Lazy Loading : Lazy Loading optimization is react application laoding speed inreasing by differing the heavy complex component loads lately.

In React, Lazy loading is a technique that allows you to load components, modules, or assets asynchronously, improving the loading time of your application. 

It can be achieved by using two - React.lazy() method and <Suspense fallback={<>Loading...<>}> ... </Suspense> Component of React which basically provides the child component i.e Lazy Component loads with its taking time with providing the callback component to get rendered untill the Lazy component doesnot get rendered.

Note: Lazy loading is concept where In react, doesnt load all i.e entire component at a time on UI where as the one which we identified as laoding time is high coz of some complex task then we call/import that Heavy Component via lazy laoding method which helps laods other component before hand lazy component which will load once it fully ready meanwhile other component already rendered.


Steps To Enable Any Normal Component Into Lazy Loading Component on UI -

step1 : Firstly, Recognize which component in application needs to be imported with lazy() method and then display on UI. These Components are mostly Large or complex which is not necessary for all the users when the page loads.

Step2: Import lazy() method and <Suspense> component from the React package -

      import { lazy, Suspense } from 'react';

Step3:   Now, Import that heavy i.e Normal Component which needs to be laoded as Lazy Component on UI, like this - 

     const LazyComponent = React.lazy(() => import('./MyComponent.js'));

Here, lazy method takes a function that returns the import() with provided path and this lazy() method returns a lazy-loaded component i.e applied lazy method, then further we Wrap this lazy-loaded component in a <Suspense> component, which will display a fallback UI Message while the component is being loaded -

      <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
      </Suspense>


Notee : In General, Lazy loading is a technique for waiting to load certain parts of a webpage — especially images — until they are needed. Instead of loading everything all at once, known as "eager" loading, the browser does not request certain resources until the user interacts in such a way that the resources are needed.




*/

import React from 'react'

export default function LazyLoading() {

    console.time("result")

    for(let i=0; i<1000000000; i++){
        //Some Operation
            }

    console.timeEnd("result")

  return (
    <>

    <h2>This is Lazy Component Means this component taking some time to load or render and if it Invoked to parent component then Parent Component Context will also be dependedent upon this child i.e Heavy Component to laod all toghter a time : </h2>

    
    
    </>
  )
}
