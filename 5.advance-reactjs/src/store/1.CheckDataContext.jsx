import { createContext } from "react";

export const CheckContext = createContext({

    check1 : "", //It a string type
    check2 : "", //It a string type
    handleCheck : ()=>{} //It a method type

  })

//Note: We have declared the default value for respective data, in case fallback of all these.