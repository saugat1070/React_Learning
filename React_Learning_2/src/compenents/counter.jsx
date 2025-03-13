import { useState } from "react"

function Counter(){
    let [Count,setCount] = useState(0);
    console.log("Component is rendered!");
    let inCount = ()=>{
       setCount(Count+1); 
    }
    return(
        <div className="Counter">
            <h3>count:{Count}</h3>
            <button onClick={inCount}>increment</button>
        </div>
    )

}

export {Counter}