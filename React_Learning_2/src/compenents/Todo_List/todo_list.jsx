import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

 export default function Todo_List(){

    // let [todos,setTodos] = useState(["sample Task","Hi hello"]); <-- array method
    let [todos,setTodos] = useState([{task:"sample of task",id:uuidv4()},]); // <-- array of object method
    let [newtodo,setNewtodo] = useState("");

    let addNewTask = () =>{
        setTodos([...todos,{task:newtodo,id:uuidv4()}]);
        setNewtodo("");

    }
    let updateTask = (event) =>{
      //  console.log(event.target.value);
        setNewtodo(event.target.value);

    }
    let delete_task = (id)=>{
        // let copy = todos.filter((todo)=> todo.id != todo);
        // console.log(copy);
        setTodos((preTodo) =>
            todos.filter((preTodo) => preTodo.id != id)
        )
    }

    let upperCaseAll = () =>{
        /* let newArr = todos.map((todo) => {
            // console.log(todo.task.toUpperCase());
            return { 
                ...todo,
                task:todo.task.toUpperCase(),
                

            }
        });
        //  console.log(newArr);
        setTodos(newArr); */
        setTodos((preValue)=>(
            //for call we use this arrow function
            preValue.map((todo) =>{
                return {
                    ...todo,
                    task:todo.task.toUpperCase(),
                }
            })
        ))

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
                        <li key={todo.id}>
                            <span>
                            {todo.task}
                            </span> <button onClick={()=> delete_task(todo.id)}>delete</button>
                            </li>
                    ))
                }
                <button onClick={upperCaseAll}>uppercase</button>
            </ul>
        </div>
    )
 }