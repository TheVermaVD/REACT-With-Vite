import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Header() {

    const headerStyle = {
        position : 'sticky',
        top : 0,
        height : '100px',
        backgroundColor : 'blue',
        zIndex:  10,
        padding:  '10px 10px',
        color : 'white',

    }

    const navBarCSS = {
        display:  'flex',
        gap : '20px',
        justifyContent: 'right',
        alignItems: 'center',
        listStyle: 'none',
        // border: '1px solid red',
        color : 'white',


    }


        const nevigateMethod = useNavigate()
        // console.log(nevigateMethod)

        const id = 8 ; //Want to use at desination means at /cart page  from this 'Header' Component - 


        console.log("Header Component getting Rendered...!!")

  return (  <>
    <div style={headerStyle}>

        <h1>Header</h1>
        <nav>
            <ul style={navBarCSS}>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/about-us">About</Link> </li>

                {/* <li><Link to="/cart">Cart</Link> </li> */}
                <li> <button onClick={() => nevigateMethod("/cart", {state : {userID : id}}) }>Cart</button> </li>

                <li><NavLink to="/blog-page">Blog</NavLink> </li>
                <li><NavLink to="/login">Login</NavLink> </li>
                <li><NavLink to="/signup">Signin</NavLink> </li>

                {/* Static Data "wow" passed to dynamic ROute- */}
                <li><NavLink to="/user/wow">User</NavLink> </li>
                <li><NavLink to="/products">Products</NavLink> </li>
               
            </ul>

        </nav>
        
        
        
    </div>

    </>

 

  )
}

export default Header