import React, { useState } from 'react';
import { TodoForm } from './TodoForm'; // Update import path
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo'; // Update import path
import { EditTodoForm } from './EditTodoForm';
import App from '../App';

export const TodoWrapper= ({ user, addTodoToFirestore, getUserTodosFromFirestore,deleteTodoFirestore,idVals,fireId }) => {
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [todos, setTodos] = useState([]);
  const [clientIds,setClientIds]=useState([]);

  const handleDeleteTodo = (id) => {
    // Call deleteTodoFirestore with the specific todo ID
    deleteTodoFirestore(id);
  };

  const addTodo = (todo) => {
    const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false };
    setTodos([...todos, newTodo]);
    setClientIds((prevClientIds) => [...prevClientIds, newTodo.id]);
  
    try {
      if(todo.id!=null || todo.id!="")
      {
        addTodoToFirestore(todo, newTodo.id);
        console.log("Client-side: ", newTodo.id);
      }
      
    } catch (error) {
      console.error("Error adding todo client-side:", error);
    }
  };
  
  
    

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    try {
      // Filter out the todo with the specified ID
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      console.log("Deleted Todo ID:", id);
  
      // Update the todos state with the new array
      setTodos(updatedTodos);
  
      // Call deleteTodoFirestore to remove the todo from Firestore
      deleteTodoFirestore(id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  

  const editTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    );
  };

  return (
    <div className="TodoWrapper">
      <h1 style={{marginBottom:'-10px'}}>Made by: Adam Bahrami</h1>
      <h2 style={{ color: "hsla(0, 100%, 100%, 0.9)" }}>Enter your todos!</h2>
      {user && (
        <TodoForm
          addTodo={addTodo}
          addTodoToFirestore={addTodoToFirestore}
          getUserTodosFromFirestore={getUserTodosFromFirestore}
          fireId={fireId}
        />
      )}
      {user && (
        <>
          {todos.map((todo, index) =>
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo} key={index} />
            ) : (
              <Todo
              key={todo.id}
              task={todo}
              toggleComplete={toggleComplete}
              editTodo={editTodo}
              deleteTodo={deleteTodo} // Pass down deleteTodo function
              deleteTodoFirestore={deleteTodoFirestore}
              todoId={todo.id}
              idVals={idVals}
              clientIds={clientIds}
              />
            )
          )}
        </>
      )}
    </div>
  );
};

export default TodoWrapper;
