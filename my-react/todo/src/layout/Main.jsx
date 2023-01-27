import "./Main.css"
export default function Main(props) {
  const todos = props.todos
  function onClickCheckbox(e){
    const [todoId, isChecked] =[Number(e.target.getAttribute("data-index")), e.target.checked]
    props.onClickCheckbox(todoId, isChecked)
  }
  function onClickDeletebtn(e){
    const [todoId] =[Number(e.target.getAttribute("data-index"))]
    props.onClickDeletebtn(todoId)
  }
  const listItems = todos.map(todo=> 
    <li key={todo.id} className='todo'>
      <input id="todoInput"data-index={todo.id} onClick={onClickCheckbox} type="checkbox" defaultChecked={todo.isDone}></input>
      <label htmlFor="todoInput">{todo.text}</label>
      <button data-index={todo.id} onClick={onClickDeletebtn}></button>
    </li>
  );
  return <div className='Main'>
    <ul>{listItems}</ul>
  </div>;
}
