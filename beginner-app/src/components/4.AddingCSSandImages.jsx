import "./myCSS.css"
// import myModuleCSS from "./myCSS.module.css"
import myImage1 from "./../assets/vijay1.jpg"
import myImage2 from "./../assets/vijay2.jpg"

export default function AddingCSSandImages() {

    
    // # Adding CSS In React : Unlike Adding CSS in Javascript files, In React it is slightly different coz React works on Components which are inter-connected with Parent-child-subchild-etc. So Applying to CSS to each Indivual Component is slight different.

    // In React We can do the stylings, We have -

    // i) Global Styling : Global Styling In React, means write CSS file in either two folder Index.css or App.css which are Global CSS files, that keeps render on all React app. So whenever there is something common or want to keep CSS Global then we can put that into these files. Coz React works on hirachly way of arrangement of components from TOP Parent to Inner Child.

    // ii) Inline Styling : In form of JS object, we insert CSS to JSX code.

    // Either we use camelCase as CSS property name or In string if we want to keep CSS by-default property name.

    // iii) External Styling/Style Sheet : This is not mostly prefer in React to use, where we can create a indivisual files for each Component for CSS. Coz here there is chances of CSS collapse with other component CSS.


    // iv) Module Styling : As we can not import indivisual Component CSS, coz of CSS properties conflicts in External CSS. React introduces module CSS styling where these styling available to only imported component only. This can be achieved via name the StleComponent with .module.css and write your desire CSS. 

    // When to use these module CSS into JSX component, then import that CSS file with a 'variable-object' which will hold the all CSS properties as object properties to get into use.

    // NOte : When we working with any module CSS, how does react work internally to distingues CSS file from other CSS files. when These CSS modules get rendered on UI, browser creates a unique key-code corresponding to each CSS files while rendering.



    // v) CSS Framework Styling : Bootstrap or TailwindCSS (We can take the popular frame-work to work with styling In React with fast forward without leaving our JSX page, best suitable with React is tailwindCSS, industry favourit and fast growing.)

    const myStyle = {
      backgroundColor:  "#776691"
    }

    const myObject = {

      name : "Prakash",
      age : 23,
      prakashStyle : {

        color : "red",
        backgroundColor : "DodgerBlue",
        padding:  "10px"


      }

    }


    // # Adding Images In React : We can add images via two ways -

    // a) using Absoulute Link : Not prefer coz it is live image link which may cause error in future.

    // Note : We can adjust the image width with 'width' attribute with adding ist value as width = {200} takes 200px.

    // b) using Relative Link : First of all store all images in assest folder in react and then import all images indivisually on to the top of COmponent with a variable name respectively to use in <img> element.



  return <>
  
  <h1>Lerning React</h1>
  <p style={myStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores soluta rerum, laborum reprehenderit velit quibusdam. Magnam ipsa harum in tempore?</p>

  <b>Checking</b>

  <p style={{backgroundColor:  "#776691"}}>Lorem</p>

  <b>checking</b>
  
  {/* <p style={{"background-color":  "#776691"}}>Lorem </p> */}

  <p style={myObject.prakashStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, aliquid.</p>

  {/* Global CSS and External CSS - */}

  <h2 id="text-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, magnam.</h2>

  {/* Module CSS */}
  {/* <h2 className={myModuleCSS["learnig-bg-yellow"]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quae vero dolores excepturi in assumenda quisquam quia ratione quasi consectetur!</h2> */}

  {/* // Adding Images - */}

  <h1>Absolute Image</h1>

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s" alt="" width={400}/>

  
  <h1>Relative Image</h1>

  <img src={myImage1} alt="" width={500}/>
  <img src={myImage2} alt="" width={500}/>




  </>



}
