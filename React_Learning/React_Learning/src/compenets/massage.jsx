 import "./massage.css"

 function Massage({name,greet,text_color}){
    let styles = {color:text_color};
    return(
        <div className="Massage_Box_container">
            <div className="Massage_Box" id="photo_Section">
            </div>
            <div className="Massage_Box" id="greet_section">
                <p>Name:{name}</p>
                <p style={styles}>Massage:{greet}</p>
            </div>
        </div>
    )
 }

 export {Massage};