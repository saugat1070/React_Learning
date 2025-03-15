import { useState } from "react"

function Counter(){
    let [Count,setCount] = useState(0);
    console.log("Component is rendered!");
    let inCount = ()=>{
       setCount((currValue)=>{ //usestate with arrow function used to callback useState
        return currValue +1;// in this program ,count incrase by 3
       });  
       setCount((currValue)=>{
        return currValue +1;
       });
       setCount((currValue)=>{
        return currValue +1;
       });  
    }  
    return(
        <div className="Counter">
            <h3>count:{Count}</h3>
            <button onClick={inCount}>increment</button>
        </div>
    )

}

export {Counter}