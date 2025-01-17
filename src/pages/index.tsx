import type { HeadFC, PageProps } from "gatsby"
import React, { useState } from 'react';
import '../styles/App.css';

type FormElement = React.FormEvent<HTMLFormElement>;
interface Task {
  name: string;
  done: boolean;
}

const IndexPage: React.FC<PageProps> = () => {

  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [alert, setAlert] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number>(0);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    if(newTask !== ''){
      if(edit === true){
        editTask(newTask, editIndex);
      }
      else{
        addTask(newTask);
      }
      setNewTask('');
      setAlert(false);
    }
    else{
      setAlert(true);
    }

    window.history.replaceState(null, '', window.location.pathname);
  }

  const addTask = (name: string) => {
    const newTasks: Task[] = [...tasks, {name, done:false}];
    setTasks(newTasks);
  }

  const editTask = (name: string, index: number) => {
    const newTasks: Task[] = [...tasks]
    newTasks[index].name = name;
    setTasks(newTasks);
    setEdit(false);
  }

  const removeTask = (index: number) => {
    if(window.confirm('Are you sure you want to delete this task?')){
      const newTasks: Task[] = [...tasks];
      newTasks.splice(index,1);
      setTasks(newTasks);
    }
  }

  const toggleDoneTask = (index: number) => {
    const newTasks: Task[] = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  return (
    <div className='w-[95%] max-w-2xl mx-auto '>
      <h1 className='text-xl font-semibold mt-2'>My ToDo App using Gatsby and Github pages </h1>
      { edit &&
        <p className='mt-2'>Edit the task:</p>
      }
      { !edit &&
        <p className='mt-2'>Introduce a new task:</p>
      }
      <form onSubmit={handleSubmit} className="flex">
        <input type="text"
        className={`block p-2.5 w-full text-gray-900 rounded-l-lg border-l-2 border ${alert ? "bg-red-50 border-red-300" : "bg-gray-50 border-gray-300"}`} 
        onChange={e => {
          setNewTask(e.target.value);
          if(e.target.value !== ''){
            setAlert(false);
          }
          }} value={newTask} />
        <button className='top-0 right-0 p-2.5 text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
          Save
        </button>
      </form>
      { alert &&
        <p className='text-red-500'>You can't add an empty task</p>
      }
      <div className='mt-2'>
      {
        tasks.map((task: Task, index: number) => (
            <div key={index} className="flex items-center">
              <button className='bg-yellow-300 w-6 mr-2 rounded hover:bg-yellow-500'
              onClick={e => {
                setEditIndex(index);
                setEdit(true);
                setNewTask(task.name);
              }}>
                🖉
              </button>
              <label style={{textDecoration: task.done ? "line-through" : ""}} className='w-full text-lg'>{task.name}</label>
              <input type="checkbox" className='w-4 h-4 mx-2' checked={task.done} onChange={() => toggleDoneTask(index)} />
              <button className='bg-red-300 w-6 rounded hover:bg-red-500' onClick={() => removeTask(index)}>
                🗑
              </button>
            </div>
          )
        )
      }
      </div>
    </div>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>
