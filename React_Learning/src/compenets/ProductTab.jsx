import { Product } from "./product"
// --> props are the information that you pass to a jsx tag
function ProductTab(){ 
    return(
        <div className="ProductTab">
            <Product title="Iphone 14" Price={10000}/>
            <Product title="Samsung S24" Price={12000}/>
        </div>
    );
}

export {ProductTab};