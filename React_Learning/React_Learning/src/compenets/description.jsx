import "./description.css"

function Description({title,description}){
    
    return(
        <div className="description_section">
            <h3>{title}</h3>
            {description}
        </div>
    )
}

export {Description};