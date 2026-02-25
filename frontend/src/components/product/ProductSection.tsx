import { products } from "../../data/product";
import ProductList from "./ProductList";

export default function ProductSection(){
    return(
         <div className="w-full md:h-fit h-screen md:mt-2 mt-40 bg-[white]">
          <div className="w-full h-full">
            <ProductList products={products} />
          </div>
        </div>
    )
}