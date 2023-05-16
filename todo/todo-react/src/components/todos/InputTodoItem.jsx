import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from './InputTodoItem.module.css'
import { useState } from 'react';
export default function InputTodoItem({ onAddTodo }) {
  const [text, setText] = useState('');
  return (
    <div className={styles.inputTodoItem}>
      <FontAwesomeIcon onClick={() => { setText(''); onAddTodo(text) }} icon={icon({ name: "plus", style: 'solid' })} size='xl' />
      <input onChange={(e) => setText(e.target.value)} value={text} className={styles.input} placeholder='Add Task'></input>
    </div>
  )
}