import React from "react";
import { Fragment } from "react";

function HealthyFoodItems() {

// #List Rendering with 'Map' method In React and Must 'key' props for all list rendering: -
  

  //Note: As we known that we can't use classic for loop inside JSX code, JSX code accepst only js expression, so we need to use javascript map method to fullfill the result as js expression as output.

  // Cause : To render any Array's data on JSX either we have to use any loop or array Higher oder methods i.e map or filter as we can't use any for loop inside JSX so we need to use map method to List all array data on JSX Indivisually. 

  

  // #Map Method in Javascript : It is use to loop over the array's all element and return an array having operated array results.  

  //Purpose : With JS Map method we can easily render list of data from an Array to the JSX code indivisually.

  // Note : JSX elements i.e code Transform any array items into indivisual values and renders it on UI, i.e On looping over an array data with map methods, it returns a new array of JSX nodes, which could pained inside JSX code as indivisula values.
 

  // How to use map method for list rendering -

  // i) Directly inside JSX : {itemsArray.map( item => <li key={item.id}> {item.name} </li> )}

  // ii) 

  //Key props : It is concept of React's any list rendering to have a unique key to each list to identify uniquely each.

  // It is assign uniquely to optmized re-rendering for reactjs application.

  // <div key = {item.id}> {item.name} </div>

  // key props use to not re-paint list when component re-renders, which improve app performance. 

  // Note : key props is the react Virtual DOM concept which isnt adds into Real DOM, key props comes for app performance imporve by not rerendering list items again. 

  const foodItems = []; //False case i.e empty, null, undefined, zero, empty string("")

  // const foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];


  const item = foodItems.map(item => <li> {item} </li> );  //Return a new array containing <li> items JSX nodes.

  // Now, Return this items (wrapped in a <ul>) inside JSX which transfers array's each item nodes into UI structure -

  // return <ul>{item}</ul>;

  // console.log(item, typeof item);
  // console.log(foodItems.map(item => item))


  //  footItems.forEach(item => console.log(item));
  

  // #Conditional Renderig In React :-  We know that we can't use if-else, for-loop or any js code directly inside JSX, except JS expression. So For contional rendering in jSX, we can use JS expression as ( in place of if-else statement) -
  // 
  // a) Ternary operator(?:) - Quick way to choose between two options.

    //{ !condition ? <div>Error do it again! </div>  : <div> Congratulations</div>}
  // 
  //  b) Logical Operators(&&)/Short Cirtcuit Operator : Rendering content based on only one condition is true.

  //  {condition && <div>Congratulations </div>}
  
//Condition Rendering Using if-else Statement : It can be use outside of JSX code where we have to return as many JSX code as per if-else conditions.(NOT Recommended by react) -


  
  // Defination : Display content on UI based on some certain conditions.

  // It allow for dynamic user interfaces. 

  // #Conditional Rendering In React Using -
  //  a) if-else statemeents - choose between two blocks of content!
  
    // if(foodItems.length===0){

    //   return <h3>I'm Still Hungry !!</h3>
    // } //here, in else part below code executing while if-statement is false.

    //b) Ternary operator : Quick way to choose between two blocks of content -

        let emptyMessage = foodItems.length ===0 ? <h3>I'm Still Hungry !!</h3> : null ;

    //  c) Logical Operator : Logical AND operator, which is use if any condition is true then executes i.e if first condition is true then next value get render on UI and if first condition is false null value get render on UI.

    //Use to render only one content, if condition is true, for false contion value it render null.

    // Benfits : a) Enhances  user experince.
    // b) Reduces unnessary rendering.
    // c) Makes app more interative and responsive.
    // d) Only Shows Code which require as per condtion and dont render all the code all the time on DOM of the browser.


  return (
    <React.Fragment>
    
      <h1>Healthy Food</h1>

      {/* b) Ternary operator : Quick way to choose between two blocks of content */}

       {/* {emptyMessage} */}

      { foodItems.length ===0 ? <h3>I'm Still Hungry </h3> : null }

      {/* c) Logical Opertator/Shortcircuit Operator */}

    {/* {foodItems.length === 0 && <h3>I'm Still Hungry</h3>} */}

       

{/* NOte : If there is any null, undefined, empty, zero, NaN --> then JSX ingnores to render on the UI. */}

      <ul className="list-group">
        
        {/*  <li className="list-group-item">{foodItems[0]}</li>
        <li className="list-group-item">{foodItems[1]}</li>
        <li className="list-group-item">{foodItems[2]}</li> */}

        {/* {item}   */}

        {foodItems.map( item=> <li className="list-group-item" key={item}> {item} </li>)}

 
      </ul>
    </React.Fragment>
  );
}

// Note : Now Lets Break this HealthyFoodItems Component into Four more components i.e FoodTitle, FoodItems, IndividualItem(for more clarity and may be css apply), ErrorMessage. Then, we will see the use of props i.e used to pass data from parent to child component.



// --------------------------------------------------------------------------

// Let Take another example with filter() method to render 'names' whose profession is 'chemist' only on the UI - ( having array of objects )

const people = [{

  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',

}, {

  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',

}, {
  
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',

}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',

}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',  
  profession: 'astrophysicist',
  
}];

function ListRenderingWithFilter() {

  // First we filter the given data i.e array items with containing only  profession: 'chemist' by person.profession === 'chemist' -

  const filterData = people.filter((item) => item.profession === "chemist");

  // console.log(filterData); //Returns only two array items only containing profession : chemist.


  return <>

  {/* Now, To render the filterData names, we directly render On UI using map method (with assigning a unique key as id) -- */}

    <ul>

      {filterData.map( item => <li key={item.id}> {item.name} is a chemist !!</li> )}
      
    </ul>
  
  
  </> 
  
};




export {HealthyFoodItems, ListRenderingWithFilter};
