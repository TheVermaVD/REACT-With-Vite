import { createContext } from "react";


// using React Context : To share i.e available state data, function(for actions), array, object etc. across entire APP(It reduced sharing data via props and also avoids props drilling in nested components.)

// Advantage 'Logic Seperation' : This helps keep the 'UI and business logic' seperate from each other.

//Disadvantage : Whenever any context data changes complete app get re-painted.

// #Folder Setup : use a store folder to keep all context files for all different states.

// Initialization : - createContext with initial data i.e state value which being ignored after passing data or state in 'value' attribute to Context provider.

//Context Create: First we create context for each state or data we want to share and we wrap up around the element where we want to share our data with <context_element.provider value={<data>}> ....  <context_element.provider/>


export const ContextElement = createContext({
    rwdyName : "",
  getData : ()=> {}
}); //we passed default value when <ContextElement.Provider> Component isnt passed as Wrapped Parent to TOp level component in application, then while accessing this contextElement we get default value there, which get ignored when we pass data in 'value' attribute to the ContextElement.Provider value={<Data>} .

// console.log("context object : ", ContextElement);

/*

//Context Provider : Use Context Provider to wrap the tree of components that need the state Context. i.e Wrap child components in the Context Provider and supply the state value.

Now, all components in this tree will have access to the user Context.

//Context Consumer : In order to use i.e consume shared data i.e Context in a child component, we need to access it using the useContext Hook. 

const contextValue = useContext(<some_context>); //always takes created context object.

Note : useContext returns the context value for the calling component. It is determined the value of'value' attribute passed to the closest SomeContext.Provider above the calling component in the tree. If there is no such Context Provider added, then the returned value will be the defaultValue you have passed to createContext for that context. The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.










*/