import React , {useState , useEffect} from 'react'
import './App.css'
import TaskColumn from './components/TaskColumn'
import TaskForm from './components/TaskForm'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks)



function App() {
 const [tasks, setTasks] = useState(JSON.parse(oldTasks) ||[]);

 useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);



 const handleDelete =(taskIndex) =>{
  const newTasks = tasks.filter((task,index) =>index !== taskIndex )
  setTasks(newTasks)
}

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main>
        <div className='app_main'>
          <TaskColumn title="To do" icone={todoIcon} tasks={tasks} status={"todo"} handleDelete={handleDelete}/>
          <TaskColumn title="Doing" icone={doingIcon}tasks={tasks} status={"doing"} handleDelete={handleDelete}/>
          <TaskColumn title="Done" icone={doneIcon}tasks={tasks} status={"done"} handleDelete={handleDelete}/>
          
        </div>
      </main>
    </div>
  )
}

export default App
