import style from "./App.module.css";
import InputDisplay from "./components/1.InputDisplay";
import CalButtons from "./components/2.CalButtons";
import { useState } from 'react'

function App() {


  /*  # Main Logic of Building Calculator Project :- 
  
  step1 : Firstly we bubble the Calculator Button click to its parent element i.e on InputDisplay COmponent.
  
  Step2 : Parent Component will set the recived data in the state using usestate and finally show it to the user, wwhen user clicks on equal to buttom.


  */


  // We defined the function here, will call/invoke in Child Element -
  const getTheButton = (myButton)=>{

      // console.log(myButton) //Will receive all button cliked here. 

      // setDisplayValue( prev => prev + myButton)

      if(myButton==="C"){

        setDisplayValue("")

      }else if(myButton=== "="){

        // Approach1 : To Evaluate all string digit calculation using 'eval()' function which takes all string value and get evaluated result -

        const result = eval(displayValue)
        setDisplayValue(result)

        // Approch2 : Since each Entered button we getting in string so we need to first convert it into integer then we can perform the net evaluation using javascript inbuilt net calculation -

          // console.log(displayValue, typeof displayValue) // "44+234./431-9"

          // const displayIntegerValue =  + displayValue
          // console.log(displayIntegerValue)

        // let sum=0
        // for(let i=0; i<displayValue.length; i++){

        //   // console.log("Indexing", i)
        //   console.log("Indexing values from string", displayValue[i])

        //       sum += (+i)
        // }

        // console.log(sum)
        


      }else{

        setDisplayValue( prev => prev + myButton)


      }
  }

  // InutDisplay i.e Child Component 'State' Here -
  const [displayValue, setDisplayValue] = useState("")


  return (
    <>
      <center className={style['main-container']} >

          <InputDisplay displayValue= {displayValue}/>

          <CalButtons getTheButton={getTheButton}/>

        
      </center>
    </>
  )
}

export default App
