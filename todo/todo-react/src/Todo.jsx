import { useReducer } from 'react'
import styles from './Todo.module.css'
import TodoHeader from './components/todos/TodoHeader'
import TodoList from './components/todos/TodoList'
import { useState } from 'react'



function todosReducer(todos, action) {
  switch (action.type) {
    case 'added':
      return [...todos, { id: action.id, text: action.text, done: false }]
    case 'deleted':
      return [...todos.filter((todo) => todo.id !== action.todoId)]
    case 'changed':
      return [...todos.map(todo => todo.id === action.todo.id ? action.todo : todo)];
    case 'displayedAll':
    case 'displayedInProgress':
    case 'displayedDone':
    default:
      break;
  }
}

export default function Todo() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [filters, setFilters] = useState(['All', 'In Progress', 'Done']);
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  function handleAddTodo(text) {
    dispatch({ type: 'added', text, id: nextId++ });
  }
  function handleDeleteTodo(todoId) {
    dispatch({ type: 'deleted', todoId });
  }
  function handleChangeTodo(todo) {
    dispatch({ type: 'changed', todo });
  }
  function handleChangeFilter(selectedFilter) {
    setSelectedFilter(selectedFilter);
  }
  return (
    <div className={styles.todo}>
      <TodoHeader filters={filters} onChangeFilter={handleChangeFilter} />
      <TodoList todos={todos} selectedFilter={selectedFilter} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} onAddTodo={handleAddTodo} />
    </div>
  )
}
let nextId = 0;
