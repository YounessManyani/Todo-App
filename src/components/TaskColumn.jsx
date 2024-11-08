import React from 'react'
import Todo from '../assets/direct-hit.png'
import tag from './Tag'
import TaskCard from './TaskCard'
import "./TaskColumn.css"

const TaskColumn = ({icone,title,tasks,status,handleDelete}) => {
  return (
    <section className='task_column'>
    <h2 className='task_column_heading'>
    <img src={icone} className='task_column_icon'/>{title}
    </h2>
    {tasks.map((task, index) => 
    task.status === status && (
    <TaskCard 
        key={index}
        title={task.task}
        tags={task.tags}
        handleDelete={handleDelete}
        index={index}
        
    />
    )
    )}
    </section>

  )
}

export default TaskColumn
