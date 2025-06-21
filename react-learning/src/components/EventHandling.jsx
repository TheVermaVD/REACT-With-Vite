

export default function EventHandling() {

    // First way:-

    //Case:I - event handler function without parameters -
    function handlerFx(){

        console.log("Clicked Butto")
    }

    //event handler function with parameters -
    function handlerFx(a,b){

        console.log("Clicked Button", a+b)
    }

    // 'event' object accessing for with or without 'event' or 'e' object added as argument to function invoked.  -

    function Check(e){

        console.log(e);

    }

    function Check2(e){

        console.log(e);

    }


    function handleOnChange(event){

        console.log(event.target.value);

    }
    
    // -----------

    function foo(e){
        e.preventDefault();
        console.log(e)
        console.log(e.type); //event name like click or change
        console.log("Executed")

    }
    
    function handlerClick(e){
        e.preventDefault();
    }


  return ( <> 
  
   <div>Event Handling</div>

   {/* //event handler function without arguments - */}
    <button onClick={handlerFx}>Click ME</button>

    {/* //event handler function with arguments - */}
    <button onClick={function(){handlerFx(3,5)}}>Click ME 2</button>
 
    {/* Will execute as soon as this component get rendered.. */}
    <button onClick={console.log("Ram is great")}>Click ME 3</button>
    <button onClick={function(){console.log("Ram is great 2")}}>Click ME 4</button>


{/* //Without 'event' object added as argument to event handler function */}
    <button onClick={Check}>Hey Click</button>
    {/* With 'event' i.e 'e' object added as funtion argument to see event object clearly */}
    <button onClick={(e)=> Check2(e)}>Hey Click 2</button>

    {/*Handling input box with or without 'event' object passed as argument to function invokation -  */}
    <input type="text" onChange={(e)=> console.log(e.target.value) }/>
    <input type="text" onChange={handleOnChange }/>

    <input type="text" onInput={(e)=> console.log(e.target.value) }/>

    {/* //Default behavior stopping of form submission - */}
    <form action="">

        <input type="text" name="name" value="Prakash"/>
        <button onClick={foo }>Send</button>

    </form>

    {/* Default Behaviour of opening a new page on anchor click - */}
    <a href="https://www.w3Schools.com" onClick={handlerClick}>W3School</a>


    </>
  
  )
}

//Note: alwsy use function defination name as event handler function not invoking i.e -

// onClick = {check} not onClick = {check()}

// Note: If we used HandlerFx() or console.log("Ram Sita") i.e any method with its parathensis, then React doesnot wait for the event hnadler function to be executed on user action/click, it executes automically once the component get rendered.

//Note : To use HandlerFX() with parenthesis or function with argument calling then user must use a arow function or anonymous/arrow/normal function to wait for react to click by user on the event to get executed.

//Note: Just like Javascript, We can pass 'event' object as argument to function. 'event' object contains all the details about the event, like type, value, target, ID, etc.

    // Note : 'event' object uses -

    // e.target.value = input box value
    // e.target.value = file input box value
    // e.preventDefault() = stop the bydefault nature of event behaviour, like stop form submission of button click, onClick or onSubmit.
    //e.stopPropagation(); //To stop event bubbling (if event applied on the any level at parent level).