import React from 'react'

export default function UseEffectCleanUp() {

  /*

  // App Perfomace Improvment : When we intentionally try to return a function from useEffect() hook, that works as cleanUP UseEffect() Hook means whatever side effect task we peforming immediatley stop when we moved to other page of APP.

  Note : useEffect() cleanup works only when Our React have Routing Provided so that out app have multiple page to move to other page and useEffect() cleanup can work.;by which Our React APP performance get improvement in loading pages.
  
  Working : Returning a function from  `useEffect` allows for cleanup, ideal for removing event listeners or any side effect task to stop or cancel immeditaly.
  
  Some effects require cleanup to reduce memory leaks.

  Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.



#Example1 : When counter is updating continously on page load, so as soon as we leave to other page of the App, then the count updation will stop.

#Example2 : When we move to other page of React app, we want our API call if not loaded on HOME page, get stop we if moved to other section of the app.

#Example3 :When we have current Clock timing or current date showing/updating on a page and ofcourse its completely running, but we want when user moved to other page of the app, It get stopped and when user back to the CLockpage, it start running again.

#Example4 : As there are many API, we load that works on LIVE data showing like suppose we want to display stock price of doller, sensex..so if we fetch these API, so It will load live everytime, but if we applied useEffect() cleanup then as soon as user move to ther page of the app, this useEffect() task will get cancelled unitll user dooes not get back to same page and again the componeent will laod.

Example5 : In fullstack app, Suppose we have did database connection, API connection, heavy resources taken which may be time taking, so when user move to other page of the app, we stop the connection for these so that less internet consume of user, fast laoding experince etc.
  

  */


const [count, setCount] = useState(0)

  useEffect(()=>{

    const id = setInterval(()=>{

        setCount(prev=> prev+1)
          console.log("Rendered once App Load")


      }, 2000)    
      
      return ()=>{

        clearInterval(id)
        console.log("useeffect Cleanup Occured...")
      } 
  }, [])



return (
  <>

  <h1>I have rendered : {count}</h1>
   
  </>
)
}
