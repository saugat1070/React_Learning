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
// function Product({title,Price}){
//     let isDisount = Price>30000 ? <li>Disount:5%</li> : null; 
//     let styles = {backgroundColor: Price > 30000 ? "pink":null};
//     return( 
//         <div className="Product" style={styles}>
//         <h3>title:{title}</h3>
//         <h4>price:{Price}</h4>
//         <p>{isDisount}</p>
//         </div>
//     )
// }
import {Description} from "./description"
import {Price} from "./price"


function Product({idx}){
    let old_price = ["1000","1200","1300","1400"];
    let new_price = ["900","1000","1100","1200"];
    return (
        <div className="Product">
            <Description title="lenevo 15" description={<ul>
                <li>m5 chip</li>
                <li>512 ssd</li>
            </ul>}/>
            <Price old_price={old_price[idx]} new_price={new_price[idx]}/>
        </div>
    )
}
export { Product };