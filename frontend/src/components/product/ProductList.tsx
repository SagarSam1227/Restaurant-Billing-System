import { useMemo, useEffect, useState } from "react";
import { useCategory } from "../../contextApi/CategoryContext";
import EachItem from "./EachItem";
import type { ProductProps } from "../../types/data";
import noResult from "../../assets/no-result.png"
import { useSearch } from "../../contextApi/SearchContext";

type Props = {
  products: ProductProps[];
};

export default function ProductList({
  products,
}: Props) {
  const { selectedCategory } = useCategory();
  const [isResultNotFound,setIsResultNotFound] = useState<Boolean>(false)
  const {setSelectedCategory} = useCategory()
 const { searchTerm } = useSearch();

const filteredProducts = useMemo(() => {
  let tempArr: ProductProps[] = [];

  if (selectedCategory === "All") {
    tempArr = products;
  } else {
    tempArr = products.filter(
      (product) => product.category === selectedCategory
    );
  }

  if (searchTerm) {
    tempArr = tempArr.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return tempArr;

}, [products, selectedCategory, searchTerm]);
  useEffect(() => {
    setIsResultNotFound(filteredProducts.length === 0);
  }, [filteredProducts, setIsResultNotFound]);

 return ( 
  <div className="p-5 md:h-[80vh] md:overflow-y-auto no-scrollbar">
    {isResultNotFound ? (
      <div className="w-full flex flex-col items-center justify-center text-center mt-20">
        <img className="w-1/2 md:w-1/4" src={noResult} />
        <h3 className="font-bold text-sm text-gray-500">
          Result not found
        </h3>
        <button
          onClick={() => setSelectedCategory("All")}
          className="py-2 px-5 rounded-full bg-secondary mt-2 text-sm font-bold text-white"
        >
          Back
        </button>
      </div>
    ) : (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts.map((product: ProductProps) => (
          <EachItem key={product.id} product={product} />
        ))}
      </div>
    )}
  </div>
);
}