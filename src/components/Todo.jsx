import React, { useState } from 'react'
import { useReducer } from 'react';
import { useContext } from 'react'
import { Box } from '../context/Rahul'
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './TodoInput';
import styles from './Todo.module.css'

// useReducer
const reducer=(state,{type,payload})=>{
    switch(type)
    {
        case "ADD_TODO": return [...state,{id:uuidv4(),value:payload.value,completed:payload.completed}];
        case "REMOVE_TODO":  return state.filter(e=>e.id!==payload.id);
        case "TOGGLE_TODO": 
        for(let i=0;i<state.length;++i)
        {if(state[i].id===payload.id)
        {if(state[i].completed===false)
        state[i].completed=true
        else if(state[i].completed===true)
        state[i].completed=false
        }

    }
    console.log(state)
        return state;
        default:return state;    
    }
}

const Todo = () => {
    const {value,setlist,list}=useContext(Box)
    const [completed, setcompleted] = useState(false)
    const [state,dispatch]=useReducer(reducer,list)
  return (
    <div>
        <TodoInput/>
        <button onClick={()=>{
            dispatch({type:"ADD_TODO",payload:{value:value,completed:completed}});
        }}>Add</button>
        {state.map(e=>(<>
            <div className={e.completed?styles.strike:""}>{e.value}</div>
        <button onClick={()=>{
           dispatch({type:"REMOVE_TODO",payload:{id:e.id}});
        }}>X</button>
        <button onClick={()=>{
           dispatch({type:"TOGGLE_TODO",payload:{id:e.id,setcompleted:setcompleted}});
        }}>Completed</button>
        </>
        ))}
    </div>
  )
}

export default Todo