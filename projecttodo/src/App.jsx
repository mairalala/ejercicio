import { useState } from 'react'
import './App.css'
import ComponentToDo from './components/ComponentToDo'

function App() {
  const [ todo,setTodo ] = useState([])
  return (
    <ComponentToDo todo={todo} setTodo={setTodo} />
  )
}


export default App
