import { useState } from "react" 

 export default function Todo_List(){
    let [todos,setTodos] = useState(["sample Task","Hi hello"]);
    let [clickButton,setClickButton] = useState("");

    let addNewTask = () =>{

    }
    let updateTask = (event) =>{
        console.log(event.target)
    }
    return (
        <div className="Todo_List">
            <h1>Todo List</h1>
            <input type="text" placeholder="add a task" 
            value={addNewTask}
            onChange={updateTask}
            /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><hr/>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>


        </div>
    )
 }