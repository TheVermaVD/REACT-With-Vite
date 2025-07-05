import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";  
import App from './App.jsx'
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import App4 from './App4.jsx';


import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';
import Blogs from './components/Blogs.jsx';
import BlogDetails from './components/BlogDetails.jsx';
import Error404 from './components/Error404.jsx';
import Enquiry from './components/Enquiry.jsx';

/*  # What is Routing : To Connnect multi-pages of our application to single page with no refreshing of page while changing the page or redirecting to a different link, We can do all these using react-rounter-dom.

// Install Using from NPM : npm i react-router-dom 

// React Router Dom : As we know React app is single page application means we use one index.html file for our rendering complete project on browser. So if there is need of multi pages on our app, like cart page, profile page, setting page etc. So to so, we need to take help of React Router which provide us to change URL location by keeping on the same page basically it re-direct to a new Component by hitting a new URL on same page, which can be done via React Router Dom .


//We need to import some basic component from the react-router-dom -

// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import {Link, NavLink} from 'react-router-dom';

// Some Important Hook that React-router-dom provide us to work with Routing -

// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";


// #Static Routing : It is fixed that the same component will be open on user click and Details of the page will be static in nature means on every click on the same component it will open same as URL route path will always same which is not in the case of Dynamic Routing.

// A fixed component will call on the fixed URL.

// Dynmic Routing : The url path is not fixed, It changes will respective to different clicks on the page and open same component but with details of clicked page. Here, The same component will call with different COntent on the page.

// A Changable Component will call on the changable URL.


// # Link Component : In place of HTML anchor Tag, react-router-dom provide us to use <Link> component, so that page will not re-fresh on click.

// Syntax : <Link to="./cart"> Google </Link> 

OR, <Link to= {"./cart"} > Google </Link> 

instead of <a href="./cart " >Google </a>

Where, to= string 
       to= object  ; Path name of URL must be in strig representation/quotes. 



// # <NavLink/> Component : It is also similar like <Link/> Component but With <NavLink/> Component we get one inbuit especial class i.e 'active' class whenever user click on any link crated using <NavLink> then that JSX Element gets one active class and when user clicked to other JSX element then that class get disappear.   



// # useNevigate Hook of react-router-dom : It works same like Link Component means to neviage i.e re-direct to other page but with help of this hook, we can pass some data to destination page at the same time while redirecting with help of 'state' object to second argument to the naviagte function of useNaviagte() Hook and same 'state' object at desination page can be access with help of uselocation() Hook; without use of props to pass data.

// Basically, useNevigate() hook returns a function which accepts a path to re-direct to other page which we used to provide in place of 'to' or 'href' attribute.

Syntax:

const hanldeNavigate = useNavigate();

// Navigate to specific path
handleNavigate('/targetpath')

// Navigate and update history stack
handleNavigate('/path', { replace: true });


// #useParams() Hook of react-router-dom : The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.

// Basically, this hook returns an object with key-value pair where key refers to that provided dynamic variable name i.e usedDefine dynmic key name and value refers to the current passed data e.g 'id value' to that key name corresponding.



  */
 
// --------------------------------------------------------------------------

//Frist Setup of all Routes for our application and then we redirect to the our setup routes via <Link> element i.e anchor element for React to not manually enter our route path on URL. 


const allRoutes = createBrowserRouter([

  {path: "/", element: <Home/>},
  {path: "about-us", element: <About/> },
  {path: "courses", element: <Courses/> },
  {path: "blogs", element: <Blogs/> },

  // Dynamic Route Setup -
  {path: "blogs/:pk", element: <BlogDetails/> },

  //Routes Not Found, Route Setup - (Means if any routes enter by user not found the show this page which can be handles by react-router-dom via appllying '*' to the path attribute ie star only called when no routes matches. )

  {path: "*" , element : <Error404/>},
  {path : "enquiry", element: <Enquiry/>}

])

 

createRoot(document.getElementById('root')).render(

  // <StrictMode>
    <App />
      // <App2/>
      // <App3/>
      // <App4/>

      // <RouterProvider router={allRoutes}/>

  // </StrictMode>,


// #<React.StrictMode> : It is react Component, used by react only in development phase not in production phase, by only this we get twice all app painted and can see in the console for every component; basically it added for performance imporvement problem, best practice problem, syntax error problem and give us suggestion while being in development phase.

// #While Development, if we do any mistake react catch us and give us feedback to correct.


)
