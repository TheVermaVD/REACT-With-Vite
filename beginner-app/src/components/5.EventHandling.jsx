import { useState } from "react"
import vijay1 from "./../assets/vijay1.jpg"
import vijay2 from "./../assets/vijay2.jpg"

export default function EventHandling() {

  console.log("Component From EventHanding Componnet")

    // What is Event in browser : Events are those by which user interact to browser like keyboards(presskey,keyup,kepdown), mouse(mousedown), etc. In Javascript browser provies many events types by which we can perform some action usung jS fuction.

    // React uses Synthetic Event which works on React Virtual DOM, rather than the Browser Real Events.

    // Mostly used synthetic events are onClick, onMouseOver, onMouseUp, onFocus, onBlur, onChange, onDrag, onCut etc. All these Events can be used with combining with JS function where on event trigger or action the function will get executed or called.

    // Note : When calling event handler function without argument then just pass the function defination without call. But but if there is function call with argument passed(also for console.log() or any method used ) then user must wrapp this into a arrow function or anonymous function.




    function handleClick(p){

      alert("Clicked")

      // console.log(event)
      console.log(p.type)

    }

    function handleClick2(p){

      alert("Clicked")

      // console.log(event)
      console.log(p.type)

    }

    function sum(a,b, e){
      console.log(a)
      // return a + b


      console.log(e)
      // console.log(e.target.src )

      console.log(e.deltaY)
      console.log(a+b)

    }

    //Note : To update the JSX variable with Event triggering we need to store that data in the state_Variable which can change or mpodify over time, handled by useState() state Hook which is state changes/management.

    // event object : whenever we working with any Events we get an event object bydrfault in the handler function, by which we can get more controll over that applied event.

    // Task : Task on User Image to Pop-up : Hi to user with smily -

    // window.onwheel = function(e){
    //   console.log("Wheeling on 'document' object of the Browser")
    //   // console.log(e) 

    //   console.log("clinetY : ", e.clientY)  // e.y 
    //   // console.log("deltaY : ", e.deltaY)
    //   console.log("offsetY : ", e.offsetY)
    //   console.log("pageY : ", e.pageY)
    //   console.log("screenY : ", e.screenY)
    //   // console.log(e.y )
    // }

    
    // window.onclick = (e)=>{
    //   console.log("Clciked anywhere on the window")

    //   console.log(e)
    //   console.log(e.pageX)
    // }

 

    // console.log(window.pageYOffset)

    const [showText, setShowText] = useState(false)

    function handleShowText(){

        // setShowText( prev => !prev )

        setShowText(!showText)

    }
    

  return ( <>

    {/* Handler function execution without argument passed or function call immediately - */}
    <button onClick={handleClick}>Click</button>
    <button onClick={(e)=> handleClick2(e)}>Clickkkk</button>
    <button onClick={function(){alert("Clicked 2 ")}}>Click2</button>
    <button onClick={()=> {alert("Clicked 3 ")}}>Click3</button>

    <button onClick={()=> console.log("heyyy")}>Click4</button>

    <h2>Sum is :  </h2>
    <button onMouseMove={(e)=> sum(4,5,e)}>Get the sum</button>

    <div>
      <img src={vijay1} alt="" width={400} onWheel={(e)=> sum(4,5,e)} />

    </div>
  

  <p onKeyDown={()=> console.log("keydown....")}  className="bg-sky-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem.</p>


    <div className="flex items-center space-x-4 p-4">

      <img src={vijay2} alt="" width={500} className="cursor-pointer rounded shadow-md" onClick={handleShowText}  />

      {showText && <span className="text-xl font-semibold">Hi</span>}

    </div>

  
  
  </>

  )
}
