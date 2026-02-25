import { useState } from "react";
import SearchBar from "./SearchBar";
import { toast, ToastContainer } from "react-toastify";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user: string | null = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logout Successfully", {
      style: {
        background: "black",
        color: "#ffffff",
      },
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className=" w-[90%] relative md:hidden flex mx-auto gap-2 mt-5 mb-4 h-14 z-50">
        {isOpen ? (
          <div onClick={()=>setIsOpen(false)} className="w-full"></div>
        ) : (
          <SearchBar />
        )}

        <button onClick={() => setIsOpen(!isOpen)} className="h-14 w-14 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="none"
              stroke="#292929"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M96 256h320M96 176h320M96 336h320"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-14 right-2 text-black border border-white flex flex-col p-4 bg-white shadow-2xl rounded-xl z-50">
            <button className="mb-2 font-bold ">{user}</button>
            <button className="text-[red] font-bold" onClick={handleLogout}>
              Log out
            </button>
          </div>
        )}
        <ToastContainer />
      </div>


      <div className="hidden md:flex w-full mt-6 items-center justify-between px-8">

      <div className="w-64 h-12">
        {isOpen ? (
          <div onClick={()=>setIsOpen(false)} className="w-full"></div>
        ) : (
          <SearchBar />
        )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="h-12 w-12 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="none"
              stroke="#292929"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M96 256h320M96 176h320M96 336h320"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-14 right-2 text-black border border-white flex flex-col p-4 bg-white shadow-2xl rounded-xl z-50">
            <button className="mb-2 md:text-sm font-bold ">{user}</button>
            <button className="text-[red] md:text-sm font-bold" onClick={handleLogout}>
              Log out
            </button>
          </div>
        )}
      </div>


        <ToastContainer />
    </>
  );
}
