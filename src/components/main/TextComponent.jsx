import React, { useContext, useState } from 'react'
import contextToDo from "../context/context";
import { ADD_TODO } from "../context/action.types"


const TextComponent = () => {

  const [todos, dispatch] = useContext(contextToDo)


  const [todoString, setTodoString] = useState('')

  const handleClick = (e) => {
    e.preventDefault()

    if (todoString == '') {
      return alert('Please enter notes.'); // Show message if input is empty
    }

    dispatch({
      type: ADD_TODO,
      payload: todoString,
    })

    setTodoString('') // Clear input field after submitting
  }

  return (
    <div className='grid grid-cols-2 m-2 gap-5 '>
      <div className='border border-black'>
        <form className='' onSubmit={handleClick}>
          <input className=" border p-2 rounded" type="text" placeholder='Enter Notes'
            onChange={(e) => setTodoString(e.target.value)}
            value={todoString} />
        </form>
      </div>
      <div className='border border-black '>TextComponent</div>
    </div>
  )
}

export default TextComponent