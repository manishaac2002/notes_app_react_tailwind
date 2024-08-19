import React, { useContext, useState } from 'react'
import { ADD_TODO } from "../context/action.types"
import contextToDo from "../context/context"
import DisplayNotes from '../context/DisplayNotes'


const TextComponent = () => {

  const [todos, dispatch] = useContext(contextToDo)


  const [todoString, setTodoString] = useState('')

  const handleClick = (e) => {
    e.preventDefault()

    if (todoString == '') {
      return alert('Please enter notes.')
    }

    dispatch({
      type: ADD_TODO,
      payload: todoString,
    })

    setTodoString('') 
  }

  return (
    <>


      <div className='grid grid-cols-2 m-2 gap-5 '>

        <div className='border border-red-600'>

          <form className='' onSubmit={handleClick}>

            <input className=" border p-2 rounded mb-4" type="text" placeholder='Enter Notes'
              onChange={(e) => setTodoString(e.target.value)}
              value={todoString} />
          </form>

        <DisplayNotes />

        </div>
        

        <div className='border border-black '>TextComponent

        </div>
      </div>

    </>
  )
}

export default TextComponent