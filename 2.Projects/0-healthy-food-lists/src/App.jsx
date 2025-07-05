
import "bootstrap/dist/css/bootstrap.min.css";

import { FoodTitle } from "./components/0.FoodTitle";
import { FoodItems } from "./components/1.FoodItems";
import { ErrorMessage } from "./components/2.ErrorMessage";

import myimage1 from "./assets/img1.jpg";
import myimage2 from "./assets/img2.jpg";
import FoodInput from "./components/5.FoodInput";
import { useState } from "react";


// import "./App.css";

function App() {

  // const foodItems = ["Sabji", "Green Vegetable", "Roti", "Salad", "Milk", "Dal"];

  const [foodItems, setFoodItems] = useState(["Sabji", "Green Vegetable", "Roti"]);


// Note : We Breaked HealthyFoodItems Component into Four more components i.e FoodTitle, FoodItems, IndividualItem(for more clarity and may be css apply), ErrorMessage. Then, we will see the use of props i.e used to pass data from parent to child component.

    const stateArray= useState("hey user");
    const textToShow = stateArray[0]
    const setTextToShowState = stateArray[1] //we can write shorter syntax with array destructing.

    console.log("current value of textState: "+textToShow);//if current vaue set none then we get undefined value in console.

    

    // let textToShow= "hey user"

    const handleInput = (e)=>{
        // console.log(e.target.value);
        // textToShow = e.target.value;
        // console.log(textToShow);


        setTextToShowState(e.target.value); //whenever there is any change in the value of previous state to new state then only this function set the current state otherwise not, and if there is change then : setTextToShowState(<found_change_from_previos_state>)  --> set change value to as current state and ---> and repain the entire component again, where we see new UI change.

        //DrawBack : In state change, we see unnecessary re-renders entire component again just coz of one variable value change in the UI, TO avoid this, we


        // --------------------------

        

        
    }

    const handleKeyDown = (e)=>{

      if(e.key==="Enter"){

        const newFoodItem = e.target.value;
        e.target.value="";
        const newItems= [...foodItems, newFoodItem];

        setFoodItems(newItems);

      }

    }

  

    // Stateless : whenever we are inside any component our component is stateless. means we can not store any data inside compoennt

    // state : state repesents data that changes over time. means it is define that suppose a data we need to change over time then we need to store under state.

    //State is local and private to the own component only means state data can be accessible inside own component only.

    //NOte: React design in a way that any state changes means store state data any changes, can cause to re-render the component again, to repain the UI with new changed data.

    //So, In Function component, we use useState() hook of react to store our any state.

    //What is Hook in react : It is a special type of component premade by react to solve our common problems like storing state etc. We can make our custom hook as well for our common problem solution. In React, It is tradition hook can be identify/recognised with its name starts with 'use' keyword starting.

    //hooks can be used only inside the react functional components.
    //React Functions that starts with word 'use' are called as hooks.

  /*

#useState() Hook : It 'react' package hook, and can be used only inside the functional component. How to declare/use -

whenevr we declare useState(), it returns an array having two Elements contains, 1st element : current value of our state ; 2nd element : a method or function by which we can edit i.e update i.e change or state value over time. 

  
  
  
  
  */


  return (
    <>
      <FoodTitle />
      <ErrorMessage foodItems={foodItems} />
      <FoodInput handleInput={handleInput} handleKeyDown={handleKeyDown}/>
      <p>{textToShow}</p>
      <FoodItems foodItems={foodItems} />
      <div>
      <img src={myimage1} alt="" width={200} />
      <img src={myimage2} alt="" width={200} />
      </div>
     
    </>
  );
}

export default App;
