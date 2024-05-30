import React, { useState } from 'react';
import Todo from './Todo';

const ComponentToDo = ({ todo, setTodo }) => {
  const [input, setInput] = useState("");

  const handleSet = () => {
    setTodo([...todo, { text: input, id: Date.now() }]);
    setInput("");  // Limpiar el campo de entrada después de agregar la tarea
    console.log(todo);
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((task) => task.id !== id));
  };

  return (
    <div className="row">
      <div className="col">
        <h1>ToDo</h1>
        <input 
          type="text" 
          className='form-control' 
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
        <div>
          <button className='btn btn-primary' onClick={handleSet}>
            Guardar
          </button>
        </div>
      </div>
      <div className="col">
        <Todo todolist={todo} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default ComponentToDo;

