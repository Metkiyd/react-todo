import React from 'react';
import styles from './styles.module.scss'

const TodoItem = ({todo, index, removeTodo, completeTodo}) => {
  return (
    <div className={styles.task}>
      <div className={styles.task__item}>
        <input
          type="checkbox"
          onChange={() => completeTodo(index)}
        />
        <p className={todo.isCompleted ? styles.task__completed : ''}>{todo.text}</p>
      </div>
      <div
        className={styles.task__close}
        onClick={() => {
          removeTodo(index);
        }}
      >
        X
      </div>
    </div>
  );
};
export default TodoItem;