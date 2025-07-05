import { createContext } from "react";


const todoContext = createContext({

    myToDoData : [],
    handleClick : ()=>{},
    handleChange : ()=>{},


})

export default todoContext