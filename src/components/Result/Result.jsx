import React, {useEffect} from 'react';
import styles from './styles.module.scss'

const Result = ({doneTasks}) => {

  return (
    <footer className={styles.done}>
      <h1 className='form'>DONE:{doneTasks}</h1>
    </footer>
  );
};

export default Result;