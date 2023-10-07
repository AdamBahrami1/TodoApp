import React, { useState } from 'react';

export const TodoForm = ({ addTodo, isGmailLoggedIn, addTodoToFirestore, getUserTodosFromFirestore,fireId }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (value.trim() === "" || value.trim() === null) {
      alert("Please enter a valid value");
    } else {
      // Call the addTodoToFirestore function to add the todo to Firestore
      // await addTodoToFirestore(value); // Wait for Firestore operation to complete
      // Call the addTodo function to add the todo locally
      addTodo(value,fireId);
  
      // Call getUserTodosFromFirestore to retrieve and display the updated list of todos
      await getUserTodosFromFirestore();
      
      setValue("");
    }
  };
  
  

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='Todo-input'
        placeholder="What is today's task?"

        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='TodoButton'>
        Add Task
      </button>
    </form>
  );
};
