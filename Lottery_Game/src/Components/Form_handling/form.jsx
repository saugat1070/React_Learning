import { useState } from "react"

export default function Form(){
    let [fullName,setFullName] = useState("");

    let handleFullName = (event)=>{
        setFullName(event.target.value);
    }
    // console.log(fullName);
    return(
        <form >
            <label htmlFor="fullName">Full Name:</label>
            <input 
            id="fullName"
            type="text"
            placeholder="Enter your Name"
            value={fullName}
            onChange={handleFullName}
             />
             <button>Submit</button>
        </form>
    )
}