import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

 export default function Todo_List(){

    // let [todos,setTodos] = useState(["sample Task","Hi hello"]); <-- array method
    let [todos,setTodos] = useState([{task:"sample of task",id:uuidv4()},]);
    let [newtodo,setNewtodo] = useState("");

    let addNewTask = () =>{
        setTodos([...todos,{task:newtodo,id:uuidv4()}]);
        setNewtodo("");

    }
    let updateTask = (event) =>{
      //  console.log(event.target.value);
        setNewtodo(event.target.value);

    }
    return (
        <div className="Todo_List">
            <h1>Todo List</h1>
            <input type="text" placeholder="add a task" 
            value={newtodo}
            onChange={updateTask}
            /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><hr/>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </div>
    )
 }