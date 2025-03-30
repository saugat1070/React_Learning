// import ColorBoard from "./ColorBoard"
// import { useState } from "react"
// export default function Ludo(){
//     let color_list = ["blue","yellow","green","red"]
//     const [colorChoices, setColorChoices] = useState([0, 1, 2, 3]);

//     return (
//         <div className="LudoGame">
//             {colorChoices.map((choice, idx) => (
//                 <ColorBoard key={idx} color_choice={color_list[choice]} />
//             ))}
//         </div>
//     )
// }
import { useState } from "react";
/*  Lesson --> Objects and State in React
 */export default function LudoBoard(){
    let [Move,setMove] = useState({ "blue":0,"red":0,"yellow":0,"green":0});
    let [arr,setArr] = useState(["no moves"]);
    let UpdateBlue = () =>{
        setMove((preMove) =>{
            return {...preMove, blue: preMove.blue+1};

        })
        //for array we can use like this -->
        // setArr((preValue)=>{
        //     return [...preValue,"next move"];
        // })
    }
    let UpdateRed = () =>{
        setMove((preMove) =>{
            return {...preMove, red: preMove.red+1};

        })}
        let UpdateYellow = () =>{
            setMove((preMove) =>{
                return {...preMove, yellow: preMove.yellow+1};
            });}
        let UpdateGreen = () =>{
            setMove((preMove) =>{
                return {...preMove, green: preMove.green+1};
                });
            }

    return (
        <div className="LudoGame">
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves:{Move.blue}</p>
                    <button onClick={UpdateBlue} style={{backgroundColor:"blue"}}>+1</button>

                <p>Yellow Move:{Move.yellow}</p>
                <button onClick={UpdateYellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>

                <p>Green Move:{Move.green}</p>
                <button onClick={UpdateGreen} style={{backgroundColor:"green"}}>+1</button>

                <p>Red Moves:{Move.red}</p>
                <button onClick={UpdateRed} style={{backgroundColor:"red"}}>+1</button>
                 
            </div>
        </div>
    )

}