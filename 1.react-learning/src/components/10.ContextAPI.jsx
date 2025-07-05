/*

Context API : It comes to picture in react for the solution of Props-drilling in react. Here, we have three major terms in Context API -

create context 
provider
consumer

[What is props-drilling: whenerver we pass unnecessarly the state data to inner child to reach 'parent' state to lowest child component, known as props drilling]



Note : State Management In React across wide app, can be done via variable ways

a) using 'context' of React library(which is Context API or useContext)
b) using react 'useReducer' Hook for complex useState management, replace useState() hook as well.
c) using 3rd party state management library like Redux(uses Flux Architecture to manage folders)


-----------------------------------------

#React Context : React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

Suppose, we have many nested components. The component at the top and bottom of the stack need access to the state which is present at the highest parent component.

To do this without React Context, we will need to pass this state as "props" through each nested component to reach to desire component. This is called "prop drilling". But To do this using 'React Context' its easy to pass Highest State to all shared child Component in it via Context Provider with its 'value' attribute and to consume state at any child level component we extract with 'Context Consumer' known as useContext() Hook.

Step1: create Context : const contextElement = createContext();






*/