import { useState } from "react"

export default function LikeButton(){
    let [IsLiked,setIsLiked] = useState(false);

    let toggleLiked = ()=>{
        setIsLiked(!IsLiked);
    }

    return (
        <div className="LikeButton">
           <h3>Click me:</h3>
          <p onClick={toggleLiked}> here <i className="fa-regular fa-heart"></i></p>
          {IsLiked?<p>liked</p>:<p>unliked</p>}
        </div>
    )
}