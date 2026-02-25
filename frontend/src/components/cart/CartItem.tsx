import type { ProductProps } from "../../types/data";
import QuantityCounter from "../layout/QuantityCounter";

export default function CartItem({
  item,
}: {
  item: { product: ProductProps; quantity: number };
}) {
  return (
    <>
      <div
        key={item?.product?.id}
        className="flex w-full md:hidden gap-3 items-center justify-between border-b border-[#b9b9b9] pt-4 pb-4"
      >
        <img
          src={item?.product?.image}
          alt={item?.product?.name}
          className="w-20 h-20 object-cover shrink-0 rounded-lg"
        />
        <div className="w-2/3 h-20 overflow-hidden">
          <div className="w-full md:h-fit h-1/2 font-semibold text-md truncate">
            {item?.product?.name}
          </div>
          <div className="w-full flex h-1/2 gap-4">
            <p className="text-gray-500">₹ {item?.product?.price}</p>
            <QuantityCounter product={item.product} />
          </div>
        </div>

        <div className="font-semibold w-fit shrink-0 self-end py-2 px-3 text-sm bg-secondary text-white rounded-lg">
          ₹ {item?.product?.price * item.quantity}
        </div>
      </div>

      <div
        key={item?.product?.id}
        className=" w-full md:flex hidden gap-3 items-center justify-between border-b border-[#b9b9b9] pt-4 pb-4"
      >
        <img
          src={item?.product?.image}
          alt={item?.product?.name}
          className="w-14 h-14 object-cover shrink-0 rounded-lg"
        />
        <div className="w-2/3 h-20 overflow-hidden content-center">
          <div className="w-full md:h-fit h-1/2 font-bold text-sm truncate">
            {item?.product?.name}
          </div>
          <div className="w-full flex h-1/2 gap-4">
            <p className="text-gray-500 text-sm">₹ {item?.product?.price}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <QuantityCounter product={item.product} />
          <div className="font-semibold w-fit shrink-0 self-end py-1 px-2 text-sm bg-secondary text-white rounded-lg">
            ₹ {item?.product?.price * item.quantity}
          </div>
        </div>
      </div>
    </>
  );
}
