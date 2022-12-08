import React, {useEffect} from 'react';
import styles from './styles.module.scss'

const Result = ({doneTasks}) => {

  // useEffect(() => {
  //   console.log('render always')
  // })
  //
  // useEffect(() => {
  //   console.log('===>Result mounted')
  //
  //   return () => {
  //     console.log('Unmounted')
  //   }
  // }, [])
  //
  // useEffect(() => {
  //   console.log('done render')
  // }, [doneTasks])

  return (
    <footer className={styles.done}>
      <h1 className='form'>DONE:{doneTasks}</h1>
    </footer>
  );
};

export default Result;