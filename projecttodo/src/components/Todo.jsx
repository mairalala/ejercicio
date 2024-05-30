import React from 'react';

const Todo = ({ todolist, handleDelete }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {todolist.map((item) => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
            {item.text}
            <button 
              className="btn btn-danger btn-sm ml-2" 
              onClick={() => handleDelete(item.id)}
              style={{ marginLeft: '10px' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
