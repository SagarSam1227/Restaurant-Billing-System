import { useState } from "react";
import Cart from "./Cart";

export default function CartSection(){

      const [isCartClicked, setIsCartClicked] = useState<Boolean>(false);


    return(
        <>
        <div className="fab-container md:hidden">
        <button
          onClick={() => {
            setIsCartClicked(true);
          }}
          className="fab-button bg-primary border-2 border-[#f5f5f5]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21 6H7.05L5.94 2.68A1 1 0 0 0 4.99 2h-3v2h2.28l3.54 10.63A2 2 0 0 0 9.71 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35A.997.997 0 0 0 21 6M10 18a2 2 0 1 0 0 4a2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 1 0 0-4"
            ></path>
          </svg>
        </button>
      </div>
      {isCartClicked ? <Cart close={setIsCartClicked} /> : null}
        </>
    )
}