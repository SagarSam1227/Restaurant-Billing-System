import { useMemo } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import emptycart from "../../assets/emptycart.png";
import { clearCart } from "../../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";

export default function Cart({
  close,
}: {
  close: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const total = useMemo(() => {
    return cartItems?.items?.reduce(
      (acc, item) => acc + item?.product?.price * item.quantity,
      0,
    );
  }, [cartItems]);

  const clearingCart = () => {
    close(false)
toast.success("Completed successfully", {
  style: {
    background: "black",
    color: "#ffffff",
  },
});    dispatch(clearCart());
  };

  return (
    <>
      {/* Mobile view */}
      <div className="w-full md:hidden h-screen z-50 fixed top-0 bg-[#00000047] content-end">
        <div className="w-full fade-in-down relative max-h-3/4 bg-[white] rounded-t-4xl overflow-y-auto no-scrollbar">
          <div className="w-full sticky bg-[white] h-16 flex justify-end top-0 pt-4 px-4">
            <svg
              onClick={() => {
                close(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 32 32"
            >
              <path
                fill="#070707"
                d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
              ></path>
            </svg>
          </div>

          {cartItems?.items?.length === 0 ? (
            <div className="text-center py-10 justify-items-center">
              <img className="h-1/4 w-2/4" src={emptycart}></img>
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="p-5">
                <div className="mt-1">
                  <div className="">
                    {cartItems?.items?.map((item) => (
                      <CartItem item={item} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 w-full flex px-6 pb-3 bg-[#f0f0f0] justify-between items-center gap-3 p-2">
                <div className="w-1/2 h-fit">
                  <h3 className="text-xs">Total:</h3>
                  <h3 className="text-2xl font-bold">₹ {total}</h3>
                </div>
                <div className="w-1/2 h-fit">
                  <button
                    onClick={clearingCart}
                    className="w-full shadow-md h-fit py-4 pb-5 self-end mt-2 px-4 rounded-xl bg-primary text-sm font-bold text-white"
                  >
                    PROCEED
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* desktop view */}
      

      {cartItems?.items?.length > 0 ? (
        <div className="w-64 mt-20 mx-3 h-[70vh] bg-[#ffffff] rounded-2xl flex flex-col shadow-lg">

  {/* 🛒 Scrollable Items */}
  <div className="p-5 flex-1 overflow-y-auto no-scrollbar">
    {cartItems?.items?.map((item) => (
      <CartItem key={item.product.id} item={item} />
    ))}
  </div>

  {/* 💰 Fixed Bottom Section */}
  <div className=" rounded-b-2xl w-full flex px-6 py-4 bg-[#f0f0f0] justify-between items-center gap-3">
    <div>
      <h3 className="text-xs text-gray-500">Total:</h3>
      <h3 className="text-lg font-bold">₹ {total}</h3>
    </div>

    <button
      onClick={clearingCart}
      className="px-4 py-2 rounded-xl bg-primary text-sm font-bold text-white shadow-md hover:opacity-90 transition"
    >
      PROCEED
    </button>
  </div>
</div>
      ) : null}
      <ToastContainer />
    </>
  );
}
