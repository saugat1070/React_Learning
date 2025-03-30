import { useState } from "react"
import "./lottery.css"
import { genTicket } from "./genTicket";
import { sum_array } from "./sum_arr";

export default function Lottery(){
    let [ticket,setTicket] = useState(genTicket(3));
    let isWinng = (sum_array(ticket) == 15)?true:false;

    let buyTicket = ()=>{
        setTicket(genTicket(3));
    }
    
    return (
        <div className="Lottery_Game">
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket}>Buy Ticket</button>
            {/* <h3>{isWinng && "Congratulation you won"} </h3> */}
        </div>
    )
}