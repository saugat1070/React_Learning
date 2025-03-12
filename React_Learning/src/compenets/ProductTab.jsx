import { Product } from "./product"
// --> props are the information that you pass to a jsx tag
function ProductTab(){ 
    let option  = ["hi-teach","durable","fast"];
    let option2 = {a:"hi-tech",b:"durable",c:"fast"};
    let list_ = [<li>add component</li>,<li>delete component</li>];
    return(
        <div className="ProductTab">
            <Product title="Iphone 14" Price={10000} features={option} feature2={option2} list_li={list_}/>
            <Product title="Samsung S24" Price={12000} features={option} feature2={option2} list_li={list_}/>
            <Product title="Vivobook" Price={120000} features={option} feature2={option2} list_li={list_}/>

        </div>
    );
}

export {ProductTab};