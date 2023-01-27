import "./Input.css"
import React, { useState } from 'react';
export default function Input(props){
  const [text, setText] = useState("");
  function submitHandler(e){
    e.preventDefault();
    if(text){
      props.onTextSubmit(text);
      setText("")
    }
  }
  return <form className ="input" >
      <input onChange={(e)=>{setText(e.target.value)}} className="input text" type="text" placeholder='Add Todo' value={text}></input>
      <button type="submit" onClick={submitHandler} className='input button'>Add</button>
    </form> 
}