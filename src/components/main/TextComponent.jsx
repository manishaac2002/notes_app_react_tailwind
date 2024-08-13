import React from 'react'

const TextComponent = () => {

const [todoString,setTodoString]=React.useState('')
  const handleClick=(e)=>{
    e.preventDefault()
  }

  return (
    <div className='grid grid-cols-2 m-2 gap-5 '>
        <div className='border border-black'>
         <form className='' onSubmit={handleClick}>
          <input className="text-gray-400 border p-2 rounded" type="text" placeholder='Enter Notes' 
          onChange={(e)=>setTodoString(e.target.value)} />
         </form>
        </div>
        <div className='border border-black '>TextComponent</div>
    </div>
  )
}

export default TextComponent