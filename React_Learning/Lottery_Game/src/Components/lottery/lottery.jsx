import Ticket from "./ticket";
import { useState } from "react";
import { genTicket } from "../genTicket";
import { sum_array } from "../sum_arr";
export default function Lottery_Interface({ size_of_ticket }) {
    let [tickets, setTickets] = useState([genTicket(size_of_ticket)]);

    let isWinning = tickets.some(ticket => sum_array(ticket) === 15);

    let Buy_new = () => {
        setTickets([...tickets, genTicket(size_of_ticket)]);
    };

    let Reset_tickets = () => {
        setTickets(tickets.map(() => genTicket(size_of_ticket)));
    };

    return (
        <>
            <h1 className="header_name">Lottery Game</h1>
            <div className="lottery">
                {tickets.map((ticket, index) => (
                    <Ticket key={index} ticket={ticket} />
                ))}
                <p>{isWinning && "Congratulation"}</p>
                <button onClick={Buy_new}>Buy new</button>
                <button onClick={Reset_tickets}>Reset Tickets</button>
            </div>
        </>
    );
}