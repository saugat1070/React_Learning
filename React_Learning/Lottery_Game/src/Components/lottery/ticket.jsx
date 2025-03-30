import Ticket_num from "./ticket_num";

export default function Ticket({ticket}){

    return (
        <div className="ticket_container">
            
            {ticket.map((num,idx)=>(
                <Ticket_num num={num} key={idx} />
            )

            )}
        </div>
    )
}