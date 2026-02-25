import { useCategory } from "../../contextApi/CategoryContext";
import type { Category } from "../../types/data";

type CategoryButtonProps = {
  category: Category;
};

export default function CategoryButton({
  category,
}: CategoryButtonProps) {

    const { selectedCategory,setSelectedCategory } = useCategory();



  return (
    <>
      <button
        onClick={() => {
          setSelectedCategory(category)
        }}
        className={`${selectedCategory == category ? "bg-primary text-sm text-[white] font-bold" : "bg-[#ffffff]"} h-fit text-sm md:w-full md:shadow-none md:border-gray-200 md:border shadow-xl rounded-full pt-2 pb-3 shrink-0  px-4 content-center`}
      >
        {category}
      </button>
    </>
  );
}
