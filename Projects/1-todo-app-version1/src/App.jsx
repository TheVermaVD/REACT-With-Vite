import AddTODO from "./components/AddTODO";
import AppName from "./components/AppName";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  {
  }
  const todoItems = [
    {
      name: "Go TO College",
      dueDate: "04/10/2025",
    },
    {
      name: "buy milk",
      dueDate: "2/1/2025",
    },
    {
      name: "Go to gym",
      dueDate: "05/2/2025",
    },
    {
      name: "Go to gym",
      dueDate: "05/2/2025",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTODO />

        <div className="todo-items">
          {/* <TodoItems todoName="Go to scholl" todoDate="3/2/2014" />
          <TodoItems todoName="Go to scholl" todoDate="3/2/2014" /> */}
          {todoItems.map(item=><TodoItems todoName={item.name} todoDate={item.dueDate} key={item.name} /> )}

        </div>
      </center>
    </>
  );
}

export default App;
