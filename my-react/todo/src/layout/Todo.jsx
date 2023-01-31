import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import "./Todo.css";
import React, { useState,useEffect } from 'react';



export default function Todo(props) {
  const savedTodos =loadTodoFromLS()
  const [todos, setTodos] = useState(savedTodos);
  const [filteredTodos, setFilteredTodos] = useState(savedTodos)
  const [selectedIdx, setSelectedIdx] = useState(1);
  function updateTodos(todos){
    setTodos(todos)
    renderTodos(selectedIdx)
  }
  useEffect(()=>{
    saveToLS()
    renderTodos(selectedIdx)  
  });
  function onTabChange(selectedIdx){
    setSelectedIdx(selectedIdx)
    renderTodos(selectedIdx)
  }
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
    updateTodos(updatedTodos)
  }
  function onClickDeleteBtnHandler(todoId){
    updateTodos(todos.filter(todo=> todo.id !== todoId))
  }
  function addItemToTodoList(todoText){
    updateTodos([...todos, {id: Math.floor(Math.random()*100_000_000), text : todoText, isDone : false}])
  }
  function saveToLS(){
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  function loadTodoFromLS(){
    const todos = JSON.parse(localStorage.getItem("todos"))
    return todos === null ? [] : todos
  }
  function renderTodos(selectedIdx){
    let renderedTodos =[]
    if(selectedIdx===1){
      renderedTodos= todos
    }
    if(selectedIdx===2){
      renderedTodos = todos.filter(todo=> todo.isDone===false)
    }
    if(selectedIdx===3){
      renderedTodos = todos.filter(todo=> todo.isDone===true)
    }
    setFilteredTodos(renderedTodos)
  }
  return <div className='app'>
    <Header selectedIdx={selectedIdx} onTabChange={onTabChange}/>
    <Main onClickCheckbox={onClickCheckboxHandler} onClickDeletebtn={onClickDeleteBtnHandler} todos={filteredTodos} />
    <Footer onTextSubmit={onFooterStateHandler}/>
  </div>
}
