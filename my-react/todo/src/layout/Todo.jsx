import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import "./Todo.css";
import React, { useState,useEffect } from 'react';



export default function Todo(props) {
  
  const savedTodos =loadTodoFromLS()
  const [todos, setTodos] = useState(savedTodos)
  useEffect(()=>{
    saveToLS()          
  });
  function onFooterStateHandler(todoText){
    addItemToTodoList(todoText)
  }
  function onClickCheckboxHandler(todoId, isChecked){
    const updatedTodos = todos.map(todo=>{
      if(todo.id === todoId){
        return {...todo, isDone:!todo.isDone}
      }else{
        return todo
      }
    })
    setTodos(updatedTodos)
  }
  function onClickDeleteBtnHandler(todoId){
    setTodos(todos.filter(todo=> todo.id !== todoId))
  }
  function addItemToTodoList(todoText){
    setTodos([...todos, {id: Math.floor(Math.random()*100_000_000), text : todoText, isDone : false}])
  }
  function saveToLS(){
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  function loadTodoFromLS(){
    const todos = JSON.parse(localStorage.getItem("todos"))
    return todos === null ? [] : todos
  }
  return <div className='app'>
    <Header/>
    <Main onClickCheckbox={onClickCheckboxHandler} onClickDeletebtn={onClickDeleteBtnHandler} todos={todos} />
    <Footer onTextSubmit={onFooterStateHandler}/>
  </div>
}
