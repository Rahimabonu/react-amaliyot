import Todo from './components/todo'
import './App.css'
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [son, sonYangilash]=useState(0);
  const [todo, setTodo]=useState("");
  let todos =[
    {
      title:"Uyga vazifa qilish",
    },
    {
      title:"Parkga borish",
    },
    {
      title:"Parkga borish",
    },
    
  ];
  
  const addTodo =()=>{
    console.log(todo);
    
  };
  
  return (
    <div className='container'>
      <div>
        <button onClick={()=> sonYangilash(son - 1 )}>-</button>
        <span>{son}</span>
        <button onClick={()=> sonYangilash(son + 1 )}>+</button>

      </div>
      <div className='header'>
        <input onChange={(e) => setTodo(e.target.value)
        } className='input' type="text" placeholder='Add Task' />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-container">
        {todos.map((t) => {
          return<Todo title={t.title}/>
        })}
      </div>
      
    </div>
  )
}

export default App
