import React from 'react'
import { useContext } from 'react'
import { Box } from '../context/Rahul'

const TodoInput = () => {
    const {setvalue}=useContext(Box)
    const handle=(e)=>{
        setvalue(e.target.value);
    }
  return (
    <div>
        <input type="text" placeholder='enter a todo' onChange={handle}/>
    </div>
  )
}

export default TodoInput