import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

 export default function Todo_List(){

    // let [todos,setTodos] = useState(["sample Task","Hi hello"]); <-- array method
    let [todos,setTodos] = useState([{task:"sample of task",id:uuidv4(),isDone:false}]); // <-- array of object method // isDone is added to find whether task is done or not
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
                };
                
            })
        ))

    }

    let update_each = (id) =>{
        setTodos((preValue) =>(
            preValue.map((todo)=>{
                if(todo.id === id ) {
                    return {  //<-- select id from task
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            }
                else{
                    return todo;
                }
            })
        ))
    }
    let done_mark = (id, isDone) => {
        setTodos((preValue) =>
            preValue.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !isDone,
                    };
                }
                return todo;
            })
        );
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
                            <span style={todo.isDone ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                            {todo.task}
                            </span> <button onClick={()=> delete_task(todo.id)}>delete</button>
                            <button onClick={()=> update_each(todo.id)}>Big</button>
                            <button onClick={()=> done_mark(todo.id,todo.isDone)}>done</button>
                            </li>
                    ))
                }
                <button onClick={upperCaseAll}>UpperCase</button>
            </ul>
        </div>
    )
 }