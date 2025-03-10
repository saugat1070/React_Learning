import "./product.css"
//--> Using props object method
// function Product(props){
//     return (
//         <div className="Product">
//             <h3>{props.title} </h3>
//             <h5>{props.Price}</h5>
//         </div>
//     );
// }
function Product({title,Price=0}){  //{title,price} <-- React Props
    return(
        <div className="Product">
            <h3>Product:{title}</h3>
            <h5>Price:{Price}</h5>
        </div>
    )
}
export { Product };