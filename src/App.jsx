import Todo from './components/todo'
import './App.css'
import Header from './components/Header';

function App() {
   const todos =[
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
  return (
    <div className='container'>
     <Header/>
      <div className="todo-container">
        {todos.map((t) => {
          return<Todo title={t.title}/>
        })}
      </div>
      
    </div>
  )
}

export default App
