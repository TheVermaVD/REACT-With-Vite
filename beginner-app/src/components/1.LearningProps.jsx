

export default function LearningProps({a, b, c}) { 

    /*

    Props : • Short for properties
            • Mechanism for passing data.
            • Props data Read-only by default

            Usage:-
            • Pass data from parent to child component.
            • Makes components reusable. 
            • Defined as attributes in JSX, we pass props data as key-value attributes, here key name recived by child component and data stored in value part of attribute.
            <ChildComp item = {allItems} />

            Key points:-
            • Data flows one-way (downwards).
            • Props are immutable, we can't change.
            • Used for communication between components.
            


    // Props data use in order to re-use component in a better way, here, we use defined component at parent and then we pass props data into parent component which get uses at its child component. It is a like function, define function and then use it as to one level up i.e at Parent level and display Different UI with passing different props data while invokation of fcuntion at parent element.
    
    // Note : We basically store all data(might be coming from database like mongoDB, via network call, server call) at main Parent COmponent coz, we consider, In react each component is blindless/independent and only responsible for displaying UI as per data received from parent component.
    
    // Most of the UI painting React component will be dumb, like dont have any responsibility of loading or fetching data, they just dependent upon the recceiving data from their parent component.

    
    // Parent Component always take the responsibility of gathering all data and sending it back to all Child Components for painting UI as per data needed by them.    
    

    NOte(Very Imp) : Whenever any rendering data from JSX get changed by any ways like statically change, props data change, state data change or any ways means on which our JSX rendering data dependent then, JSX or Component again will render so that we will see the updated UI/result on the browser.
    

 
    
    */




    
    // console.log(props)

    // const {a, b, c} = props #using object destructing we can de-structure the object data/propertie easily.


    // props.a = "wow" # Recived props data are read-only.

  return ( <>
{/* 
    <div>LearningProps {props.a}</div>
    <div>LearningProps {props.b}</div>
    <div>LearningProps {props.c}</div> */}

    <div>LearningProps {a}</div>
    <div>LearningProps {b}</div>
    <div>LearningProps {c}</div>

    </>
  )
}
