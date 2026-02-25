import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, selectItemCount } from "../../redux/cartSlice";
import type { ProductProps } from "../../types/data";
import type { RootState } from "../../redux/store";

export default function QuantityCounter({ product }: { product:ProductProps }) {
 const cartCount = useSelector((state: RootState) =>
  selectItemCount(state, product.id)
);
 
  const dispatch = useDispatch()

  const increase = () => {
    dispatch(addToCart(product))

  };

  const decrease = () => {
    if (cartCount > 0) {
      dispatch(decreaseQuantity(product?.id))
    }
  };



  return (
    <>
      {cartCount == 0 ? (
        <div
          onClick={increase}
          className="flex cursor-pointer z-30 w-fit gap-2 border border-[#d7d7d7] rounded-xl text-secondary py-2 px-2"
        > 
          <h3 className="text-sm font-bold">ADD</h3>
        </div>
      ) : (
        <>
        <div className="flex w-fit gap-2 md:hidden border border-[#d7d7d7] rounded-xl text-secondary py-2 px-2">
          <button onClick={decrease} className="text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="#c0392b"
                d="M4.75 12c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25"
              ></path>
            </svg>
          </button>

          <span className="text-md font-semibold">{cartCount}</span>

          <button onClick={increase} className="text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="#c0392b"
                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1"
              ></path>
            </svg>{" "}
          </button>
        </div>
        <div className="hidden w-fit gap-2 md:flex border border-[#d7d7d7] rounded-xl text-secondary py-2 px-2">
          <button onClick={decrease} className="text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path
                fill="#c0392b"
                d="M4.75 12c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25"
              ></path>
            </svg>
          </button>

          <span className="text-sm font-semibold">{cartCount}</span>

          <button onClick={increase} className="text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path
                fill="#c0392b"
                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1"
              ></path>
            </svg>{" "}
          </button>
        </div>
        </>
      )}
    </>
  );
}
