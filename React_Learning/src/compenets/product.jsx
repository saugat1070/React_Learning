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

// function Product({title,Price=0,features,feature2,list_li}) {  //{title,price} <-- React Props
//     console.log(list_li);
//     return(
//         <div className  ="Product">
//             <h3>Product:{title}</h3>
//             <h5>Price:{Price}</h5>
//             <p>{list_li}</p>
//             <p>{feature2.a}</p>
//         </div>
//     )
// }
// function Product({title,Price,features}){
//     const list = features.map((feature)=> <li>{feature}</li>); // <-- mapping method
//     return(
//         <div className="Product">
//         <h3>title:{title}</h3>
//         <h4>price:{Price}</h4>
//         <p>{list}</p>
//         </div>
//     )
// }
function Product({title,Price}){
    
    return(
        <div className="Product">
        <h3>title:{title}</h3>
        <h4>price:{Price}</h4>
        
        </div>
    )
}

export { Product };