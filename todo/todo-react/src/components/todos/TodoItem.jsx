export default function TodoItem({ todo, onChange, onDelete }) {
  return (
    <label>
      <input type='checkbox' checked={todo.done} onChange={(e) => { onChange({ ...todo, done: e.target.checked }) }} />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  )
}