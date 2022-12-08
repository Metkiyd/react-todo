import React, {useContext} from 'react';
import {TodoItem} from "../TodoItem";
import styles from './styles.module.scss'
import {Context} from "../../App";

const List = () => {
  const {todos, setTodos} = useContext(Context);
  const completeTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }

      return todo
    }))
  };

  const removeTodo = id => {
    const newTodos = todos.filter((todo) => {
      return id !== todo.id;
    });
    setTodos(newTodos);
  };

  return (
    <main>
      <div className={styles.mainTasks}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            index={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </main>
  );
};
export default List;