import { Massage } from "./massage";
import "./massageContainer.css"

function MassageContainer(){
    let list_of_name = ["Saugat Giri","Suyog","Goma"];
    let list_of_massage = ["Hi How are you?","Namaskar","k cha khabar"];

    return (
        <div className="Container">
            <Massage name="Saugat Giri" greet="Hellow" text_color="pink"/>
            <Massage/>
            <Massage/>
        
        </div>
    )
}

export {MassageContainer}