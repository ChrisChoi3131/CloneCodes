import styles from './TodoList.module.css'
import InputTodoItem from './InputTodoItem'
import TodoItem from './TodoItem'


function getFilteredTodos(todos, selectedFilter) {
  if (selectedFilter === 'All') {
    return [...todos]
  } else if (selectedFilter === 'In Progress') {
    return [...todos.filter(todo => todo.done === false)]
  } else if (selectedFilter === 'Done') {
    return [...todos.filter(todo => todo.done === true)]
  }
}


export default function TodoList({ todos, onChangeTodo, onDeleteTodo, onAddTodo, selectedFilter }) {
  let filteredTodos = getFilteredTodos(todos, selectedFilter);
  return (
    <main className={styles.todoList}>
      <ul>
        {filteredTodos.map((todo) => <li><TodoItem todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} /></li>)}
      </ul>
      <InputTodoItem onAddTodo={onAddTodo} ></InputTodoItem>
    </main>
  )
}