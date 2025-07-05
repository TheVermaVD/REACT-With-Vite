import React, { createContext } from 'react'

export default function LearnPropsDrilling() {

/*

# Props : When we pass some data from parent to child to use Child Component with alterning Child Component UI.\

# Props Drilling : Parent --> ChildA ---> ChildB---> ChildC

Suppose, Here, from PArent to ChildC all r nesteded component means, In Parent Component  CHildA called, In CHildA  ChildB called and lastly, In CHildB   ChildC is Called. So Suppose, Here, We need to pass some data i.e const name = "Prakash" from Parent COmp to ChildC then we need to pass to its subConnectting Components using props way of passing, The proccess of passing data from top Level Parent COmpo to Inner child is called as 'Props Drilling' means unneccessary we have passed a lot of props in connecting Components.


Note: Props drilling is one drawback of using it, as we unneccesarly passing data(state, props) to intermidiate all child component whic we do not need. So the solution of this props drilling in react is to use Context API(with useContext() Hook to consume context at Receiver side), which solves this problem and we can send data from parent to direct ChildD component or any Child Level directly.


--------------------------------------------------------------------------

Context API : COntext means holding samjh or information or data holding up. So, we use React {createContext} to create a Context for the that may store multiple data from the App-level, which can be passed to any nested CHilds.

Note : By using React COntext API, we discard any data passing through 'prop' ways rather in place of sending any props data may be string, number, value, array, object, functions, method etc, we send it via CONTEXT api help without bother just sending to only its CHILD element. Since, this COntext API can capable enough to send any non direct link of Component in React.

Suppose, we have many nested components. The component at the top and bottom of the stack need access to the state which is present at the highest parent component.

To do this without React Context, we will need to pass this state as "props" through each nested component to reach to desire component. This is called "prop drilling". But To do this using 'React Context' its easy to pass Highest State to all shared child Component in it via Context Provider with its 'value' attribute and to consume state at any child level component we extract with 'Context Consumer' known as useContext() Hook.



using Context API we solves two Problem at Parent Level of APP -

a) As sometimes some state are shared between two or more components then we keep it at Parent COmponent, that is bubbling-up  the state to App.jsx component, and in later in APP component there creates a lot of state and managing will be problem. We can use content API of react to solve this.

b) Sometimes there are some data(props and state) that need to pass to any not connected child then we can pass this data to direct to required component rather than passing to unncessary component.



Note : When we create context, It means the common shared storage among all the components in the React App. Context API addresses prop drilling problem.




--------ContextAPI Example and Setup SHown in Advance React Project---------



*/




  return ( <>
  
  
  <h1> To check the ContextAPI Example, GO to "learningContextAPI' React Project</h1>
  
  </>
  )
}
