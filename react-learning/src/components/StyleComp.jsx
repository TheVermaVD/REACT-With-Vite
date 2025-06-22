import React from 'react'
import "./../App.css";
export default function StyleComp() {

    const myObj= { 'background-color': "#776691", color:"white"};
    // const myObj= { backgroundColor: "#776691", color:"white"};

    const myObj2 = {

        name : "Prakash Verma",
        age : 23, 

        myStyle : {

            color: "white",
            backgroundColor: "DodgerBlue", 
            padding: "10px",
            
        }
       
      };

    /*

    There are mainly three ways of css styling in React -

    a) Inline CSS Styling : We insert style inside JSX as JS object.
    b) External Style Sheet/Global CSS : Like App.css, Index.css 
    c) Exteral Module CSS : To avoid the class name conflicts and overriding the CSS coz of same name conflicts as per Parent Component added external CSS. We use just use css file name as 'componentName.module.css' which get converted into indivisula codes for each resptive components.
    
    
    
    
    
    
    
    
    
    */
  // #Global CSS In React :-



    // Note : We Add inline css in React as JS object where css name-value pair defined as cammel case for name and value as string formate unline js css.

  return (
    <div>

        <h1 style={{backgroundColor: "#776691", color:"white"}}>Heading </h1>
        <p style={{ 'background-color' : '#776691'}}>Heading 2</p>

        <h1 style={myObj}>Heading 3</h1>

        <h1 style={myObj2.myStyle}>Heading 4 Name is {myObj2.name}</h1>

        <h1 className='kg-span'>Heading 5</h1>
        <span className='logo'>Logo</span>
        




    </div>
  )
}
// # Module CSS Concept In React : - It comes for localizing class names to only respective component rather global components conflicts.

// As sometimes class names get repeated in the application so if we added css of all files at one file then  it gets  replace with latest i.e last one and if there is indivual css file for each.



//  CSS Module : Applies CSS to only selected Component unlike on other components.
// Apply css to only our desire component only.

// Localized class names to avoid global conflicts.

// React provides CSS MOdules compiler which complies at render time on brwoser with added a unique key to each class name respectively not to conflicts any class names with each other on entire react application.

// //Item.module.css
// .meow{
// color : orange;
// }


// //Item.module.css after rendering on the browser after compilation(gets a uniue code for this class name after react css module compilation, which avoids css class naming conflicts.

// .meow_3xk_x{
// color : orange;
// }


// Note : In React Mostly, whenever we work on indivual component css file, we recommend to use css module, as per component naming convention. item.module.css .

