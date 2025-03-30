import { useState } from "react"

export default function Form(){
   /*  let [fullName,setFullName] = useState("");
    let [username,setUsername] = useState("");

    let handleFullName = (event)=>{
        setFullName(event.target.value);
    }
    let handleUsername = (event)=>{
        setUsername(event.target.value);
    }
    console.log(fullName);
    console.log(username); */
    let [formData,setFormData] = useState({
        fullName:"",
        username:""
    })
/*  name--> event.target.name ->for getting key of object 
    value --> event.target.value ->for getting value of respective key */

    let handleChange = (event)=>{
        let field_Name = event.target.name;
        let newValue = event.target.value;
        // console.log(field_Name,newValue);
        setFormData((currValue)=>{
            // currValue[field_Name] = newValue;
            // return {...currValue};
            return {
            ...currValue,
            [field_Name]:newValue,
        };
    }

    )}
    // console.log(event.target.name);

    let handleSubmit = ()=>{
        event.preventDefault();
        console.log(formData);
        setFormData(()=>{
           return {
            ...FormData,
            fullName : "",
            username : "",
           };
        }
        );
    }
    
    return(
        <form onSubmit={handleSubmit}> 
            <label htmlFor="fullName">Full Name:</label>
            <input 
            id="full_name_user"
            type="text"
            placeholder="Enter your Name"
            value={formData.fullName}
            onChange={handleChange}
            name="fullName" //same as key
             /> <br /><br />
             <label htmlFor="username">username:</label>
             <input 
             id="username"
             type="text"
             placeholder="Enter your username"
             value={formData.username}
             onChange={handleChange}
             name="username" //same as key
              />
             <button>Submit</button>
        </form>
    )
}