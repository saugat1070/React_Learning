import "./price.css"

function Price({old_price,new_price}){

    return (
        <div className="price_section">
            <p id="old_price">{old_price}</p>
            <p>{new_price}</p>
        </div>
    )
}

export {Price};