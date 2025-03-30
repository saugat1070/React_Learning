import "./App.css"
// import Title from "./compenets/Title";
import { Title } from "./compenets/Title";
import {ProductTab} from "./compenets/ProductTab"
import { MassageContainer } from "./compenets/massageContainer";
import { Product } from "./compenets/product";



function App(){
  return (
  <>
  <Product idx={0}/>
  <Product idx={1}/>
  <Product idx={2}/>
  <MassageContainer/>
  <p>Hello World</p><br />
  <button> click me </button>
  </>
  );
}

 export default App
