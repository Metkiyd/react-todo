import './style.css';
import React, {useState, createContext, useMemo, useCallback} from "react";
import {Form} from "./components/Form";
import {List} from "./components/List";
import {Result} from "./components/Result";

const initTodo = [
  {
    id: 0,
    text: 'Test todo',
    isCompleted: false
  }
]
export const Context = createContext({});

function App() {
  const [todos, setTodos] = useState(initTodo);

  const doneTasks = todos.filter(
    todo => todo.isCompleted
  ).length;

  return (
    <Context.Provider value={{todos, setTodos}}>
      <div className="todo">
        <Form />
        <List />
        <Result doneTasks={doneTasks}/>
      </div>
    </Context.Provider>
  );
}

export default App;

