import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App_ContexrtAPI_Working.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Header from './shared/Header.jsx';
import Footer from './shared/Footer.jsx';
import About from './pages/About.jsx';
import CartPage from './pages/CartPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import User from './pages/User.jsx';
import Products from './pages/Products.jsx';
import ProductMore from './pages/ProductMore.jsx';


/*

# React-Router Dom : -

# Routing Provided to React APP, to nevigate to different pages of app with different ULR wih same domain like kgcoding.com/movie, kgcoding.com/blog etc.

Advnatage : BY doing routing, we can share any specific page link to someone to visit to same page. 

DisAdvnatage : As we know React developes Single pAge application(SPA) means without loading page we can view other section of the page but doing routing we 


Why We needed Routing In React : -

A specific url should know the specific component unlike everthing means all components get loaded on the one page. So we distributes as per our need components into multiple page with its hitting URL.


## There are three ways react-routing can be setup provided by react-router-dom as well -
a) Declartive Routing : Old style based
b) Data Routers : using createBrowserRouter, RouterProvider(with'router' attribute)
c) Framework style Routing

We Following Second one - # Data Routers : -

Advantage of using this : It supports loaders, actions, and better error handling, code splitting and also more scalable approch today.


# Steps to setup of React Routing using 'Data Routers' way : -

Step1 : >npm i react-router-dom  (Install react-router-dom)

Step2 : Import two main component with same name from 'react-router-dom' -

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

Step3 : Inside, .render(<App/>) of main.jsx, replace with following -

    createRoot(document.getElementById('root')).render(

          <RouterProvider router={allRouters}/> 

      )

Step4 : Now, call createBrowserRouter() method from 'react-router-dom' which accepts an array of objects, where each object responsible for defining page routing with passing mainly two properties path and element and we assign its repective values --

  const allRouters = createBrowserRouter([  //It accepts an array having all component routings as object -
    {
      path :"/", element : <App/>
    },
    {
      path :"*", element : <b>Hey, This is 404 ERROR PAGE !</b>
    },

    {
     path :"/blog-page", element : <h1>This is Blog Page</h1>
    }
  ])

  
  // Some Imortant Essense of using 'React-Router-DOM' :-

  // 1) To stop Reloading Component Again and again on Routing, use following two ways -

  a) use <Link> or <NavLink> Element of react-router-dom : We get <Link> element with 'to' attribute from 'react-router-dom' to use in place of anchor tag <a> with 'href' attribute coz anchor tag reloads the routing components everytime when URL/component loads. SO by using react-router-dom's <Link> element to avoid reloading component loading again and again. Ex: 

  Syntax : <Link to="./cart"> Google </Link>   OR,
           <Link to= {"./cart"} > Google </Link> 

      instead of <a href="./cart " >Google </a>

  Where, to= string 
       to= object  ; Path name of URL must be in strig representation/quotes. 

  Note : <NavLink> is same like <Link> element but we get one extra class i.e class="active" whenever <NavLink> used component get clicked.So we can add some CSS whenever the active tab is clicked. 


  b) use 'useNavigate' Hook of react-router-dom : It is also full fill the purpose of not reloading component on routing and negivating to other component smoothly just like <Link> Component but It is use with EventHandler methods like onClick handler nevigate to other page -

        const nevigateMethod = useNavigate()
        // console.log(nevigateMethod)

     <button onClick={() => nevigateMethod("/cart")>Cart</button> 

  Here, useNevigate() hook returns a method which accepts a path to re-direct to other page.


  Note : By this hook, we can also send some data to destination page from source page while redirecting with help of 'state' object to second argument to the naviagteMethod of useNaviagte() Hook and same 'state' object at desination page can be access with help of uselocation() Hook; without use of props to pass data -

      const id = 8 ; //Want to use at desination means at /cart page  from this 'Header' Component - 

     <button onClick={() => nevigateMethod("/cart", {state : {userID : id}}) }>Cart</button> 

 NOw, At desitnation page, we get this id, using useLocation() Hook of React-router-dom -  

    const currentLocation = useLocation(); //Gives current Page URL all details including 'state' property -
    // console.log(currentLocation) //get an object

    console.log(currentLocation.state.userID) // {userID: 5}



2) #Static Routing : Static Routing In React are those at fixed URL, a Fixed Router Page or Component get Called, with Static Data as Content.


# Dynamic Routing : Dynamic Routing In React are those, at variable URL meams after a fixed url followd by slash and then variable unique id or character which is responsible for openig dynamic content on the destination page where Component will be called single but content get changed as per URL different ID hitting.

Ex: a Variable URL Look like this, products/:productID" , here, productID is variable unique id or character. 

Motive : We want to create only one-component to show the details for each component clicked as per their id, that one component holds the different data as per CLicked Item on its Main page.

Dynamic routing means Component will be single, but content getting chaged as per ID received from Source component to here and according to recived id we display that data to current component.


#Why we need to do Dynamic Routing than Static Routing for some case : -
Dynamic ROuting used coz for 100 Products we can not make each product details page with static routing, so we implenmente the dynamic route, it defines as the component will be single called but route location getting changed as per clicked component.









//##Summary: - We need to import some basic component from the react-router-dom -

// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import {Link, NavLink} from 'react-router-dom';

// Some Important Hook that React-router-dom provide us to work with Routing -

// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";



*/

const allRouters = createBrowserRouter([  //It accepts an array having all component routings.
  {
    path :"/", element : <App/>
    // Now, Except '/' URL Hitting, If we enter anything we get an Error to suggest please design your custom ERROR component. coz now, react-router-dom started working.We hanled below -
  },
  {
    path :"*", element : <b>Hey, This is 404 ERROR PAGE !</b>
    /*Custom Erorr Page/Component get Called when there will be No route match by user URL entered */  
  },
  {
    path :"/blog-page", element : <h1>This is Blog Page</h1>
    // TO add space between url, use cobbab case like blog-page to look url seperated.
  },
])


const layoutRouting = createBrowserRouter([
  {
    path: "/", element : <>
                            <Header/>
                            <App/>
                            <Footer/>
                         </>
  },
  {
    path : "/about-us", element : <>
                                    <Header/>
                                     <About/>
                                    <Footer/>
                                </>

  },
  {
    path : "/cart", element : <>
                                    <Header/>
                                     <CartPage/>
                                    <Footer/>
                                </>

  },
  {
    path : "/login", element : <>
                          
                                     <Login/>
                                  
                                </>

  },
  {
    path : "/signup", element : <>
                          
                                     <SignUp/>
                                  
                                </>

  },
  {
    path : "/blog-page", element : <>
                                    <Header/>
                                     <BlogPage/>
                                    <Footer/>
                                </>

  },
  {
    path : "/user/:ourusername", element : <>
                                    <Header/>
                                     <User/>
                                    <Footer/>
                                </>

  },
  {
    path : "/products", element : <>
                                    <Header/>
                                     <Products/>
                                    <Footer/>
                                </>

  },

  // Implementing Dynamic Route for Products page with its productID -
  {
    path : "/products/:productID", element : <>
                                    <Header/>
                                     <ProductMore/>
                                    <Footer/>
                                </>

  },

  {
    path :"*", element : <b>Hey, This is 404 ERROR PAGE !</b>
    /*Custom Erorr Page/Component get Called when there will be No route match by user URL entered */  
  },
])


createRoot(document.getElementById('root')).render(

    <StrictMode>

      <RouterProvider router={layoutRouting}/> 

    </StrictMode>

)
