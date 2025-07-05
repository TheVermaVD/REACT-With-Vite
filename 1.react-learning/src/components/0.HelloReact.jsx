

/*  
# What is  React ?

React is Javascript Library to build Dynamic and Interative user interfaces. React is just like Js when final code get executed it becomes javascript.


Developed at FaceBOOK in 2011.

React used to create SIngle Page Application(SPA).

React allow us to create reusable UI Components.


# SPA : SPA stands for Single Page Application, is an application that loads only a single document. It allows users to use websites without laoding whole new pages for any subtab clicks or subpart loads, which results in performance gains and a more dynamic experience.Ex: Youtube, flipcard, amazon, facebook are SPAs.


# Working OF DOM : DOM stands for Document Object Model. Whenever any website loads example google.com --< goes to google.com server(ask for files like HTML< CSS and Javascript) --> returns an HTML,CSS, Javascript. Now, It Takes HTML file and create a DOM which is TREE like structure(Parent as Html --> child as head, body(nav, main, sidebar)) once complete page DOM gets ready now takes CSS(with applied #id, .class selectors) and applies all coloring/styling to the respective HTML DOM page.Later, JS helps modify DOM based on user actions or events to add interactive with user actios. e.g with user action delete one DOM one node.


# Problmes with Javscript : -

Javscript has not simpler mental model. whereas React has a simpler mental model like only focus on 'what to do' rather than 'how to do' which follows OOPs abstraction Concept. that only show nessary details to user rather complete. 

JS is hard to maintain, In Big Applications, working with real DOM becomes complecated coz of a lot complexicy in the code. SO, we use React which works on virtual DOM.




# Advantage Of ReactJS over Javascript -

i) JS is imperative(You need to define complete steps to reach your desire state) 

and React is **Declarative(Here, we focus on current Step and Next step i.e You need to define only the desire/target UI or Final State and react figures out how to reach that state.  )

React breaks complete page into small small components.(Where Parent component is APP.jsx)

ii) No need to worry about DOM(getElementByID, etc.) and its updation and quering. It will automacticaly manage by React.

iii) React Creates a web pages with small and resuable component.

iv) React will take care of creating and updating DOM element.

v) It saves a lot of time, cheezein asan hai and pehle se likhihuyi hai. Like In React Component, as per needs we can take someone component from internet and use the logic in our code.



# Components in React :- Components helps us write resuable, more effectively with passing props data, moduler and better code.

Components are independent and reusable bits of code using 'props' only. They serve the same purpose as JavaScript functions, but work in isolation and return JSX(like HTML with embedded Javascipt code into HTML).

Components come in two types: Class components and Function components.


App.jsx ---> The main/master/parent component of React APP. It represent our React App as first main component and futher child component attached to it.


-------------------------------------------------------------------

# Setup a React APP : - we can setup reactAPP in two ways -

i) using CRA(create React App) : It is offial build tool by facebook given -


ii) using vite : Modern and Faster Build tool to quick start React app -




# Difference between babeljs vs webpack ?

BabelJs is a a JavaScript compiler tool that allow us to convert all JSX code into browser compatible javascript code. React uses BabelJs internally to convert all JSX code into pure Browser Compatible js code.

Whereas, webpack is a Module Blunder tool which takes all final javascipt,css, images, fonts etc. and bundles them into one or more optimized output files like bundle.js. webpack also run loaders which is babel to process files before bundling it up.


These two often work together in React Project internally by React App where firstly Babeljs transforms all JSX file into browser compatible javacript files and once React have all Browser compatible js files then webpack comes and takes all compiled javascripts files, css and images and converts into one single bundle js file which browser renders on the page.



# Adding CSS in React : In React, CSS can be directly imported into components files, allowing for moduler and component-specific styling.

NOte : We have two CSS files In React which are GLOBal CSS for entire React APP, which are - index.css(for index.jsx/main.jsx) and App.css  . These both CSS automactically get attached at the top of the index.html(under head section, if we inspect the developer tool). 


# Making React Component Dynamic : We can make React component Dynamic with putting variables/function_call/css_embedd/object etc with cruly braces inside JSX code.

JavaScript Expressions: Using {}, we can embed any JS expression directly within JSX. This includes variables, function calls, and more.


# Props in React : props stands for properties or data for component.

// by using props we can make component more re-usable coz it effectively makes component more dynamic with passing different props/data to same component and resuing it again and again in Parent Component.

once props data passed to child component, then at child component we can't change it. Thus, passed props data are read-only.




# 

*/


 function HelloReact() {

    const myName = "Prakash"
    const age = 24
    
    const fullName = () =>{
        return 'Prakash Verma'
    }

    // Random Number Generate between 0 to 100 -
    let number = Math.random() * 100

    let x = 10

    return <>

    {/* Dynamic Variables/Expressions Uses In JSX -  */}
    <h3>Hello this is the future speaking....I am your master {myName} whose name is {fullName()} and age is {age}</h3>
    <p>The sum is {5+5}</p>



    {/* Inline CSS Learn and Math Module - */}
    <h4 style={{backgroundColor :"#776691"}}>The Random Number is : {Math.round(number)}</h4>
    <h4 style={{ 'background-color' : '#776691'}}>Random Number is : {Math.round(number)}</h4>



    {/* Ternay OPerator LEarn */}
    <p>Ternary Operator Example : { x > 5 ? "X value is Greater 10" : "X value lesser than 10"}</p>


    {/* BootstrapCSS Check - */}
    <button type="button" class="btn btn-primary">Primary</button>

    {/* TailwindCSS Check - */}
    <p className="text-red-600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, obcaecati?</p>
    
    </> 
}


export default HelloReact;
