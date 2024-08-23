import React, { useContext, useState } from 'react';
import { ADD_TODO } from "../context/action.types";
import contextToDo from "../context/context";
import DisplayNotes from '../context/DisplayNotes';
import Header from '../Header';
import { v4 as uuidv4 } from 'uuid';

const TextComponent = () => {
  const [todos, dispatch] = useContext(contextToDo);
  const [todoString, setTodoString] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleWriteClick = () => {
    setShowForm(!showForm);  // Toggle the form visibility
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (todoString === '') {
      alert('Please enter notes.');
      return;
    }

    const newTodo = {
      id: uuidv4(),
      content: todoString,
    };

    dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });

    setTodoString('');
    setShowForm(false);  // Hide the form after adding a note
  };

  return (
    <>
      <Header onWriteClick={handleWriteClick} />
      <div className="grid grid-cols-2 h-full gap-5 pr-4 py-5">
        <section className="h-full">
          <div className="px-4 border-r-4 h-full">
            <div className="border border-red-600 h-full flex flex-col">
              {showForm && (
                <form onSubmit={handleClick}>
                  <input
                    className="border p-2 rounded mb-4 w-full"
                    type="text"
                    placeholder="Enter Notes"
                    onChange={(e) => setTodoString(e.target.value)}
                    value={todoString}
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-3 py-2 rounded-lg mt-2"
                  >
                    Add Note
                  </button>
                </form>
              )}
              {!todos.length && !showForm && (
                <p className="text-center text-gray-600">No notes, enter any note.</p>
              )}
              <DisplayNotes className="flex-grow" />
            </div>
          </div>
        </section>

        {/* Calendar component */}
        <div className="border border-black h-full">
          TextComponent
        </div>
      </div>
    </>
  );
};

export default TextComponent;
