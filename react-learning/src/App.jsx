
import "./App.css";

import Item from "./components/Item";
import {HealthyFoodItems, ListRenderingWithFilter} from "./components/HealthyFoodItems";
import StyleComp from "./components/StyleComp";
import EventHandling from "./components/EventHandling";
import Container from "./components/1.Container";
import PassingFunc from "./components/PassingFunc";
import HelloReact from "./components/0.HelloReact";


function App() {

  //want to pass a function to child component -
  function foo(){
    console.log("Hey User..");
  }

  return (
    <>
{/* 
        <HelloReact/>
        <HelloReact/>
        <HelloReact/> */}

        <Item a={4}  b={4} c= {2} name="Prakash" />   
        {/* Component invoked with passed data i.e props data. */}

        <Item a={4}  b={4} c= {2} name="Prakash">

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sapiente?</p> 

        </Item>

        {/* If we sending any data in-between render component then that data known as children property of the rendered component and it can be accessed to child by just calling 'children' object there. */}

        {/* When we pass any data i.e JSX elememts or component inside another react's rendered component, then that passed inner data i.e inner component (inside main comp) known as children properties i.e props and can be accessed at child component with props.children or directly with object destructinh with {children} */}

        {/* 'children' name is fixed in react for accessing any passed children content. */}

        


        <HealthyFoodItems/>
        <ListRenderingWithFilter/>

        <StyleComp/>

        <EventHandling/>


        {/* We will pass dynamic child props while rendering main component-  */}

{/* Note : Children properties help in dispaying dynamic data over container ie a cart. E.g: In facebook, youtube have one common container have its style fixed but the data inside this is changing like sometimes different videos or post or images. SO Its works like if there an cart where we display different content inside cart with help of children properties. */}
        <h1>This is Container Heading</h1>
        <Container>

          <h1>This is MP4 Videos!!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquid?</p>

        </Container>
        <Container>

          <h1>This is Reels Videos!!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquid?</p>

        </Container>
        <Container>

          <h1>This is MP3 Songs!!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquid?</p>

        </Container>

        <PassingFunc checkfoo={foo}/>



    </>
  );
}

export default App;
