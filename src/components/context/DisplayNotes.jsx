import React, { useContext } from 'react'
import contextToDo from './context'

const DisplayNotes = () => {
    const {todos,dispatch} =useContext(contextToDo)
  return (
    <div>DisplayNotes</div>
  )
}

export default DisplayNotes