

import React from 'react'

export default function LearningChildrenProps(props) {


    /*

    'children props' : It is nothing but, when ever we use 'prop.children' or direct {children} which is fixed name, that means parent had passed some data which would be nested to the component and that will treated as nested data here.
    

    
    
    */

    console.log(props)


  return ( <> 


        <h1>Hey Prakash We are learning Children Props...!! </h1>

        {props.children}

  
  
  </>)
}
