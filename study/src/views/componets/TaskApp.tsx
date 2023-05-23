import React, {useState} from 'react'

function AddTask({addTask}: any) {
    const [text, setText] = useState('')
    return (
     <>
     <input
      type="text"
      value={text}
      onChange= {(e) => setText(e.target.value)} 
     />
     <button onClick ={()=> addTask(text)} >Add</button>
     </>
    );
}
function Task({task}: any){
    return <>{task.text}</>
}
function TaskList({ tasks }: any){
 return(
<ul>
    {tasks.map((task: any) =>(
        <li key={task.id}>
         <Task task={task}/>
        </li>
    ))}
</ul>
 );
}
function TaskApp() {
    const [tasks, setTasks] = useState(initialTasks);
    const addTask = (text: any) => {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text,
                done: false
            }
        ])
    }
   
  return (
    <div>
        <h1>Itinerary</h1>
        <AddTask addTask={addTask}/>
        <TaskList tasks={initialTasks} />
    </div>
  );
}
let nextId = 1
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
  ];
export default TaskApp