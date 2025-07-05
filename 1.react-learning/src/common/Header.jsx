import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate();
  // console.log(navigate);
  const id = 5; //for example this id will get pass to Enquory page with help of second argument of naviagte function of useNavigate() Hook. 

  return ( <center>
  <h3>Header Part</h3>
<ul style={{listStyleType:'none'}}>

    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/about-us"}>About</Link></li>
    <li><Link to={"/courses"}>Course</Link></li>
    <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
    <li><Link to={"/contact"}>Contact</Link></li>
    <li><button onClick={()=> navigate("/enquiry", {state : {myID: id}})} >Enquiry</button></li>
   

</ul>
  </center>
    
  )
}
