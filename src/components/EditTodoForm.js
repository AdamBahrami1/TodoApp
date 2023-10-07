import React, {useState} from 'react';

export const EditTodoForm = ({editTodo,task}) => {
    const [value, setValue] =useState(task.task)
    const handleSubmit = e => {
        e.preventDefault(); //prevents from page restarting everytime you add val

        editTodo(value,task.id);
        setValue("")
        
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='Todo-input' placeholder='Edit Task' value={value} onChange={(e)=> setValue(e.target.value)}/>
      <button type='submit' className='TodoButton'>
        Update Task    
      </button>
    </form>
  );
};
