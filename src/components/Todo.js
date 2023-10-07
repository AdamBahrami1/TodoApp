import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo, deleteTodoFirestore, todoId, idVals,clientIds }) => {
  const handleTodoClick = () => {
    toggleComplete(task.id);
  };

  const handleEditClick = (e) => {
    e.stopPropagation(); // Prevent click from reaching parent div
    editTodo(task.id);
  };

  const handleTrashClick = async () => {
    console.log('Trash icon clicked');
    // Find the Firestore ID corresponding to the todo's client-side ID
    const clientSideIdExists = clientIds.includes(task.id);
    console.log("Load clientside id: ", task.id);
    if (clientSideIdExists) {
      
      await deleteTodoFirestore(task.id);
    }
    deleteTodo(task.id);
    
    // Optionally delete the todo client-side
    // deleteTodo(task.id); // Call deleteTodo function
  }; 
  
  
  
  return (
    <div className={`todo ${task.completed ? 'completed' : ''}`} onClick={handleTodoClick}>
      <p>{task.task}</p>

      <div>
        <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" onClick={handleEditClick} />
        <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={handleTrashClick} />
      </div>
    </div>
  );
};
