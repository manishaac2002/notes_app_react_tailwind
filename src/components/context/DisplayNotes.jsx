import React, { useContext } from 'react'
import { REMOVE_TODO } from './action.types'
import contextToDo from './context'


const DisplayNotes = () => {
  const [todos, dispatch] = useContext(contextToDo)
  return (
    <div className='grid grid-cols-2 gap-5'>
      {
        todos.map((todo, index) => {
          return (
            <div className='border border-gray-100 shadow-lg px-3 py-2' key={index}>
              <h1>{todo}</h1>
              <button onClick={()=>{
                return dispatch({
                  type: REMOVE_TODO,
                  payload: todo
                })
              }} > Remove</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayNotes