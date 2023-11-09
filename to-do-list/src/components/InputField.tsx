import React from 'react'
import "./style.css";
import { useState } from 'react';
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}


const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  

  return (
    <form className='input' onSubmit={handleAdd}>
      <input type="input" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter a task' className='input__box' />
      <button className='input_submit' type='submit'>
        Go
      </button>
    </form>
  )
}


export default  InputField