import { useSearch } from "../../contextApi/SearchContext";


export default function SearchBar() {
  const {searchTerm,setSearchTerm} = useSearch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value)
  };

  return (
    <div className="flex items-center h-full w-full shrink py-2 pr-2 pl-4 rounded-full bg-[#f2f2f2] ">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
        className="flex-1 gap-1 bg-transparent outline-none ml-3 text-sm"
      />
      <div className="w-fit h-full px-3 text-white font-bold text-sm content-center text-center bg-primary rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fffdfd" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path></svg>
      </div>
    </div>
  );
}
