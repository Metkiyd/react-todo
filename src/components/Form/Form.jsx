import React, {useState, useContext} from 'react';
import styles from './styles.module.scss'
import {Context} from "../../App";

const Form = () => {
  const [todo, setTodo] = useState('');
  const {todos, setTodos} = useContext(Context);
  // fsa
  // 3

  const addTodo = text => {
    const newTodos = [...todos, {
      id: Date.now(),
      text: text,
      isCompleted: false
    }];
    setTodos(newTodos);
  };

  const addTask = () => {
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <header>
      <div className={styles.form}>
        <input
          className={styles.form__input}
          type="text"
          value={todo}
          placeholder={'Enter new task'}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className={styles.form__add}
          onClick={addTask}
        >ADD TASK
        </button>
      </div>
      <div className={styles.form__title}>
        <h1>THINGS TO DO:</h1>
      </div>
    </header>
  );
}
export default Form