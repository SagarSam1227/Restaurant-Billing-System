import { categories } from "../../data/product";
import type { Category } from "../../types/data";
import CategoryButton from "./CategoryButton";

export default function CategorySection(){
      const categoryArray: Category[] = categories;
    
    return(
        <div className="h-16.25 md:w-fit md:bg-[white] md:shadow-xl md:flex-col md:py-4 md:h-[80vh] md:rounded-2xl rounded-full bg-[#f2f2f2] items-center w-[90%] mx-auto mb-5 px-5 flex gap-3 overflow-x-auto no-scrollbar whitespace-nowrap">
                    {categoryArray.map((value) => (
                      <CategoryButton
                        key={value}
                        category={value}
                      />
                    ))}
                  </div>
    )
}